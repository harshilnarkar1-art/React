import React, { useReducer, useState } from 'react'

let intialState = {
    count: 0,
    msg: "neutral"
}

function dispatch(state, action) {

    switch (action.command) {
        case "increament":
            return {
                count: state.count + 1,
                msg: "increasing"
            }
        case "decreament":
            return {
                count: state.count - 1,
                msg: "decreasing"
            }

        default:
            return state
    }
}

function NewCounter() {
    // const [count, setcount] = useState(0);
    // const [msg, setMSG] = useState("neutral");
    const [state, setState] = useReducer(dispatch, intialState);
    return (
        <div>
            <div className="counter-parent">
                <div className="counter-child">
                    <p>{state.msg}</p>
                </div>
                <div className="counter-child">
                    <p>{state.count}</p>
                </div>

                <div className="counter-child">
                    <button onClick={() => {
                        setState({ command: "increament" })
                    }}>Increament</button>


                    <button onClick={() => {
                        setState({ command: "decreament" })
                    }}>
                        Decreament</button>
                </div>
            </div>
        </div>
    )
}

export default NewCounter;