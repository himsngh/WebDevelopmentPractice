import React from 'react'

const Prog = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h2", {}, props.name),
        React.createElement("h3", {}, props.desc),
        React.createElement("h3", {}, props.made),
    ]);
};

export default Prog;