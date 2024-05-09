import { useState } from "react";

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const isDisabled = !username || !password || !displayName;

  return (
    <form>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <label htmlFor="displayName">Display Name</label>
        <input
          type="text"
          id="displayName"
          value={displayName}
          onChange={(e) => {
            setDisplayName(e.target.value);
          }}
        />
        <div>
          <span>Username: {username}</span>
        </div>
        <div>
          <span>Password: {password}</span>
        </div>
        <div>
          <span>Display Name: {displayName}</span>
        </div>
        <button disabled={isDisabled}>Sign Up</button>
      </div>
    </form>
  );
}
