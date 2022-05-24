// import { useState } from 'react'
import logo from './logo.svg'
import React from "react"
import './App.css'
import { htmlToSlateAST } from '@graphcms/html-to-slate-ast';
import { initialValue } from './initialValue';
import RichText from "./Editor";
// import Plate from "./plate/PlateEditor"
function App() {

  // const [count, setCount] = useState(0);
  // const htmlString = '<div><div><p>test</p>a</div><p>test</p></div>'; // or import from a file or database
  // const ast = await htmlToSlateAST(htmlString);
  // if(ast){
  // console.log(ast);}
  const onChange = (value:any) =>{
    console.log(value);
  };
  return (
    <div className="App">
      {/* <Plate/> */}
      <RichText initialValue={initialValue}/>
    </div>
  )
}

export default App
