import React, { useState } from "react"
import Counter1 from "./counter1"
import "../index.css"
function Counter() {
    var [state, setstate] = useState(0)
    function decrease() {
        if (state <= 0) {
            return
        }
        setstate(state - 1)
    }
    function increase() {
        setstate(state + 1)
    }

    function reset()
    {
        setstate(state=0)
    }


    return (
        <div id="div1">
             <div id="div2">
                <h1>{state}</h1>
                <Counter1 multi={state}></Counter1>
             </div>
            <button onClick={decrease}>-</button>
            <button onClick={increase}>+</button>
            <button onClick={reset}>reset</button>
        </div>
       
    )
}

export default Counter