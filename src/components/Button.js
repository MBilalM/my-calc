import React from "react";



export default function Button(props)
{
    const style_btn={
        width: "10vw"
    }
    return(
        <button style={style_btn} className="shadow-none btn btn-dark btn-block my-1 border border-dark rounded m-1" onClick={props.callFunc}>{props.text}</button>
    );
}