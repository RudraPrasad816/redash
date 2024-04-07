import { Profile } from "./Profile"
import {CreateUser} from './CreateUser'

import { NavLink } from "react-router-dom"

export const ProfileHeader = () =>{
    return(
        <nav className="dashboard-header">
            <NavLink to={"/employee/profile"} className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : ""}>
                <li>Profile</li>
            </NavLink>
            <NavLink to={"/employee/create-user"} className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : ""}>
                <li>Create User</li>
            </NavLink>
        </nav>
    )
}