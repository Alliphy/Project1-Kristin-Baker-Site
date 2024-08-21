import axios from "axios";
import { useNavigate } from "react-router-dom";

import LoginForm from "../components/LoginForm.jsx";

export default function Admin() {
  const navigate = useNavigate();

  const handleLogin = async (event, formData) => {
    event.preventDefault();
    const res = await axios.post("/api/auth", formData);

    if (res.data.success) {
      localStorage.setItem("userId", res.data.userId);

      navigate("/author/user/posts");
    }
  };

  return (
    <>
      <h1>Log In</h1>
      <LoginForm onLogin={handleLogin} />
    </>
  );
}
