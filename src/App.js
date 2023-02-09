import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Card from "./component/Card";
import Header from "./component/header";
import CardHolder from "./component/CardHolder";

const App = () => {
  useEffect(() => {
    getResturant();
    console.log("avi");
  }, []);

  async function getResturant() {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2374603&lng=73.21165839999999&page_type=DESKTOP_WEB_LISTING"
    );
    let json = await data.json();
    console.log(json);
  }

  return (
    <div>
      {console.log("hh")}
      <Header />
      <CardHolder />
      {console.log("working")}
      <h1 id="title" key="h1"></h1>1 ``
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
