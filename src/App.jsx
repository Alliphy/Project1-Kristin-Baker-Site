import "./App.css";
import styled from "styled-components";
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
    <div className="bg-[#EAEAEC] ">
      <nav>
        {/* TODO: Plugin Author Data from server */}
        {/* state={{ author: authorData }} */}
        <NavLink to="/author">- The Author -</NavLink>
        <NavLink to="/books">- The Books -</NavLink>
      </nav>
      <header>
        <Logo
          className="h-10 w-10"
          src="/logo-kristin-baker.png"
          alt="Vite logo"
        />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div>
          <p>Find Kristin Baker elsewhere:</p>
        </div>
      </footer>
    </div>
  );
}

const Logo = styled.img`
  height: 50px;
`;

export default App;
