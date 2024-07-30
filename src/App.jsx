import { NavLink, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import "./index.css";

function App() {
  const [authorData, setAuthorData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/TheAuthor");
        console.log("useEffect res: ", res);
        setAuthorData(res.data);
      } catch (error) {
        console.error("Error fetching author data:", error);
      }
    };

    fetchData();
  }, []);

  console.log("authorData: ", authorData);

  return (
    <div className="w-full h-full bg-[#F1E7D0]">
      <header className="flex flex-col items-center bg-gradient-to-b from-[#E8D7B0] bg-opacity-25 p-5">
        <nav className="bg-gradient-to-t-from[#E8D7B0]">
          <NavLink to="/">
            <img
              className="h-32 w-42 drop-shadow-grey-500/50"
              src="/homeButtonGears.png"
              alt="Vite logo"
            />
          </NavLink>
        </nav>
        <nav className="w-full flex justify-around">
          {/* TODO: Plugin Author Data from server */}
          {/* state={{ author: authorData }} */}
          <NavLink to="/author">- The Author -</NavLink>
          <NavLink to="/books">- The Books -</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className=" bg-gradient-to-t from-[#E8D7B0] pb-20 pt-10">
        <div className="pt-5 pl-5">
          <p>Find Kristin Baker elsewhere:</p>
        </div>
        <nav className="flex w-2/4 p-5 pb-20">
          <NavLink className="mr-5">
            <img src="/instagram-icon.png" alt="instagram icon"></img>
          </NavLink>
          <NavLink>
            <img src="/facebook-icon.png" alt="facebook icon"></img>
          </NavLink>
        </nav>
      </footer>
    </div>
  );
}
export default App;
