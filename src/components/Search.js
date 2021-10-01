import React from 'react'

function Search({ search,setSearch}) {
    return (
        <form className="searchForm" onSubmit={e=>e.preventDefault()}>
            <label htmlFor="search">Search</label>
            <input 
                type="text" 
                id="search"
                role="searchbox"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search Items"
            />
        </form>
    )
}

export default Search
