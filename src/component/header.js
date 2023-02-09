import React from "react";

const Header = () => {
  return (
    <div className="container">
      <nav className="navBar">
        <img
          className="logo"
          src="https://i.pinimg.com/originals/68/7d/ed/687dedbb44330094705fe031b63b8efa.png"
          width="100px"
          height="50px"
        />
        <div className="navChilds">
          <nav className="nav"> home </nav>
          <nav className="nav"> contact </nav>
          <nav className="nav"> about </nav>
          <nav className="nav"> Cart </nav>
        </div>
      </nav>
    </div>
  );
};

export default Header;
