import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom'

import '../../assets/css/sidebar.css'

import logo from '../../assets/images/ReDashLogo.png'
import logowithtext from '../../assets/images/ReDashLogoWithText.png'

import { AiFillHome } from "react-icons/ai";
import { FaUserAlt, FaRupeeSign } from "react-icons/fa";
import { MdGroups } from "react-icons/md";


export const Sidebar = ({ collapse }) => {

    const [iconSize, setIconSize] = useState(24);

    useEffect(() => {
        if (collapse) {
            setIconSize(40);
        } else {
            setIconSize(24);
        }
    }, [collapse])

    return (
        <div className='sidebar'>
            <div className="logo-container">
                {
                    collapse ?
                        <Link to="/"><img className='logo' src={logo} alt="logo" /></Link> :
                        <Link to="/"><img className='logo' src={logowithtext} alt="logo" /></Link>
                }
            </div>
            <ul>
                <NavLink to={'/'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} >
                    <AiFillHome size={iconSize} />
                    {
                        collapse ?
                            null :
                            <li>Home</li>
                    }
                </NavLink>
                <NavLink to={`/dashboard`} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                    <FaUserAlt size={iconSize} />
                    {
                        collapse ?
                            null :
                            <li>Me</li>
                    }
                </NavLink>
                <NavLink to={`/team-detils`} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                    <MdGroups size={iconSize} />
                    {
                        collapse ?
                            null :
                            <li>My Team</li>
                    }
                </NavLink>
                <NavLink to={`/finance`} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                    <FaRupeeSign size={iconSize} />
                    {
                        collapse ?
                            null :
                            <li>My Finance</li>
                    }
                </NavLink>
            </ul>
        </div>
    )
}