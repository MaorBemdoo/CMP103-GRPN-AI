import React from 'react'
import Typography from '@mui/material/Typography'

const Header = ({className}) => {
    return (
        <header className={className}>
            <a href='/'><img src=""/></a>
            <nav>
                <Typography variant="body1" component="a" href=''>Features</Typography>
                <Typography variant="body1" component="a" href=''>Premium</Typography>
                <Typography variant="body1" component="a" href=''>FAQ</Typography>
                <Typography variant="body1" component="a" href=''>Reviews</Typography>
            </nav>
        </header>
    )
}

export default Header