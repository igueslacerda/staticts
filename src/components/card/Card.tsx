import React, { type ReactNode } from "react";
import "./card.css";

type CardProps = { 
    title: string; 
    subtitle: string; 
    children: ReactNode 
};

const Card: React.FC<CardProps> = ({ title, subtitle, children }) => {
    return (
        <div className="card">
            {(title || subtitle) && <div className="card-header">
                {title && <h3 className="card-title">{title}</h3>}
                {subtitle && <h5 className="card-subtitle">{subtitle}</h5>} 
            </div>}
            <div className="card-content">
                {children}
            </div>
        </div>
    );
}

export default Card;