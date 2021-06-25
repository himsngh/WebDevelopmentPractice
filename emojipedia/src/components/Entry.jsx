import React, { useDebugValue } from "react";
import emojipedia from "../emojipedia";
import Element from "./Element";

function Entry() {
    return (
        <dl className="dictionary">

            {
                emojipedia.map(value => (
                    <Element
                        key={value.id}
                        emoji={value.emoji}
                        name={value.name}
                        meaning={value.meaning}
                    />
                ))
            }
        </dl>
    )
}

export default Entry;