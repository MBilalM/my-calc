
import './App.css';
import Input from "./components/Input"
import Result from './components/Result';
import Button from './components/Button';
import Numpad from './components/Numpad';

import { useState, useRef } from 'react';

function App() {
  //let input = useRef(null)
  
  let resultRef = useRef(null);
  let input1Ref = useRef(null);

  let [result,setRes]=useState(0);
  let [input1,setInput1]=useState(0);
  let [input2,setInput2]=useState(0);
  let [operationName, setOperationName]=useState("+");
  let [equation, setEquation]=useState(0);

  /*
  function assignment1(e){
    e.preventDefault();
    if(typeof e.target.value!=undefined)
    {
      setInput1(e.target.value);
      calculate(e);
    }
  }

  function assignment2(e){
    e.preventDefault();
    if(typeof e.target.value!=undefined){
      setInput2(e.target.value);
      calculate(e);
    }
  }

  */
  function resetEverything()
  {
    //For resetting values
    setInput1(0);
    setInput2(0);
    setEquation(0);
    setRes(0);
  }
  
  function checkEmptyAndSet()
  {
    //for assigning values to the hooks
    if(input2==0&&result==0)
    {
      setInput2(equation);
    }
    else if(result!=0)
    {
      setInput2(result);
      setInput1(equation);
    }
    else
    {
      setInput1(equation);
      console.log("aaaaaa");
    }
    setEquation(0);
  }
  function calculateResult()
  {
    //For performing calculations
    switch(operationName)
    {
      case "*":
        if(input1!=0)
        {
          setRes(Number(equation)*Number(input2));
        }
        break;

      case "-":
        setRes(Number(equation)-Number(input2));
        break;
      case "/":
        if(equation!=0)
        {
          setRes(Number(input2)/Number(equation));
        }
        break;
      default:
      console.log("input 2",input2);

        setRes(Number(equation)+Number(input2));
        break;    
    }
    console.log("result",result);

  }
  /*
  function selectOption(e)
  {
    e.preventDefault();
    setOperationName(e.target.value);
    
  }
  */
  
  const buttonsNumber=()=>
  {
    //For displaying a num pad
    const button = [];
    for(let i = 9; i > -1; i--)
        {
          button.push(<Button text={i} callFunc={()=>receivedNum(i)} styleBtn={styleNum} />);
        }
    return button;
  }
  const buttonsOperation=()=>
  {
    //For displaying operation buttons
    const calc=["+","-","*","/"];

    const button = [];
    for(let i = 0; i < 4; i++)
        {
          button.push(<Button text={calc[i]} callFunc={()=>{setOperationName(calc[i]);checkEmptyAndSet()}} styleBtn={styleCalc}/>);
        }
    return button;
  }

  const receivedNum =(data)=>{
    //For capturing user input
    setEquation((prevEquation) => prevEquation*10 + data);
    //setRes((prevRes) => prevRes*10 + data);
  
  }
  const styleNum={
    flex: "0 0 33.33%"
  }
  const styleCalc={
    flex:"0 0 50%"
  }
  const styleCont={
    flexWrap: "wrap"
  }
  /*
  function olderCommentedCode()
  {
    return(
      <>
      <form>
        <input ref={input} pattern='0-9' type='number' className='form-control' />
        <input className='form-control my-lg-5 w-100 p3 border border-dark' onChange={(e)=>{assignment1(e)}} value={input1} type="number"/>
        <input className='form-control my-lg-5 w-100 p3 border border-dark' onChange={(e)=>{assignment2(e)}} value={input2}type="number"/>
        <select onChange={(e)=>{selectOption(e)}}>
          <option value="+" selected>+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
      </form>
      <Numpad num={equation} onDataReceived={receivedNum}/>
      </>
    )
  }
  */
 
  return (
    <div className='flex-container d-flex flex-column align-items-center'>
      {
      /*
      olderCommentedCode();
      */
      }
      <Result result={equation} resultRef={input1Ref} />
      <div className='d-flex justify-content-center'>
        <div className='d-flex flex-row justify-content-center col-5' style={styleCont}>
          {buttonsNumber()}
        </div>
        <div className='d-flex justify-content-center col-3' style={styleCont}>
          {buttonsOperation()}
        </div>
      </div>
      <div className='d-flex flex-row justify-content-center col-5 mt-5' style={styleCont}>
        <Button text="=" callFunc={calculateResult} />
        <Button text="C" callFunc={resetEverything} />
      </div>
      
      
      <Result result={result} resultRef={resultRef} />
      
    </div>
  );
}

export default App;
