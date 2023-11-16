import React, { useState } from "react";
import Header from "./Header";
import Searchid from "./Searchid";
import Profile from "./Profile";
import '../assets/Main.css';
import { useNavigate } from "react-router-dom";

const Main  = () => {
    const navigate = useNavigate();

    const [search1Click, setsearch1click] = useState(false);
    const [search2Click, setsearch2click] = useState(false);

    const handleSearchBtnClick = (searchId) => {
        if (searchId === 1) {
            setsearch1click(true);
        } else if (searchId === 2) {
            setsearch2click(true);
        }
    }

    const goToResult = () => {
        /*if (search1Click && search2Click) {
            navigate("/test.result");
        } else {
            alert("아이디를 모두 검색해주세요.");
        }*/
        navigate("/test.result");
    }

    return (
        <div className="home">
            <Header />
            <div className="container">
                <div className="profile">
                    <div className="search1">
                        <Profile />
                        <Searchid onSearchBtnClick={() => handleSearchBtnClick(1)}/>
                    </div>
                    <div className="search2">
                        <Profile />
                        <Searchid onSearchBtnClick={() => handleSearchBtnClick(2)}/>
                    </div>
                </div>
                <button className="mainBtn" onClick={goToResult}>결과 확인하기</button>
            </div>
        </div>
    );
}

export default Main;