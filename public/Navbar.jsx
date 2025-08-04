import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    const activeStyle = ({isActive}) => {
        return {
            color: isActive ? 'blue' : 'black',
            fontSize: isActive ? '20px': '18px',
        }
    }
    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',borderBottom:'1.5px solid gray', padding: '10px 30px', backgroundColor: '#d1cdcdff', borderRadius: '10px' }}>
            <h2 style={{ fontSize: '27px' }}>Shoe store</h2>
            <div style={{ display: 'flex', gap: '20px', fontSize: '18px', fontWeight: 'bold' }}>
            
            <NavLink style={activeStyle} to="/">Home</NavLink>
            <NavLink style={activeStyle} to="/about">About Us</NavLink>   
            <NavLink style={activeStyle} to="/contact">Contact</NavLink>
            </div>
        </header>
    )
}

export default Navbar