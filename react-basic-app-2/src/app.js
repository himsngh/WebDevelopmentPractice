import React from 'react';
import ReactDOM from 'react-dom';
import SearchParams from "./SearchParams";

const App = () => {
    return (
        <div>
            <h1>Adopt Me</h1>
            <SearchParams />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"))


// Without JSX

// const App = () => {
//     return React.createElement(
//         "div",
//         {},
//         React.createElement("h1", {}, "Hello React"),
//         //[1, 2, 3, 4].map((i) => React.createElement("h2", {}, i)), // just for practice
//         React.createElement(Prog, {
//             name: "React",
//             desc: "A javascript library",
//             made: "made by facebook",
//         }),
//         React.createElement(Prog, {
//             name: "Golang",
//             desc: "Programming Language",
//             made: "made by google",
//         }),
//         React.createElement(Prog, {
//             name: "Javascript",
//             desc: "Dynamic Programing lanugage of the web",
//             made: "i don't know",
//         }) // You can see here we are not using the array notation still react is able to handle this.
//     );
// };


// ReactDOM.render(
//     React.createElement(App),
//     document.getElementById("react-first")
// );
