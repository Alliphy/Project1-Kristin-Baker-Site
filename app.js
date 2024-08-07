import express from "express";
import cors from "cors";
import viteExpress from "vite-express";

import { Post, User } from "./src/models.js";

const app = express();
const PORT = 4202;

viteExpress.config({ printViteDevServerHost: true });

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("OK");
});

// Custom route middleware function that checks if the user is logged in.
// function loginRequired(req, res, next) {
//   if (!req.session.userId) {
//     res.status(401).json({ error: "Unauthorized" });
//   } else {
//     next();
//   }
// }

app.post("/api/auth", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email: email } });

  if (user && user.password === password) {
    req.session.userId = user.userId;
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// Note the `loginRequired` argument passed to the routes below!

// app.post("/api/logout", loginRequired, (req, res) => {
//   req.session.destroy();
//   res.json({ success: true });
// });

//loginRequired, add login required after implementing login

// app.post("/api/ratings", loginRequired, async (req, res) => {
//   const { userId } = req.session;
//   const { movieId, score } = req.body;

//   const user = await User.findByPk(userId);
//   const rating = await user.createRating({ movieId: movieId, score: score });

//   res.json(rating);
// });

app.delete("/api/posts/:postId", async (req, res) => {
  const postId = req.params.postId;

  try {
    // Find the post to be deleted based on postId
    const postToDelete = await Post.findByPk(postId);

    if (!postToDelete) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Delete the post from the database
    await postToDelete.destroy();

    res.status(204).send(); // No content response
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/api/posts", async (req, res) => {
  const posts = await Post.findAll();
  console.log("Hit");
  return res.json({ posts });
});

app.post("/api/user/posts", async (req, res) => {
  // const { userId } = req.session;
  const { postData } = req.body;

  const { title, body } = postData;

  // const user = await User.findByPk(userId);
  const post = await Post.create({ title: title, body: body });

  res.json(post);
});

viteExpress.listen(app, PORT, () => {
  console.log(`Listening on ${PORT}`);
});
