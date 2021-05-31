import React from 'react'

// without using jsx
// const Prog = (props) => {
//     return React.createElement("div", {}, [
//         React.createElement("h2", {}, props.name),
//         React.createElement("h3", {}, props.desc),
//         React.createElement("h3", {}, props.made),
//     ]);
// };

const Pet = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <h3>{props.desc}</h3>
            <h3>{props.made}</h3>
        </div>
    )
}

export default Pet;