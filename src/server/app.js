import express from "express";
import session from "express-session";
import morgan from "morgan";
import ViteExpress from "vite-express";

const app = express();
const PORT = "5030";
ViteExpress.config({ printViteDevServerHost: true });

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({ secret: "ssshhhhh", saveUninitialized: true, resave: false })
);

app.get("/TheAuthor", async (req, res) => {
  console.log("req: ", req);
  const authorData = {
    name: "Kristin Baker",
    imageUrl: "/logo-kristin-baker.png",
    bio: "A brief bio about Kristin Baker...",
  };

  console.log("the author data: ", authorData);
  return res.json(authorData);
});

ViteExpress.listen(app, PORT, () =>
  console.log(`Server is listening on: ${PORT}`)
);
