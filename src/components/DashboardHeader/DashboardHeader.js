import { NavLink, useParams } from "react-router-dom"

import './dashHeader.css'
import { useEffect, useState } from "react"

export const DashboardHeader = () => {

    const [uid, setUid] = useState("");
    const urlDet = useParams()

    useEffect(()=>{
        setUid(urlDet.uid);
    }, [])

    return(
        <nav className="dashboard-header">
            <NavLink to={`/dashboard/attendance`} className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : ""}>
                <li>Attendance</li>
            </NavLink>
            <NavLink to={`/dashboard/leave`} className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : ""}>
                <li>
                    Leave
                </li>
            </NavLink>
            <NavLink to={`/dashboard/performance`} className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : ""}>
                <li>
                    Performance
                </li>
            </NavLink>
            <NavLink to={`/dashboard/apps`} className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : ""}>
                <li>
                    Apps
                </li>
            </NavLink>
        </nav>
    )
}