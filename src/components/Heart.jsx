import React, {useEffect, useState} from "react";
import "../assets/Heart.css";

const Heart = () => {
    const [fillHeart, setFillHeart] = useState(0);

    useEffect(() => {
        // 테스트용 코드. heartPercentage에 퍼센티지 입력.
        /*
        const heartPercentage = 50;
        setFillHeart(heartPercentage) */

        const fetchData = async () => {
            try {
                const response = await fetch("/api/getPercentage") // 서버 엔드포인트 변경

                if (response.ok) {
                    const data = await response.json();
                    if (data.percentage) {
                        setFillHeart(data.percentage);
                    }
                }
            } catch (error) {
                console.error("퍼센티지 가져오기 실패", error);
            }
        };

        fetchData();
    },[]);

    return (
        <div className="heartContainer">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                className="heart"
            >
                <defs>
                    <linearGradient id="heartGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" style={{ stopColor: "rgba(204, 0, 204, 0.2)" }}/>
                        <stop offset="100%" style={{ stopColor: "rgba(204, 0, 255, 0.5)" }} />
                    </linearGradient>
                    <clipPath id="heartClip">
                        <rect x="0" y={100 - fillHeart + "%"} width="100%" height={fillHeart + "%"} />
                    </clipPath>
                </defs>

                <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    fill="rgba(255, 255, 255, 0.5)"
                    stroke="darkgray"
                    strokeWidth="1"
                    vectorEffect="non-scaling-stroke" 
                />

                <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    fill="url(#heartGradient)"
                    clipPath="url(#heartClip)"
                />
            </svg>
            <div className="percentageText">{`${fillHeart}%`}</div>
        </div>
    )
};

export default Heart;