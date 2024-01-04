import React from 'react';
import { useState } from 'react';




export default function Input(props)
{
    let [inputText, setInputText]=useState("");
    let handleChange=(e)=>{
        e.preventDefault();
        setInputText(e.target.value);
    }

    return(
        <input className="form-control" size='lg' value ={inputText} onChange={props.newValue} type="number" />
    );
}