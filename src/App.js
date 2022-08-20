import React,{useRef, useEffect} from 'react';
import { Navbar } from "./components/navbar/navbar";
import "./App.css"
import { Sidebar } from "./components/sidebar/sidebar";
import {Main} from "./components/main/main";
function App() {
  const sideRef = useRef();
  const inputHiddenRef = useRef();

  const OpenSidebar =()=>{
    inputHiddenRef.current.focus();
    sideRef.current.classList.remove('close');
    sideRef.current.classList.add('open');
  }
  const CloseSidebar =()=>{
    sideRef.current.classList.remove('open');
    sideRef.current.classList.add('close');
  }
  useEffect(() => {
    setInterval(()=>{
        if (document.activeElement !== inputHiddenRef.current) {
            CloseSidebar();
        }

    },8000)})
  return (
    <div className="App">
      <Navbar openSidebar={()=>OpenSidebar()}/>
      <Sidebar side={sideRef} closeSideBar={()=>CloseSidebar()} inputHidden={inputHiddenRef}/>
      <Main/>
      
    </div>
  )
}


export default App;
