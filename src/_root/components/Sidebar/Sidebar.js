import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom'

import '../css/sidebar.css'

import logo from '../../../assets/images/ReDashLogo.png'
import logowithtext from '../../../assets/images/ReDashLogoWithText.png'

import { AiFillHome } from "react-icons/ai";
import { FaUserAlt, FaRupeeSign } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { ImProfile } from "react-icons/im";

import { auth, database } from '../../../Firebase/firebse';
import { onAuthStateChanged } from 'firebase/auth';
import { get, ref } from 'firebase/database';


export const Sidebar = ({ collapse }) => {

    const [iconSize, setIconSize] = useState(24);
    const [user, setUser] = useState(null);

    useEffect(() => {
        getUserDetails()
    }, [])

    useEffect(() => {
        if (collapse) {
            setIconSize(40);
        } else {
            setIconSize(24);
        }
    }, [collapse])

    async function getUserDetails() {
        try {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    try {
                        const userDetails = get(ref(database, 'users/' + user.uid))
                        setUser(userDetails);
                    }
                    catch(e){
                        console.error(e);
                    }
                }
            })
        }
        catch(e){
            console.error(e);
        }
    }

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
                {
                    user && 
                    <NavLink to={'/employee'} className={({isActive, isPending}) => isPending ? 'pending' : isActive ? 'active' : ''}>
                        <ImProfile size={iconSize} />
                        {
                            collapse ?
                            null :
                            <li>Profile</li>
                        }
                    </NavLink>
                }
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