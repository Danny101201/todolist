import React from 'react'

function Header({ name }) {
    return (
        <header>
            <h1>
                清單
            </h1>
            <p>這是帥氣的 -{name}</p>
        </header>
    )
}
Header.defaultProps = {
    name: 'Danny'
}

export default Header
