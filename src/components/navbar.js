import React from 'react'

const Navbar = ({getpersonData}) => {
    return(
    <nav className="navbar">
        <div className="logo"><p>UsrDat<d style={{color:"cyan", fontSize: "40px"}}> &#8491;</d></p></div>
        <button type="button" style={{background:"transparent"}} onClick={() =>getpersonData(1)}>View Users</button>
    </nav>
    )
}

export default Navbar;