import React from 'react'

function Footer({ lengths }) {

    const today = new Date();
    return (
        <footer>
            <span>Copyright &copy; {today.getFullYear()} </span>
            <p>{lengths} Lists {lengths <= 1 ? 'item' : 'items'}</p>

        </footer>
    )
}

export default Footer
