import React, { useState } from "react";

const Searchid = () => {
    const [search, setSearch] = useState("");
    const onChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <input type="text" value={search} onChange={onChange} />
    )
}

export default Searchid;