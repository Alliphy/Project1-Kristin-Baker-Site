import express from "express";
import session from "express-session";
import morgan from "morgan";
import ViteExpress from "vite-express";

import appRouter from "./routes/index.js";

const app = express();
const PORT = "5000";
ViteExpress.config({ printViteDevServerHost: true });

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({
    secret: "nobodyWillEverKnow",
    saveUninitialized: true,
    resave: false,
  })
);

app.use(appRouter);

app.get("/TheAuthor", async (req, res) => {
  const authorData = {
    name: "Kristin Baker",
    imageUrl: "/logo-kristin-baker.png",
    bio: "A brief bio about Kristin Baker...",
  };
  res.json(authorData);
});

ViteExpress.listen(app, PORT, () =>
  console.log(`Server is listening on: ${PORT}`)
);
