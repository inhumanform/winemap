import { FaHouseUser, FaUser, FaGlobeAmericas, FaMap  } from "/home/drewnix/Development/code/phase-5/phase5project/winemap/node_modules/react-icons/fa";
import React from 'react';
import SvgGrapes from "../../Icons/Grapes.jsx";
import SvgHand from '../../Icons/Hand.jsx';
import '/home/drewnix/Development/code/phase-5/phase5project/winemap/src/components/navbar/navbarstyle.css';
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className= "fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
        
            <NavbarIcon icon={<FaHouseUser size="28" />} />
			<Divider />
            <NavbarIcon icon={<FaMap size="28" />} />
            <NavbarIcon icon={<FaGlobeAmericas size="28" />} />
            <NavbarIcon icon={<SvgGrapes size='28' />} />
			<NavbarIcon icon={<SvgHand size='28' />} />
			<Divider />
            <NavbarIcon icon={<FaUser size="28" />} />

        </div>
    );
};

const NavbarIcon = ({ icon, text = 'placeholder' }) => (
<div className="navbar-icon group">
{icon}
<span class="navbar-tooltip group-hover:scale-100">
	{text}
</span>
</div>
);


const Divider = () => <hr className="navbar-hr" />;

export default Navbar;