import { NavLink, Outlet } from "react-router-dom";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="w-full h-full bg-[#F1E7D0]">
      <header className="flex flex-col items-center bg-[#E8D7B0] bg-gradient-to-b from-[#F1E7D0] drop-shadow-grey-500/50 p-5">
        <nav className="bg-gradient-to-t-from[#E8D7B0]">
          <NavLink to="/">
            <img
              className="h-32 w-42 drop-shadow-grey-500/50"
              src="/homeButtonGears.png"
              alt="Vite logo"
            />
          </NavLink>
        </nav>
        <nav className="w-full flex justify-around p-10">
          {/* TODO: Plugin Author Data from server */}
          {/* state={{ author: authorData }} */}
          <NavLink to="/author">- The Author -</NavLink>
          <NavLink to="/books">- The Books -</NavLink>
        </nav>
      </header>

      <main className="bg-gradient-to-b from-[#E8D7B0] bg-opacity-25 pb-20">
        <Outlet />
      </main>

      <footer className="bg-[#E8D7B0] bg-gradient-to-t from-[#F1E7D0] bg-gradient-to-b from-[#F1E7D0] drop-shadow-grey-500/50 pt-20">
        <div className="flex justify-between w-screen items-start pl-5 pr-5">
          <div>
            <p className="text-sm">Find Kristin Baker elsewhere:</p>
            <nav className="flex w-2/4">
              <NavLink
                className="w-2/4 pb-5 pt-5 pr-5"
                to="https://www.instagram.com/piratekristin/"
              >
                <img src="/instagram-icon.png" alt="instagram icon"></img>
              </NavLink>
              <NavLink
                className="w-2/4 pb-5 pt-5 pl-5"
                to="https://www.facebook.com/search/top?q=fantasy%20and%20steampunk%20ya%20author%20kristin%20baker"
              >
                <img src="/facebook-icon.png" alt="facebook icon"></img>
              </NavLink>
            </nav>
          </div>
          <section className="flex flex-col justify-evenly text-xs">
            <p className="">Credit for Icons:</p>
            <div>
              <p>Cat in logo by Iconduck on figma</p>
            </div>
          </section>
        </div>

        <div className="flex items-end justify-between w-screen h-3/4">
          {" "}
          <img
            src="/smallMushImage.png"
            alt="small image of mushrooms"
            className="w-1/20 h-20 pt-12 pl-5"
          />
          <img
            src="/groupOfMushies.png"
            alt="image of three mushrooms"
            className=" h-40 pt-12"
          />
          <img
            src="/smallMushImage.png"
            alt="small image of mushrooms"
            className="w-1/20 h-20 pt-12 pr-5"
          />
        </div>
      </footer>
    </div>
  );
}
export default App;
