import { Outlet, useNavigate } from "react-router-dom"

import { DashboardHeader } from "../../components"

import './css/dashboardLayout.css';
import { useEffect } from "react"

export const DashboardLayout = () => {

    const navigate = useNavigate();

    useEffect(() => {
        navigate(`/dashboard/attendance`)
    }, [])

    return (
        <div className="dash-layout">
            <DashboardHeader />
            <Outlet />
        </div>
    )
}