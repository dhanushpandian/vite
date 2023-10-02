import { Fragment } from "react";
import { useState } from "react";
function Message() {
    const [a, setA] = useState<number>(0);

    function buttonclk2(){
        setA(a-1);
    }

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
            <p >{name}{a%2==0 ?<p>+</p>:null}{a}</p>
            <button onClick={buttonclk}>+1</button>
            <button onClick={buttonclk2}>-1</button>
        </Fragment >);
}

export default Message;