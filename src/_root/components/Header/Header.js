import '../css/header.css'
import { auth, database } from '../../../Firebase/firebse'
import { ref, get, child } from 'firebase/database'

import { GoSidebarExpand } from "react-icons/go"
import { GoSidebarCollapse } from "react-icons/go"
import { CiSearch } from "react-icons/ci";
import { MdLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";


import { Link, useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'


export const Header = ({ collapse, handleSidebarCollapse }) => {

    const [expand, setExpand] = useState(false);
    const [isLightTheme, setIsLightTheme] = useState(true)
    const [userRole, setUserRole] = useState("user");
    const [currentUser, setCurrentUser] = useState({ name: "", email: "", uid: "" })

    const navigate = useNavigate()
    const { theme, setNewTheme } = useContext(ThemeContext);

    useEffect(() => {
        setIsLightTheme(theme === "light" ? true : false)
        const user = JSON.parse(localStorage.getItem("currentUser"))
        if (user) {
            const dbref = ref(database)
            get(child(dbref, `users/${user.uid}`)).then((snapshot) => {
                if (snapshot) {
                    setUserRole(snapshot.val().role)
                }
            }).catch((error) => {
                console.log(error)
            })
            setCurrentUser({ name: user.displayName, email: user.email, uid: user.uid })
        }
    }, [])


    function toggleTheme() {
        if (isLightTheme) {
            setNewTheme(false)
            setIsLightTheme(false)
        } else {
            setNewTheme(true)
            setIsLightTheme(true)
        }
    }

    function handleSignOut() {
        auth.signOut()
        localStorage.setItem("currentUser", JSON.stringify(null))
        navigate("/")
    }

    function handleDropdownCollapse() {
        setExpand(!expand)
    }
    function handleDropdownExpand() {
        setExpand(!expand)
    }

    return (<header>
        <div className="header-left">
            <div className="icon-wrapper" onClick={handleSidebarCollapse}>
                {
                    collapse ?
                        <GoSidebarCollapse className='icon' size={28} /> :
                        <GoSidebarExpand className='icon' size={28} />
                }
            </div>
            <div className="search-wrapper">
                <CiSearch size={20} />
                <input type="text" placeholder='Search Emplyees' />
            </div>
        </div>
        <div className="header-right">
            <div className="theme-toggler" onClick={toggleTheme}>
                {
                    theme === "light" ?
                        <MdLightMode size={28} />
                        :
                        <MdOutlineDarkMode size={28} />
                }
            </div>
            <div className="avatar" onClick={handleDropdownCollapse} >
                <FaRegUser size={28} />
            </div>
            <div className={`avatar-dropdown ${expand ? "expand" : "collapse"}`} >
                <h3>
                    {
                        currentUser ?
                            currentUser.name : ""
                    }
                </h3>
                <hr></hr>
                <Link to="/Profile" onClick={handleDropdownExpand}>
                    <p>View Profile</p>
                </Link>
                {
                    userRole === "admin" || userRole === "superadmin"
                        ?
                        <Link to="/create-user" onClick={handleDropdownExpand}>
                            <p>Create New User</p>
                        </Link>
                        :
                        null
                }
                <button onClick={handleSignOut}>
                    Logout
                </button>
            </div>
        </div>
    </header>)
}