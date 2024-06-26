import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [username, SetUsername] = useState("");
  const [email, SetEmail] = useState("");
  const [passWord, SetPassword] = useState("");

  return (
    <div>
      <form>
        <h3>Login</h3>
        <div>
          <label htmlFor="username">🧑‍💼Username: </label>
          <input
            type="text"
            id="username"
            placeholder="username"
            onChange={(e) => SetUsername(e.target.value)}
            value={username}
            required
          />
        </div>
        <div>
          <label htmlFor="email">📧Email: </label>
          <input
            type="email"
            id="email"
            placeholder="email"
            onChange={(e) => SetEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div>
          <label htmlFor="passWord">🔑Password: </label>
          <input
            type="password"
            id="passWord"
            placeholder="passWord"
            onChange={(e) => SetPassword(e.target.value)}
            value={passWord}
            required
          />
        </div>
        <div>
          <Link to="/login/create">Creat new account</Link>
          <a>Forget password?</a>
        </div>
        <button>send</button>
      </form>
    </div>
  );
}

export default Login;
