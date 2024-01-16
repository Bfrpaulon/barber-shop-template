import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';
import Logo from '../Logo/Logo';

const Navbar = () => {
    return (
        <AppBar position='static' sx={{ backgroundColor: "var(--bg-300)", opacity: 0, animation: 'fadeIn 1s forwards', transition: 'opacity 1s', width: '100vw', height: 100, alignSelf: 'center', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
            <Logo />
            <Toolbar>
                <Button sx={{
                    color: 'var(--primary-100)',
                    fontSize: '1.1rem',
                    ":hover": {
                        color: 'var(--primary-300)'
                    }
                }} component={Link} to="/">
                    Home
                </Button>
                <Button sx={{
                    color: 'var(--primary-100)',
                    fontSize: '1.1rem',
                    ":hover": {
                        color: 'var(--primary-300)'
                    }
                }} component={Link} to="/about">
                    About
                </Button>
                <Button sx={{
                    color: 'var(--primary-100)',
                    fontSize: '1.1rem',
                    ":hover": {
                        color: 'var(--primary-300)'
                    }
                }} component={Link} to="/services">
                    Services
                </Button>
                <Button sx={{
                    color: 'var(--primary-100)',
                    fontSize: '1.1rem',
                    ":hover": {
                        color: 'var(--primary-300)'
                    }
                }} component={Link} to="/pricing-plan">
                    Pricing Plan
                </Button>
                <Button sx={{
                    color: 'var(--primary-100)',
                    fontSize: '1.1rem',
                    ":hover": {
                        color: 'var(--primary-300)'
                    }
                }} component={Link} to="/our-barber">
                    Our Barber
                </Button>
                <Button sx={{
                    color: 'var(--primary-100)',
                    fontSize: '1.1rem',
                    ":hover": {
                        color: 'var(--primary-300)'
                    }
                }} component={Link} to="/working-hours">
                    Working Hours
                </Button>
                <Button sx={{
                    color: 'var(--primary-100)',
                    fontSize: '1.1rem',
                    ":hover": {
                        color: 'var(--primary-300)'
                    }
                }} component={Link} to="/testimonials">
                    Testimonials
                </Button>
                <Button sx={{
                    color: 'var(--primary-100)',
                    fontSize: '1.1rem',
                    ":hover": {
                        color: 'var(--primary-300)'
                    }
                }} component={Link} to="/contact">
                    Contact
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;