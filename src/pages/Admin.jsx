import axios from "axios";
import { useState } from "react";

export default function Admin() {
  const [postData, setPostData] = useState();

  const createPost = async () => {
    try {
      const res = await axios.post("/api/admin/posts", {
        title: "a post title",
        body: "a body of text for post",
      });
      console.log("useEffect res: ", res);
      setPostData(res.data);
    } catch (error) {
      console.error("Error fetching post data:", error);
    }
  };

  createPost();

  console.log("postData: ", postData);

  return (
    <div>
      <button>Create Post</button>
    </div>
  );
}
