import { useState } from "react";

function Admin() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //Login Handler

  const handleLogin = async (e) => {
    e.preventDefault();

    if (
      username === "pirate-kristin-baker" &&
      password === "iAmAPirateHearMeAhoyTharMatey"
    ) {
      isLoggedIn(true);
    } else {
      alert("Incorrect username or password");
    }
  };

  return (
    <div className="p-5">
      {!isLoggedIn ? (
        <div>
          <h2>Admin Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      ) : (
        <div>
          <h2>Admin Panel</h2>
        </div>
      )}
    </div>
  );
}

export default Admin;
