const heading = React.createElement("div", {id:"Parent"}, [
    React.createElement("div", { id: "child1"},
        [React.createElement("h1", {}, "I am H1"),
        React.createElement("h2", {}, "I am H2")
    ]),
    React.createElement("div", { id: "child2" },
        [React.createElement("h1", {}, "I am H1"),
        React.createElement("h2", {}, "I am H2")
    ])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));//creates Root element where all the code presents

root.render(heading);