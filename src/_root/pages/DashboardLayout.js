import { Outlet, useNavigate, useParams } from "react-router-dom"
import { DashboardHeader } from "../../components"

import '../../assets/css/dashboardLayout.css'
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