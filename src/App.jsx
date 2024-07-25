import { NavLink, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

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
    <div className="w-full h-full bg-[#EAEAEC] ">
      <header className="flex items-center p-3">
        <nav>
          <NavLink to="/">
            <img
              className="h-10 w-10"
              src="/logo-kristin-baker.png"
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
      <footer className="mt-5">
        <div>
          <p>Find Kristin Baker elsewhere:</p>
        </div>
        <nav className="flex w-2/4 justify-between">
          <NavLink>
            <img alt="instagram icon"></img>
          </NavLink>
          <NavLink>
            <img alt="tiktok icon?"></img>
          </NavLink>
          <NavLink>
            <img alt="facebook icon"></img>
          </NavLink>
        </nav>
      </footer>
    </div>
  );
}
export default App;
