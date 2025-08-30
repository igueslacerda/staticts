import { Link, Outlet } from "react-router-dom"

function MainLayout() {
    return (
        <>        
            <nav>
                <Link to="/">Home</Link> | <Link to="/gallery">Galeria</Link>
            </nav>
            <div id="main-container">
                <Outlet />
            </div>
        </>
    )
}

export default MainLayout