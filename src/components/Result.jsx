import React from "react";
import Header from "./Header";
import Heart from "./Heart";
import "../assets/Result.css";

const Result = () => {
    return (
        <>
            <Header />
            <div className="container">
                <Heart />
            </div>
        </>
    );
}

export default Result;