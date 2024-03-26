import { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { AuthLayout } from "./_auth/AuthLayout";
import { Signin, Signup } from "./_auth/pages";
import { RootLayout } from "./_root/RootLayout";
import { Home, DashboardLayout, NotFound } from "./_root/pages";
import { Attendance, Leave, Performance, Apps } from "./_root/pages/DashboardPages";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from './Firebase/firebse'

import { ThemeContext } from "./context/ThemeContext";

import { PageLoader } from "./_root/pages/PageLoader";

export default function App() {

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        setIsLoading(true);
        onAuthStateChanged(auth, (user) => {
            setUser(user)
            setIsLoading(false)
        })
    }, []);

    return (
        <>
            {isLoading ? (
                <PageLoader theme={theme} />
            ) : (
                <Routes>
                    {!user ? (
                        <Route element={<AuthLayout />}>
                            <Route path="/" element={<Signin />} />
                            {/* <Route path="/sign-up" element={<Signup />} /> */}
                        </Route>
                    ) : (
                        <Route element={<RootLayout />}>
                            <Route index element={<Home />} />
                            <Route path="/dashboard" element={<DashboardLayout />}>
                                <Route
                                    path={"/dashboard/attendance"}
                                    element={<Attendance />}
                                />
                                <Route path={"/dashboard/leave"} element={<Leave />} />
                                <Route
                                    path={"/dashboard/performance"}
                                    element={<Performance />}
                                />
                                <Route path={"/dashboard/apps"} element={<Apps />} />
                            </Route>
                        </Route>
                    )}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            )}
        </>
    );
}
