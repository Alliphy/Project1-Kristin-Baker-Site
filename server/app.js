import express from "express";
import cors from "cors";
import viteExpress from "vite-express";
import session from "express-session";

import { Post, User } from "./models.js";

const app = express();
const PORT = 4202;

viteExpress.config({ printViteDevServerHost: true });

app.use(express.json());
app.use(cors());
app.use(
  session({
    secret: "IGotAJarOfDirtGuessWhatsInsideIt",
    cookie: { maxAge: 10 * 1000 * 60 }, // Session expires after 10 minutes of inactivity
    saveUninitialized: true, // Save session even if no data is modified
    resave: false, // Don't save session if no changes were made
  })
);

// Custom route middleware function that checks if the user is logged in.
function loginRequired(req, res, next) {
  // console.log("session", req.session); // Log session for debugging

  // Check if user is logged in by checking if the user ID exists in the session

  if (!req.session.user.userId) {
    // Send 401 Unauthorized response if not logged in
    res.status(401).json({ error: "Unauthorized", from: "middleware" });
  } else {
    next(); // Call the next middleware if user is logged in
  }
}

app.get("/", (req, res) => {
  res.send("OK"); // Send a simple "OK" response it has been used for seeing if a simple request would work or if everything was broken
});

//code for user authentication and session creation

app.post("/api/auth", async (req, res) => {
  // console.log(req.body);
  try {
    const userData = await User.findOne({
      where: { email: req.body.email, password: req.body.password },
    });
    console.log(userData);
    // code for verifying whether the user details are valid...
    // if everything checks out, we can then save our session by referencing
    // details about that user from the database

    req.session.logged_in = true;
    req.session.user = {
      userId: userData.userId,
      email: userData.email,
      password: userData.password,
    };

    console.log(req.session);

    return res.json({
      user: userData,
      message: "You are now logged in!",
      success: true,
      session: req.session,
    });
  } catch (e) {
    console.log("hit catch");
    res.status(500).json({ error: "Server Error" });
  }
});

// Note the `loginRequired` argument passed to the routes below!

app.post("/api/logout", (req, res) => {
  console.log("hit logout");
  // Destroy the user session
  req.session.destroy();
  // Send a success response
  res.json({ success: true });
});

//loginRequired, add login required after implementing login

app.delete("/api/posts/:postId", loginRequired, async (req, res) => {
  const postId = req.params.postId; // Extract the post ID from the parameters

  try {
    // Find the post to be deleted based on postId
    const postToDelete = await Post.findByPk(postId);

    if (!postToDelete) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Delete the post from the database
    await postToDelete.destroy();

    res.status(204).send(); // Send 204 No Content response to indicate successful deletion
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).json({ message: "Internal server error" }); // Send 500 Internal Server Error response if there's an error
  }
});

app.get("/api/posts", async (req, res) => {
  const posts = await Post.findAll();
  console.log("Hit");
  return res.json({ posts }); // Send a JSON response containing the list of posts
});

app.post("/api/user/posts", loginRequired, async (req, res) => {
  const { userId } = req.session.user;
  const { title, body } = req.body;

  const user = await User.findByPk(userId);
  console.log("user", user);

  if (!user) {
    return res.status(401).json({ error: "Unauthorized", from: "/posts" }); // Send 401 Unauthorized response if user is not found
  }
  const post = await Post.create({ title: title, body: body });

  res.json(post); // Send a JSON response containing the newly created post
});

viteExpress.listen(app, PORT, () => {
  console.log(`Listening on ${PORT}`);
});
