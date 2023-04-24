import React from "react";

const Todolist = (props) => {
    return (
        <div>
            <button onClick={() => { props.onSelect(props.id) }}>x</button>
            <li>{props.text}</li>
        </div>
    )
}

export default Todolist;