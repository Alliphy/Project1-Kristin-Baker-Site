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
import LoginPage from "./pages/LoginPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/app" element={<App />} errorElement={<ErrorPage />}>
      {/* Author Page */}
      <Route path="/app" element={<Home />} />
      <Route path="/app/author" element={<TheAuthor />} />
      <Route path="/app/books" element={<TheBooks />} />
      {/* <Route path="/api/auth" element={<LoginPage />} /> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
