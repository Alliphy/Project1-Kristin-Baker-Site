import { Link, useLoaderData } from "react-router-dom";

// const author = {
//   bio: "",
//   posts: [],
// };

export default function TheAuthor() {
  const { author } = useLoaderData();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Kristin Baker</h2>
      <p>{author.bio}</p>
    </div>
  );
}
