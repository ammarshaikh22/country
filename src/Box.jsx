import React from "react";
import { Link } from "react-router-dom";
export const Box = ({ name, src, capital, }) => {
    return (
        <div className="box">
            <div className="img">
                <Link to={`/country/${name}`} >
                    <img src={src} alt="flag" />
                </Link>
            </div>
            <div className="text">
                <h1>{name}</h1>
                <h4>{capital}</h4>
            </div>
        </div>
    );
};
