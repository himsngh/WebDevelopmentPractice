import React, { StrictMode, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {

    const theme = useState("tomato");

    return (
        <ThemeContext.Provider value={theme} >
            <div>
                <Router>
                    <header>
                        <Link to="/">
                            <h1>Adopt Me</h1>
                        </Link>
                    </header>
                    <Switch>
                        <Route path="/details/:id">
                            <Details />
                        </Route>
                        <Route path="/">
                            <SearchParams />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </ThemeContext.Provider >
    );
};

ReactDOM.render(<StrictMode><App /></StrictMode>, document.getElementById("root"))


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
