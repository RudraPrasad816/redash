import { Outlet } from "react-router-dom"
import logo from '../assets/images/ReDashLogo.png'
import logowithtext from '../assets/images/ReDashLogoWithText.png'

import './css/AuthLayout.css'

export const AuthLayout = () => {
    return (
        <div className="auth-wrapper">
            <div className="auth-card">
                <div className="image">
                    <img src={logo} alt="logo" className="logo" />
                    <img src={logowithtext} alt="logo" className="logowithtext" />
                    <h2>ReDash</h2>
                    <p>Manage your Employees here</p>
                </div>
                <div className="auth-form">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}