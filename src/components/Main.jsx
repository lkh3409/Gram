import React from "react";
import Header from "./Header";
import Searchid from "./Searchid";
import '../assets/Main.css';
import { useNavigate } from "react-router-dom";

const Main  = () => {
    const navigate = useNavigate();

    const goToResult = () => {
        navigate("/test.result");
    }

    return (
        <div className="home">
            <Header />
            <div className="container">
                <div className="profile">
                    <div className="search1">
                        <Searchid />
                    </div>
                    <div className="search2">
                        <Searchid />
                    </div>
                </div>
                <button className="mainBtn" onClick={goToResult}>결과 확인하기</button>
            </div>
        </div>
    )
}

export default Main;