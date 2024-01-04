import React from "react";

export default function Result(props)
{   
    return(
        <>
        <h4 ref={props.resultRef} className="my-5 display-1">{props.result} </h4>
        </>
    );
}