import React, {useState}from "react"
import Box from "./Box.jsx"
import NewBoxForm from "./NewBoxForm.jsx";

function BoxList(){
    const [boxes, setBoxes] = useState([])
    const add = boxObj =>{
        setBoxes(boxes =>[...boxes, boxObj])
    };
    const remove = id =>{
        setBoxes(boxes => boxes.filter(box => box.id !== id))
    };

    const boxComponents = boxes.map(box =>(
        <Box 
        key={box.id}
        id={box.id}
        backgroundColor={box.backgroundColor}
        height={box.height}
        width={box.width}
        handleRemove={remove}
        />
    ));

    return(
        <div>
            <NewBoxForm addBox={add} />
            {boxComponents}
        </div>
    )
    
}

export default BoxList