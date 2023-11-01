import React from 'react'

const Header = ({className}) => {
    return (
        <header className={className}>
            <a href='/'><img src=""/></a>
            <nav>
                <a href="">Features</a>
                <a href="">Premium</a>
                <a href="">FAQ</a>
                <a href="">Reviews</a>
            </nav>
        </header>
    )
}

export default Header