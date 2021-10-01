import React from 'react'

function Footer({ lengths }) {

    const today = new Date();
    return (
        <footer>
            <span>Copyright &copy; {today.getFullYear()} {lengths} Lists {lengths <= 1 ? 'item' : 'items'}</span>

        </footer>
    )
}

export default Footer
