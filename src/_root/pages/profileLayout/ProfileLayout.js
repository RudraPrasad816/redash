import { Outlet, useNavigate } from "react-router-dom"
import { ProfileHeader } from "./ProfileHeader"
import { useEffect } from "react"

export const ProfileLayout = () => {

    const navigate = useNavigate();

    useEffect(()=>{
        navigate('/employee/profile')
    },[])
    return (
        <div className="profile-layout-wrapper">
            <ProfileHeader />
            <Outlet />
        </div>
    )
}