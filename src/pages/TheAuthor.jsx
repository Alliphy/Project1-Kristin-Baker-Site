// import { useLoaderData } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
// import { Post } from "../models";

export default function TheAuthor() {
  // const [authorData, setAuthorData] = useState(null);
  const [postData, setPostData] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", body: "" });

  const handleSavePost = async (e) => {
    e.preventDefault();
    if (newPost.body.length === 0 || newPost.title.length === 0) {
      return;
    }

    try {
      const payload = {
        title: newPost.title,
        body: newPost.body,
      };

      const response = await fetch("http://localhost:4202/api/user/posts", {
        method: "POST", // Use POST for sending data
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ postData: payload }),
      });

      if (!response.ok) {
        throw new Error(`Error saving post: ${response.statusText}`);
      }

      const data = await response.json();

      console.log("post data after create: ", data);

      onPostCreated(data);
      setPostData([]);
    } catch (error) {
      console.error("Error saving post:", error);
      alert("There was an error saving the post. Please try again later.");
    }
  };

  const deletePost = async (postId) => {
    try {
      const response = await fetch(
        `http://localhost:4202/api/posts/${postId}`,
        {
          method: "DELETE", // Use DELETE for removing data
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error deleting post: ${response.statusText}`);
      }

      console.log("Post deleted successfully!");
      fetchMyPosts(); // Update the UI with the new list of posts
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("There was an error deleting the post. Please try again later.");
    }
  };

  const fetchMyPosts = useCallback(() => {
    fetch("http://localhost:4202/api/posts", {
      method: "GET", // Use GET for receiving data
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const posts = data.posts;
        console.log("posts: ", posts);
        if (Array.isArray(posts)) {
          setPostData(posts);
        }
      })
      .catch((e) => {
        console.log("does it make it here? ");
        console.error(e);
      });
  }, []);

  const onPostCreated = (data) => {
    console.log("post created");
    console.log("here is the data: ", data);
    fetchMyPosts();
  };

  useEffect(() => {
    fetchMyPosts();
  }, [fetchMyPosts]);

  // console.log("authorData: ", authorData);

  return (
    <div className="p-5">
      <div className="flex pl-5 pt-20">
        <img
          src="/davina-tennant.jpg"
          alt="portrait of Kristin Baker"
          className="object-cover w-2/4 rounded-full shadow-2xl"
        />
        <div className="w-2/4 pl-5 flex flex-col justify-center pl-8  pr-8">
          <h2>Kristin Baker</h2>
          <p>{quote}</p>
        </div>
      </div>
      <div className="pt-32">
        <p>Ahoy! There be Bloggin'</p>
        <section>
          <form>
            <input
              placeholder="Post Title"
              value={newPost.title}
              onChange={(e) =>
                setNewPost((prev) => ({
                  ...prev,
                  title: e.target.value,
                }))
              }
            />
            <input
              placeholder="Post Body"
              value={newPost.body}
              onChange={(e) =>
                setNewPost((prev) => ({
                  ...prev,
                  body: e.target.value,
                }))
              }
            />
            <button type="submit" onClick={handleSavePost}>
              Create New Post
            </button>
          </form>
        </section>
        <section>
          {postData.length === 0 && <div>No Posts Yet</div>}
          {postData.map((post) => (
            <div key={post.postId}>
              <p>{post.title}</p>
              <p>{post.body}</p>
              <button onClick={() => deletePost(post.postId)}>Delete</button>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

const quote = `
Kristin Baker is a lifelong wordsmith whose passion for storytelling ignited at a tender age. With a pen or laptop as her constant companion, she has spent countless hours crafting worlds and characters that dance across the pages of her imagination. Her debut novel, Cobalt, marks a significant milestone in her literary journey, bringing her vivid storytelling to life for readers everywhere.

When not lost in the realms of fiction, Kristin revels in the role of a devoted mother to her six children, finding joy in their laughter and inspiration in their endless energy. A self-proclaimed goofy lady, she infuses her life with humor and lightheartedness, leaving a trail of smiles wherever she goes. Nature holds a special allure for Kristin, as she finds solace and adventure in hiking through the great outdoors. Whether it’s immersing herself in the tranquility of a body of water or embarking on unexpected encounters with snakes or crabs, her spirit for exploration knows no bounds.`;

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const res = await axios.get("/api/posts");
//       console.log("useEffect res: ", res);
//       setAuthorData(res.data);
//     } catch (error) {
//       console.error("Error fetching author data:", error);
//     }
//   };

//   fetchData();
// }, []);
