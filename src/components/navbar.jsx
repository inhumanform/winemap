// import { FaHouse, FaUser, FaEarthAmericas, FaMap  } from "/home/drewnix/Development/code/phase-5/phase5project/winemap/node_modules/react-icons/fa";
import React from 'react';
// import {ReactComponent as GrapeIcon } from "./public/grapes-with-leaf-and-stem-svgrepo-com.svg?react";
// import {ReactComponent as AboutIcon } from '/home/drewnix/Development/code/phase-5/phase5project/winemap/public/hand-waving.svg'
import '../index.css'

const Navbar = () => {
    return (
        <div className= "fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
        
            {/* <NavbarIcon icon={<FaHouse size="28" />} /> */}
			<Divider />
            {/* <NavbarIcon icon={<FaMap size="28" />} /> */}
            {/* <NavbarIcon icon={<FaEarthAmericas size="28" />} /> */}
            {/* <GrapeIcon /> */}
			{/* <AboutIcon size='1' /> */}
			<Divider />
            {/* <NavbarIcon icon={<FaUser size="28" />} /> */}

        </div>
    );
};

const NavbarIcon = ({ icon, text = 'placeholder' }) => (
<div className="navbar-icon group">
{icon}
<span class="sidebar-tooltip group-hover:scale-100">
	{text}
</span>
</div>
);


const Divider = () => <hr className="navber-hr" />;

export default Navbar;