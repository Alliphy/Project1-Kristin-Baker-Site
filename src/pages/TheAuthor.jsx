import { useState, useEffect, useCallback } from "react";

export default function TheAuthor() {
  // State to hold the list of posts fetched from the API
  const [postData, setPostData] = useState([]);

  // State to hold the new post data before saving
  const [newPost, setNewPost] = useState({ title: "", body: "" });

  // State to track the logged in status based on localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const localIsLoggedIn = localStorage.getItem("isLoggedIn");
    // console.log(localIsLoggedIn); // for debugging purposes
    if (localIsLoggedIn === "true") {
      return true;
    } else {
      return false;
    }
  });

  // Function to save a new post - only accessible when logged in

  const handleSavePost = async (e) => {
    e.preventDefault();
    // Check if both title and body have content before proceeding
    if (newPost.body.length === 0 || newPost.title.length === 0) {
      return;
    }

    try {
      // Prepare the payload (our data to send) for the post request
      const payload = {
        title: newPost.title,
        body: newPost.body,
      };

      // Send a POST request to the API endpoint to save the new post
      const response = await fetch("/api/user/posts", {
        method: "POST", // Use POST for sending data
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      // Handle errors from the API response
      if (!response.ok) {
        throw new Error(`Error saving post: ${response.statusText}`);
      }

      // Parsing the response data using json
      const data = await response.json();

      // console log for our post data after successfully created
      // console.log("post data after create: ", data);

      // Perform additional actions after successful post creation
      onPostCreated(data);
      // Reset the new post data to an empty object
      setPostData([]);
    } catch (error) {
      console.error("Error saving post:", error);
      alert("There was an error saving the post. Please try again later.");
    }
  };

  // Function to delete a post by its ID
  const deletePost = async (postId) => {
    try {
      // Send a DELETE request to the API endpoint to delete the post
      const response = await fetch(`/api/posts/${postId}`, {
        method: "DELETE", // Use DELETE for removing data
      });
      // Handle errors from the API response
      if (!response.ok) {
        throw new Error(`Error deleting post: ${response.statusText}`);
      }

      console.log("Post deleted successfully!");
      // Update the UI with the new list of posts after deletion
      fetchMyPosts();
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("There was an error deleting the post. Please try again later.");
    }
  };

  // Function to fetch all user's posts from the API (uses useCallback function)
  const fetchMyPosts = useCallback(() => {
    fetch("/api/posts", {
      method: "GET", // Use GET for receiving data
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      //once our promise is fulfilled we will then take our response to access the api call to gather all our post data within our array
      .then((response) => response.json()) // Parse the response as JSON
      .then((data) => {
        const posts = data.posts; // accessing "posts" property from data
        console.log("posts: ", posts);

        // Check if the data is an array of posts before updating state
        if (Array.isArray(posts)) {
          setPostData(posts);
        }
      })
      .catch((e) => {
        console.log("does it make it here? ");
        console.error(e);
      });
  }, []);

  // Function to handle post creation callback to update browser
  const onPostCreated = (data) => {
    console.log("post created");
    console.log("here is the data: ", data);
    fetchMyPosts(); // Re-fetch posts after a new one
  };

  useEffect(() => {
    fetchMyPosts();
  }, [fetchMyPosts]);

  // This useEffect hook ensures that `fetchMyPosts` is called once when the component mounts and whenever the `fetchMyPosts` dependency changes.
  // Since `fetchMyPosts` is a useCallback dependency this will only re-render if its implementation changes.
  // This helps prevent unnecessary re-renders ensuring that posts are fetched correctly after actions such as creating or deleting a post. WOO!!! love a use effect

  return (
    <div className="p-5">
      <div className="flex divAuthorBioAuthorjsx">
        <div
          alt="portrait of Kristin Baker"
          className="bg-[url('/kristin-baker-image.jpg')] bg-left bg-cover bg-no-repeat w-2/4 rounded-full shadow-2xl kristinBakerImgAuthorjsx"
        ></div>
        <div className="flex flex-col h-auto pl-5  text-xl place-content-center content divTextBioContainerAuthorjsx">
          <h2>Kristin Baker</h2>
          <p>{quote}</p>
        </div>
      </div>
      <div className="flex flex-col p-5 pt-32">
        {isLoggedIn ? (
          <section>
            {/* Input form for creating posts */}
            <form>
              <input
                className="ml-5"
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
                className="ml-5"
                placeholder="Post Body"
                value={newPost.body}
                onChange={(e) =>
                  setNewPost((prev) => ({
                    ...prev,
                    body: e.target.value,
                  }))
                }
              />
              <button className="ml-5" type="submit" onClick={handleSavePost}>
                Create New Post
              </button>
            </form>
          </section>
        ) : (
          <p>Ahoy! There be Bloggin'</p>
        )}
        <section className="flex flex-col">
          {/* Display all posts */}
          {postData.length === 0 && <div>No Posts Yet</div>}
          {postData.map((post) => (
            <div key={post.postId}>
              <p className="p-5">{post.title}</p>
              <p className="p-5">{post.body}</p>
              {isLoggedIn && (
                <button
                  className="ml-5"
                  onClick={() => deletePost(post.postId)}
                >
                  Delete
                </button>
              )}
              {console.log(isLoggedIn)}
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

// ----- I MADE BIG CHANGES SO THIS IS MY PREVIOUS CODE FOR REFERENCE -------- //

//   <div className="p-5">
//     <div className="flex">
//       <div
//         alt="portrait of Kristin Baker"
//         className="bg-[url('/kristin-baker-image.jpg')] bg-left bg-cover bg-no-repeat w-2/4 rounded-full shadow-2xl"
//       ></div>
//       <div className="flex flex-col w-2/4 h-screen pl-5 pl-8 pr-8 text-xl place-content-center">
//         <h2>Kristin Baker</h2>
//         <p>{quote}</p>
//       </div>
//     </div>
//     <div className="pt-32">
//       <p>Ahoy! There be Bloggin'</p>

//       <section>
//         <form>
//           <input
//             placeholder="Post Title"
//             value={newPost.title}
//             onChange={(e) =>
//               setNewPost((prev) => ({
//                 ...prev,
//                 title: e.target.value,
//               }))
//             }
//           />
//           <input
//             placeholder="Post Body"
//             value={newPost.body}
//             onChange={(e) =>
//               setNewPost((prev) => ({
//                 ...prev,
//                 body: e.target.value,
//               }))
//             }
//           />
//           <button type="submit" onClick={handleSavePost}>
//             Create New Post
//           </button>
//         </form>
//       </section>
//       <section>
//         {postData.length === 0 && <div>No Posts Yet</div>}
//         {postData.map((post) => (
//           <div key={post.postId}>
//             <p>{post.title}</p>
//             <p>{post.body}</p>
//             <button onClick={() => deletePost(post.postId)}>Delete</button>
//           </div>
//         ))}
//       </section>
//     </div>
//   </div>
// );

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
