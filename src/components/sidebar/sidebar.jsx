import React from 'react';
import './sidebar.css';
import Wnavbar from './wnavbar.png';
import Youtube from './youtube.png'
import Home from './home.png';
export function Sidebar(props){
    return(
        <div className="sidebar" ref={props.side}>
            <div className="header-sidebar">
                <div>
                    <form className="formside">
                        <input type="text" ref={props.inputHidden}></input>
                    </form>
                    <img src={Wnavbar} alt="wnavbar" className="wnavbar" title="sidebar" onClick={props.closeSideBar}></img>
                    <div className="logo-youtube-side" title="Home">
                        <img src={Youtube} alt="youtube" className="youtube"></img>
                        <p>Youtube</p>
                    </div>
                </div>
            </div>
            <div className="body-sidebar">
                <div className="bss">
                    <div className="home item">
                        <div>
                            <img src={Home} alt="home" className="imgHome"></img>
                            <p>Inicio</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}