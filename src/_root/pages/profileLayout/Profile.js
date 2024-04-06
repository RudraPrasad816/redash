import { FaUser } from "react-icons/fa";

import { PageLoader } from "../PageLoader";
import './css/profile.css';

import { useEffect, useState } from "react";

export const Profile = () => {

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true);
        getCurrentUser();
        setIsLoading(false);
    }, [])

    async function getCurrentUser() {
        try {
            const user = JSON.parse(localStorage.getItem("currentUser"));
            if (user) {
                setUser(user);
            }
        }
        catch (error) {
            setUser(null);
            console.log(error);
        }
    }

    return (
        < div className="profile-wrapper" >
            {
                isLoading ?
                    <PageLoader />
                    :

                    <>
                        <div className="profile-picture">
                            <div className="image">
                                <FaUser size={120} />
                            </div>
                            <div className="user-identity">

                            </div>
                            <div className="user-details">
                                <span>{user && user.displayName}</span>
                                <span>{user && user.email}</span>
                            </div>
                        </div>
                        <div className="profile-details">
                            <div className="profile-header">
                                <h2>{user && user.displayName}</h2>
                                <p>Front-end Developer</p>
                            </div>
                        </div>
                    </>
            }
        </div >
    )
}