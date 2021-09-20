import React from "react";

export default function Header() {
  return (
    <div className="header">
      <h1>MusiSpace 2.0</h1>
      <div className="inputArea">
        <button onClick={() => console.log("End me now")}>End Me</button>
        <input placeholder="Band Name"></input>
        <input placeholder="Song Name"></input>
      </div>
    </div>
  );
}
