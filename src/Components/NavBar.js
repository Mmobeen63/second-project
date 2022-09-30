import React from "react";
import logo from '../Assets/marker.png'
export const NavBar=()=>{
    const styles={
        width:'100%',
        'background-color': 'red',
        padding:'10px',
        color:'white',
        'text-align': 'center'
    }
return(
    <div className="headerItems">
    <header style={styles}>
        <img src={logo} />
        <span>&nbsp;&nbsp;my travel journal</span>
    </header>
    </div>
)
}