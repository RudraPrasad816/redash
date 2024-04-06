import { NavLink } from "react-router-dom"
import '../css/dashHeader.css'

export const DashboardHeader = () => {

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