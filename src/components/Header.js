import React from 'react'

function Header({ name }) {
    return (
        <header>
            <h1>
                Home List
            </h1>
            <p>Hellow -{name}</p>
        </header>
    )
}
Header.defaultProps = {
    name: 'Danny'
}

export default Header
