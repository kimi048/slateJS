// import { useState } from 'react'
import logo from './logo.svg'
import React from "react"
import './App.css'
import { htmlToSlateAST } from '@graphcms/html-to-slate-ast';

import RichText from "./Editor";

function App() {

  // const [count, setCount] = useState(0);
  // const htmlString = '<div><div><p>test</p>a</div><p>test</p></div>'; // or import from a file or database
  // const ast = await htmlToSlateAST(htmlString);
  // if(ast){
  // console.log(ast);}
  return (
    <div className="App">
      hoghoge
      <RichText/>
    </div>
  )
}

export default App
