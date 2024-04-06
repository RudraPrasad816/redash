import { useState } from "react";
import { Outlet } from "react-router-dom";

import { Header, Sidebar } from "./components";

import './pages/css/rootlayout.css'

export const RootLayout = () => {

    const [sidebarCollapse, setSidebarCollapse] = useState(false);

    function handleSidebarCollapse() {
        setSidebarCollapse(!sidebarCollapse)
    }

    return (
        <main style={{ gridTemplateColumns: sidebarCollapse ? "90px 1fr 1fr 1fr" : "260px 1fr 1fr 1fr" }}>
            <Header collapse={sidebarCollapse} handleSidebarCollapse={handleSidebarCollapse} />
            <Sidebar collapse={sidebarCollapse} />
            <Outlet />
        </main>
    );
};
