import React,{useRef, useEffect} from 'react';
import { Navbar } from "./components/navbar/navbar";
import "./app.css"
import { Sidebar } from "./components/sidebar/sidebar";
import {Main} from "./components/main/main";
function App() {
  /*
  function handleCallbackResponse(response){
    console.log("Enconded JWt ID token "  + response.credential)
  }
  */
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
  useEffect(()=>{
  /* Global google */
  /*
  google.accounts.id.initialize({
    client_id: "1021044905228-7r6ph2hjj75lht5tfv4qkkpp9816etpt.apps.googleusercontent.com",
    callback: handleCallbackResponse
  });
  google.accounts.id.renderButton(
      document.getElementById("signIn-btn")
  )
  */
  
  },[])
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
