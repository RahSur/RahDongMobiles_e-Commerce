import React from 'react'

import { AppBar, Toolbar, Typography, MenuItem, Badge, IconButton, Menu } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import {Link, useLocation} from 'react-router-dom';


import logo from '../../assets/logo.png'

import useStyles from '../Navbar/styles';

const Navbar = ( {totalItems} ) => {

    const classes = useStyles();
    const location = useLocation();


    return (
        <>
            <AppBar position="fixed" className={classes.appbar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="RahDong Mobiles" height="25px" className={classes.image} />
                        RahDong Mobiles
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname === '/' && (
                        <div className={classes.button} >
                        <IconButton component={Link} to="/cart" aria-label="Show Cart Items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                    )}
                    
                </Toolbar> 
            </AppBar>
        </>
    )
}

export default Navbar
