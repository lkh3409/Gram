import React from "react";

const Avatar = ({ src, size, style }) => {
    return (
        <img
            src={src}
            alt="User Avatar"
            style={{
                width: size,
                height: size,
                borderRadius: "50%",
                cursor: "pointer",
                ...style,
            }}
        />
    );
};

export default Avatar;