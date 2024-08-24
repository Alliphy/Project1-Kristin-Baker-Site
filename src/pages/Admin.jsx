import axios from "axios";
import { useNavigate } from "react-router-dom";
import LogoutButton from "../components/LogoutButton.jsx";

import LoginForm from "../components/LoginForm.jsx";

export default function Admin() {
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const res = await axios.post("/api/logout"); // Send a POST request to the logout API endpoint
    if (res.data.success) {
      // Check if the logout API response is successful
      localStorage.setItem("isLoggedIn", "false"); // Set local storage to indicate not logged in
      navigate("/"); // Navigate to the home page when logged out
    }
  };

  const handleLogin = async (event, formData) => {
    event.preventDefault();

    const res = await axios.post("/api/auth", formData); // Send a POST request to the login API endpoint with login data
    // console.log(res); // Log the API response for debugging purposes

    if (res.data.success) {
      // Check if the login API response is successful
      localStorage.setItem("isLoggedIn", "true"); // Set local storage to indicate logged in
      navigate("/author"); // Navigate to the author page if logged in
    }
  };

  return (
    <>
      <h1>Log In</h1>
      <LoginForm onLogin={handleLogin} />{" "}
      {/* Render the LoginForm component with handleLogin function as prop and do the same with LogOut */}
      <LogoutButton onLogout={handleLogout} />
    </>
  );
}
