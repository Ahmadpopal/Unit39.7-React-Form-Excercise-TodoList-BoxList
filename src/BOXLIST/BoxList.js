import React, { useState } from "react";
import Box from './Box'
import {v4 as uuid } from "uuid";
import NewBoxFrom from "./NewBoxForm";



const BoxList = () =>{
    const INITIAL_STATE = [
        // {color: "blue", width: "100", height: "100"},
        // {color: "green", width: "100", height: "100"},
        // {color: "red", width: "100", height: "100"}
    ];
    const [boxes, setBox] = useState(INITIAL_STATE);

    function addBox(boxOBJ){
        setBox(boxes => ( [...boxes, {id: uuid(), ...boxOBJ}]))
    }

    const remove = id => {
        setBox(boxes => boxes.filter(box => box.id !== id));
      };
    return (
        <div>
            <h1>BoxList</h1>
            < NewBoxFrom addBox={addBox}/>
            {boxes.map((boxes) => (
                <Box 
                color={boxes.color} 
                width={boxes.width} 
                height={boxes.height} 
                key={boxes.id} 
                id={boxes.id}
                handleRemove={remove}/>
            ))}
        </div>
    )
}


export default BoxList 