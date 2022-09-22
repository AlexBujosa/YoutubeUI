import React,{useRef, useEffect} from 'react';
import { Navbar } from "./components/navbar/navbar";
import "./app.css"
import { Sidebar } from "./components/sidebar/sidebar";
import { Option } from "./components/option/option";
import {UserAuth} from "./context/AuthContext";
function App({onComponentRender}) {
  const sideRef = useRef();
  const inputHiddenRef = useRef();
  const { user, logOut } = UserAuth();

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
      {user === null ? null : (
        <Option img={user.img} name={user.name} logOut={logOut} />
      )}
      <Navbar openSidebar={()=>OpenSidebar()}/>
      <Sidebar side={sideRef} closeSideBar={()=>CloseSidebar()} inputHidden={inputHiddenRef}/>
      {onComponentRender}
      
    </div>
  )
}


export default App;
