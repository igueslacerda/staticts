import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(true);

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <aside className={`sidebar ${isExpanded && 'expanded'}`}>
            <button onClick={toggleSidebar} className="toggle-btn">
                {isExpanded ? '◀' : '▶'}
            </button>
            <nav className="menu">
                <Link to="/" className="menu-item">
                    <span className="menu-icon">🏠</span>
                    {isExpanded && <span className="menu-text">Home</span>}
                </Link>
                <Link to="/gallery" className="menu-item">
                    <span className="menu-icon">🖼️</span>
                    {isExpanded && <span className="menu-text">Galeria</span>}
                </Link>
            </nav>
        </aside>
    );            
}

export default Sidebar;