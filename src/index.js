import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const customer = {
  first_name: "Bob",
  last_name: "Dylan",
};

//              your code inside these <div> tags
const output = (
  <div>
    <h1>My Name is{customer.first_name}</h1>
    <h2>My Last name is{customer.last_name}</h2>
  </div>
);
root.render(output);
