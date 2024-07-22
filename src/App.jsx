import "./App.css";
import { NavLink } from "react-router-dom";
// import { useState } from "react";

function App() {
  // const [data, setData] = useState(null);

  // const [count, setCount] = useState(0);

  return (
    <div className="bg-[#EAEAEC] ">
      <nav>
        <NavLink to="/TheAuthor">The Author</NavLink>
        <a> The Books -</a>
      </nav>
      <header>
        <img
          className="h-10 w-10"
          src="/logo-kristin-baker.png"
          alt="Vite logo"
        />
      </header>
      <main>
        <div>
          <a>
            <img
              className="h-100 w-100"
              src="/cobalt-landing-img.png"
              alt="Vite logo"
            />
          </a>
        </div>
        <p>
          Katerina gripped the railing of the airship, the wind whipping her
          hair into a frenzy. Below, the world blurred into a dizzying canvas of
          greens and browns. Fear gnawed at her stomach, but it was overshadowed
          by a fierce determination. She wouldn't go back to her aunt, not ever.
          No matter what dangers awaited her in the unknown, they couldn't be
          worse than the life she was running away from. Taking a deep breath,
          Kate forced a smile onto her unfamiliar face. It was time to face
          whatever fate had in store for her.
        </p>
      </main>
    </div>
  );
}

export default App;
