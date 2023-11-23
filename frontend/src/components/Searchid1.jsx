import React, { useState } from "react";
import { TextField } from "@material-ui/core"
import SearchIcon from '@mui/icons-material/Search';
import "../assets/Searchid.css";
import Avatar from "./Avatar";

const Searchid1 = () => {
    const [searchText, setSearchText] = useState("");
    const [image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
    const onChange = (e) => {
        setSearchText(e.target.value)
    }
    
    const handleButtonClick = async() => {
        try {
            const response = await fetch("/user1", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ searchText }),
            });
            
            if (response.ok) {
                const data = await response.json();
                setImage(data.image);
            } else {
                console.error('Error fetching image:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching image:', error);
        }
    }

    if(image=="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"){
        return (
            <div>
                <div>
                <Avatar 
                    src={image} 
                    style={{ margin: '20px' }} 
                    size={200}
                />
                </div>
                <div className="search">
                    <TextField label="ID" type="search" value={ searchText } onChange={onChange}  />
                    <SearchIcon onClick={handleButtonClick}>검색</SearchIcon>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <div>
                <Avatar 
                    src={`data:image/jpeg;base64,${image}`} 
                    style={{ margin: '20px' }} 
                    size={200}
                />
                </div>
                <div className="search">
                    <TextField label="ID" type="search" value={ searchText } onChange={onChange}  />
                    <SearchIcon onClick={handleButtonClick}>검색</SearchIcon>
                </div>
            </div>
        );
    }
}

export default Searchid1;