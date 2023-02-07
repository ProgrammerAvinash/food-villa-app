import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header";

const App = () => {
  return (
    <div>
      <Header />
      {console.log("working")}
      <h1 id="title" key="h1"></h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
