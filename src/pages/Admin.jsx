import axios from "axios";
import { useNavigate } from "react-router-dom";
import LogoutButton from "../components/LogoutButton.jsx";

import LoginForm from "../components/LoginForm.jsx";

export default function Admin() {
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/logout");
    if (res.data.success) {
      localStorage.setItem("isLoggedIn", "false");
      navigate("/");
    }
  };

  const handleLogin = async (event, formData) => {
    event.preventDefault();

    const res = await axios.post("/api/auth", formData);
    console.log(res);

    if (res.data.success) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/author");
    }
  };

  return (
    <>
      <h1>Log In</h1>
      <LoginForm onLogin={handleLogin} />
      <LogoutButton onLogout={handleLogout} />
    </>
  );
}
