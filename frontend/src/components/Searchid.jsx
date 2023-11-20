import React, { useState } from "react";
import { TextField } from "@material-ui/core"
import SearchIcon from '@mui/icons-material/Search';
import "../assets/Searchid.css";

const Searchid = ({onImageChange, onSearchBtnClick}) => {
    const [searchText, setSearchText] = useState("");
    const onChange = (e) => {
        setSearchText(e.target.value)
    }
    const handleButtonClick = async() => {

        const response = await fetch("/user", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ searchText }),
        });
    
        /*const data = await response.json();
        // 이후 결과를 처리하거나 상태로 관리할 수 있습니다.
        console.log(data.result);*/

        // 이미지 변경 로직 (예: 웹 크롤링 등)
        /*const newImageUrl = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
        onImageChange(newImageUrl);

        // Main에서의 버튼 이벤트 실행
        onSearchBtnClick();*/
    }

    return (
        <div className="search">
            <TextField label="ID" type="search" value={ searchText } onChange={onChange}  />
            <SearchIcon onClick={handleButtonClick}>검색</SearchIcon>
        </div>
    );
}

export default Searchid;