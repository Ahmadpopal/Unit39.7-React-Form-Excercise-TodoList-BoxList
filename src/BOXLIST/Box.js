import React from 'react'
import './Box.css'

const Box = ({color, width, height, id, handleRemove}) => {
    function remove(){
        handleRemove(id)
    }

    return (
        <div className="Box">
            <div 
                className="Box-div"
                style={{backgroundColor: color, width: `${width}px`, height: `${height}px`}}>
            </div>
            <button onClick={remove}>X</button>
        </div>
        ) 
        
}


export default Box