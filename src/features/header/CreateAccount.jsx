import { useState } from "react";

function CreateAccount() {
  const [username, SetUsername] = useState("");
  const [email, SetEmail] = useState("");

  return (
    <div>
      <form>
        <h3>Create</h3>
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
        <button>Create</button>
      </form>
    </div>
  );
}

export default CreateAccount;
