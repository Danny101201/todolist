import React from 'react'

function Search({ search,setSearch}) {
    return (
        <form className="searchForm" onSubmit={e=>e.preventDefault()}>
            <label htmlFor="search">搜尋</label>
            <input 
                type="text" 
                id="search"
                role="searchbox"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="搜尋"
            />
        </form>
    )
}

export default Search
