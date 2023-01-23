import { useState } from "react";
import GitHubUser from "./githubuser";

const FindUser = () => {
  const [userName, setUserName] = useState("");

  return (
    <div className="find-user">
      <h1>Github User Finder</h1>
      <form>
        <div className="form-group">
          <label htmlFor="username"></label>
          <input
            type="text"
            placeholder="Enter username"
            onChange={(event) => setUserName(event.target.value)}
          />
        </div>
      </form>

      <div className="result">
        {userName ? (
          <GitHubUser username={userName} />
        ) : (
          <p>Please Initiate a Search!!!!</p>
        )}
      </div>
    </div>
  );
};

export default FindUser;
