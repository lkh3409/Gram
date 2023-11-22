import React, { useState } from "react";
import Header from "./Header";
import Searchid1 from "./Searchid1";
import Searchid2 from "./Searchid2";
import Profile from "./Profile";
import '../assets/Main.css';
import { useNavigate } from "react-router-dom";

const Main  = () => {
    const navigate = useNavigate();

    // const [search1Click, setsearch1click] = useState(false);
    // const [search2Click, setsearch2click] = useState(false);

    // const handleSearchBtnClick = (searchId) => {
    //     if (searchId === 1) {
    //         setsearch1click(true);
    //     } else if (searchId === 2) {
    //         setsearch2click(true);
    //     }
    // }

    const goToResult = async() => {

        //     // 서버의 /sim 엔드포인트에 POST 요청
        // const response = await fetch("/sim", {
        //     method: "GET",
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        // });

        // const response_sim= await response.json()

        // 여기서 Heart 컴포넌트로 이동
        navigate("/test.result");
    }


    const [image1, setImage1] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
    const [image2, setImage2] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");

    const handleImageChange1 = (image) => {
        setImage1(image);
    }

    const handleImageChange2 = (image) => {
        setImage2(image);
    }


    return (
        <div className="home">
            <Header />
            <div className="container">
                <div className="profile">
                    <div className="search1">
                        {/* <Searchid onSearchBtnClick={() => handleSearchBtnClick(1)}/> */}
                        <Searchid1 onImageChange={handleImageChange1} />
                    </div>
                    <div className="search2">
                        {/* <Searchid onSearchBtnClick={() => handleSearchBtnClick(2)}/> */}
                        <Searchid2 onImageChange={handleImageChange2} />
                    </div>
                </div>
                <button className="mainBtn" onClick={goToResult}>결과 확인하기</button>
            </div>
        </div>
    );
}

export default Main;