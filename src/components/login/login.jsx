import { useState } from "react";
import { Link } from 'react-router-dom';

function LoginForm({ onLogin, onLogout }) {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // fetch("http://127.0.0.1:5555/login", {
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      }
    });
  }

  function handleLogout({ onLogout }) {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }


  return (

    <div>
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <button onClick={handleLogout}>Logout</button>
      <Link to='/signup'>
        <button>Create an Account</button>
      </Link>
    </div>

  );
}

function SignupForm({ onSignup }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");


  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onSignup(user));
      }
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Signup</h3>

        <label htmlFor="signup-email">Email Address: </label>
        <input
          type="text"
          id="signup-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="signup-firstname">First Name: </label>
        <input
          type="text"
          id="signup-firstname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />

        <label htmlFor="signup-lastname">Last Name: </label>
        <input
          type="text"
          id="signup-lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />

        <label htmlFor="signup-username">Username: </label>
        <input
          type="text"
          id="signup-username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="signup-password">Password: </label>
        <input
          type="password"
          id="signup-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}




export { LoginForm, SignupForm };