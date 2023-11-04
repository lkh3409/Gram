import React, { useState } from "react";
import "../assets/Searchid.css";

const Searchid = () => {
    const [search, setSearch] = useState("");
    const onChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className="search">
            <input type="text" value={search} onChange={onChange} />
            <button>검색</button>
        </div>
    );
}

export default Searchid;