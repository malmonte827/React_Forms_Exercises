import React from "react";

function Box({ id, backgroundColor = "green", height = 5, width = 5, handleRemove }) {
    const remove = () => handleRemove(id)
    return (
        <div>
        <div
            className="box"
            style={{
                backgroundColor,
                height: `${height}rem`,
                width: `${width}rem`,
            }}
        />
        <button onClick={remove}>Remove</button>
        </div>
    );
}

export default Box;
