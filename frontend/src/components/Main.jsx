import React from "react";
import Header from "./Header";
import Searchid1 from "./Searchid1";
import Searchid2 from "./Searchid2";
import '../assets/Main.css';
import { useNavigate } from "react-router-dom";

const Main  = () => {
    const navigate = useNavigate();

    const goToResult = async() => {
            // 여기서 Heart 컴포넌트로 이동
            navigate("/test.result");
    }

    return (
        <div className="home">
            <Header />
            <div className="container">
                <div className="profile">
                    <div className="search1">
                        <Searchid1 />
                    </div>
                    <div className="search2">
                        <Searchid2 />
                    </div>
                </div>
                <button className="mainBtn" onClick={goToResult}>GO RESULT</button>
            </div>
        </div>
    );
}

export default Main;