const SearchBar = ({ searchHandler, searchValue }) => {
    return (
        <>
            <input placeholder="search here" value={searchValue} onChange={searchHandler} ></input>
        </>
    )
}

export default SearchBar