import { Post, User } from "./models.js";
import db from "./db.js";

console.log("Syncing database...");
await db.sync({ force: true });

console.log("Seeding database...");

const userData = [
  {
    firstName: "Kristin",
    lastName: "Baker",
  },
];

const postData = [
  {
    title: "First Post!",
    body: "Testing",
    authorId: 1,
  },
];

const usersInDB = await Promise.all(
  userData.map((user) => {
    const { firstName, lastName } = user;
    const newUser = User.create({
      firstName,
      lastName,
    });

    return newUser;
  })
);

const postsInDB = await Promise.all(
  postData.map((post) => {
    const { title, body } = post;

    const newPost = Post.create({
      title,
      body,
      author_id: 1,
    });

    return newPost;
  })
);

console.log(usersInDB);
console.log(postsInDB);

await db.close();
console.log("Finished seeding database!");
