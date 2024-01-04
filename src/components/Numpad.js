import Button from "./Button";
import React from "react";
import { useRef } from "react";



export default function Numpad(props)
{
    
    const num=(n)=>
    {
        props.onDataReceived(props.num*10+n);
    }
    return(
        <div className='flex-container d-flex flex-row align-items-center'>
        <Button text="1" callFunc={()=>num(1)} />
        <Button text="2" callFunc={()=>num(2)} />
        <Button text="3" callFunc={()=>num(3)} />
        <Button text="4" callFunc={()=>num(4)} />
        <Button text="5" callFunc={()=>num(5)} />
        <Button text="6" callFunc={()=>num(6)} />
        <Button text="7" callFunc={()=>num(7)} />
        <Button text="8" callFunc={()=>num(8)} />
        <Button text="9" callFunc={()=>num(9)} />
        <Button text="0" callFunc={()=>num(0)} />
        </div>
    );
}