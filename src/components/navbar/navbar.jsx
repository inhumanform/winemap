import { FaHouseUser, FaUser, FaGlobeAmericas, FaMap } from "/home/drewnix/Development/code/phase-5/phase5project/winemap/node_modules/react-icons/fa";
import React, { useState, useEffect, useContext } from 'react';
import SvgGrapes from "../../Icons/Grapes.jsx";
import SvgHand from '../../Icons/Hand.jsx';
import './navbarstyle.css';
import { Link } from "react-router-dom";



const Navbar = () => {
    return (
        <div className=" nav-bar-main fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg z-10">
            <Link to="/">
                <NavbarIcon className='icon-link' text= "Home" icon={<FaHouseUser size="28" />} />
            </Link>
            <Divider />
            <Link to='/map'>
                <NavbarIcon className='icon-link' text= "AVA Map" icon={<FaMap size="28" />} />
            </Link>
            <Link to='/grapes'>
                <NavbarIcon className='icon-link' text= "Grape Varietal Info" icon={<SvgGrapes size="28" />} />
            </Link>
            <Link to='/regions'>
                <NavbarIcon className='icon-link' text= "Wine Regions" icon={<FaGlobeAmericas size="28" />} />
            </Link>
            <Link to='/about'>
                <NavbarIcon className='icon-link' text= "About" icon={<SvgHand size="28" />} />
            </Link>
            <Divider />
            <Link to='/login'>
                <NavbarIcon className='icon-link' text= "Login" icon={<FaUser size="28" />} />
            </Link>
        </div>
    );
};

const NavbarIcon = ({ icon, text = 'placeholder' }) => (
    <li className="navbar-icon group">
        {icon}
        <span className="navbar-tooltip group-hover:scale-100">
            {text}
        </span>
    </li>
);


const Divider = () => <hr className="navbar-hr" />;

export default Navbar;