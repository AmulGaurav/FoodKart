// create nested react elements
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [
    React.createElement("h1", { className: "title" }, "Heading 1"),
    React.createElement("h2", { className: "title" }, "Heading 2"),
  ]
);

const container2 = React.createElement(
  "div",
  {
    id: "container2",
  },
  [
    React.createElement("h1", { className: "title" }, "Heading 1"),
    React.createElement("h2", { className: "title" }, "Heading 2"),
  ]
);

// defining root of react
const root = ReactDOM.createRoot(document.getElementById("root"));

// passing the react element inside the root
root.render([container, container2]);
