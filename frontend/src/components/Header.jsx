import React from "react";
import '../assets/Header.css';
import '../assets/fonts/Font.css';

const Header  = () => {
    return (
        <header className="header">
            <div className="title">
                <a href="/">우리 궁합은 몇 그램 ?!</a>
            </div>
            <div className="explain">
                <p>인스타그램 궁합 판독기</p>
            </div>
        </header>
    );
}

export default Header;