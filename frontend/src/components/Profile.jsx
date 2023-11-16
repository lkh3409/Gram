import React, { useState, useEffect } from "react";
import Avatar from "./Avatar";

const Profile = () => {
    const [image, setImageUrl] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");

    useEffect(() => {
        // 서버로부터 이미지 URL을 가져오는 요청을 보냅니다.
        fetch("/api/getImage") // 서버의 엔드포인트를 적절하게 지정
            .then(response => response.json())
            .then(data => {
                if (data.imageUrl) {
                    setImageUrl(data.imageUrl); // 반환된 이미지 URL을 설정
                }
            })
            .catch(error => {
                console.error("이미지 가져오기 실패:", error);
            });
    }, []);

    return (
        <div>
            <Avatar 
                src={image} 
                style={{ margin: '20px' }} 
                size={200}
            />
        </div>
    );
};

export default Profile;