import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <div className="head">
      <h1>All Users</h1>
      <div className="container">
        <div className="row">
          {typeof backendData.users === "undefined" ? (
            <p>Loading...</p>
          ) : (
            backendData.users.map((user, i) => <p key={i}>{user}</p>)
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
