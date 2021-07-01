import React from "react";

export default function Home() {
  const containerStyle = {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "1em",
  };

  return (
    <>
      <div className="home__Container" style={containerStyle}></div>
    </>
  );
}
