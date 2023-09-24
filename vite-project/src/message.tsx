import { Fragment } from "react";
import { useState } from "react";
function Message() {
    const [a, setA] = useState<number>(0);

    function buttonclk() {
        setA(a + 1);
    }

    let name = "";

    if (a % 2 == 0) {
        name = "dash";
    }
    else {
        name = "sara"
    }

    return (
        <Fragment>
            <h1>{name}+{a}</h1>
            <button onClick={buttonclk}>+1</button>
        </Fragment >);
}

export default Message;