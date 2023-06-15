import React from "react";

function Parallax() {
  const parallaxStyle = {
    display: "flex",
    flexDirection: "column",
    backgroundImage: "url('/online-shop.jpg')",
    width: "100%",
    height: "90vh",
    backgroundAttachment: "fixed",
    backgroundSize: "100% 100%",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: "150px",
  };

  return (
    <div style={parallaxStyle} className="parallax">
      <h1>Shop Anywhere, Anytime!</h1>
    </div>
  );
}

export default Parallax;
