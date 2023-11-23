import React from "react";
import Header from "./Header";
import Heart from "./Heart";
import "../assets/Result.css";

const Result = () => {
    return (
        <>
            <div className="resultContainer">
                <Header />
                <Heart />
            </div>
        </>
    );
}

export default Result;