// import axios from "axios";
import "./index.css";
import "../output.css";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import TheAuthor from "./pages/TheAuthor.jsx";
import { TheBooks } from "./pages/TheBooks.jsx";
import { Home } from "./pages/Home.jsx";
import Admin from "./pages/Admin.jsx";
// import Admin from "./pages/Admin.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route path="/" element={<Home />} />
      <Route path="/author" element={<TheAuthor />} />
      <Route path="/books" element={<TheBooks />} />
      <Route path="/api/auth" element={<Admin />} />
      {/* <Route path="/api/auth" element={<Admin />} /> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
