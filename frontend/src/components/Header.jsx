import React from "react";
import '../assets/Header.css';

const Header  = () => {
    return (
        <header className="header">
            <div className="title">
                <a href="/">우리 사이는 몇그램 ?!</a>
            </div>
            <div className="explain">
                <p>인스타그램 궁합 판독기</p>
            </div>
        </header>
    );
}

export default Header;