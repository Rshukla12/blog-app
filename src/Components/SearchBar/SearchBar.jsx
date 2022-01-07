import React from "react";
import useDebouncer from "../../utils/useDebouncer";

const SearchBar = ({
    setQuery
}) => {
    const [q, setQ] = React.useState("");
    const updateQuery = useDebouncer(setQuery, 500);

    const handleChange = (event) => {
        const { value } = event.target;
        setQ( value );
        updateQuery( value );
    };

    const handleClear = () => {
        setQ( "" );
        setQuery( "" );
    };

    return (
        <div>
            <input type="text"  value={q} onChange={handleChange} />
            <div onClick={handleClear}>X</div>
        </div>
    )
};

export default SearchBar;