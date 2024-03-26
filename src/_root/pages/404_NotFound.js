import { useLocation } from "react-router-dom"

import '../../assets/css/notfound.css'

export const NotFound = () => {

    const path = useLocation()

    return (
        <div className="error-page">
        <h1>404</h1>
        <h3>Page Not Found</h3>
        <p>There are no such page named {path.pathname.split("/").pop()}.</p>
        </div>
    )
}