import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

// defining root of react
const root = ReactDOM.createRoot(document.getElementById("root"));

// passing the react element inside the root
root.render(<AppLayout />);
