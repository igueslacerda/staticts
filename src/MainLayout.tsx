import { Outlet } from "react-router-dom"
import Sidebar from "./components/sidebar/Sidebar"

function MainLayout() {
    return (
        <>
            <Sidebar />
            <div id="main-container">
                <Outlet />
            </div>
        </>
    )
}

export default MainLayout