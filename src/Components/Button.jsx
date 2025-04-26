import React from "react";
const Button=(props)=>{
    return(
        <div >
        <button className="Button" onClick={props.onClick}>{props.value}</button>
        </div>
    )
}
export default Button