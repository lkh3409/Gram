import React, { useState } from "react";
import "../assets/Searchid.css";

const Searchid = ({onImageChange}) => {
    const [search, setSearch] = useState("");
    const onChange = (e) => {
        setSearch(e.target.value)
    }
    const handleButtonClick = () => {
        // 이미지 변경 로직 (예: 웹 크롤링 등)
        const newImageUrl = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
        onImageChange(newImageUrl);
    }

    return (
        <div className="search">
            <input type="text" value={search} onChange={onChange} />
            <button onClick={handleButtonClick}>검색</button>
        </div>
    );
}

export default Searchid;