import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <AppBar position="static" sx={{ backgroundColor: theme.palette.background[200], opacity: 0, animation: 'fadeIn 1s forwards' }}>
            <Toolbar>
                <Button color="inherit" component={Link} to="/" sx={buttonStyles(isMobile)}>
                    Home
                </Button>
                <Button color="inherit" component={Link} to="/contact" sx={buttonStyles(isMobile)}>
                    Contact
                </Button>
                <Button color="inherit" component={Link} to="/about" sx={buttonStyles(isMobile)}>
                    About
                </Button>
                <Button color="inherit" component={Link} to="/services" sx={buttonStyles(isMobile)}>
                    Services
                </Button>
                <Button color="inherit" component={Link} to="/pricing-plan" sx={buttonStyles(isMobile)}>
                    Pricing Plan
                </Button>
                <Button color="inherit" component={Link} to="/our-barber" sx={buttonStyles(isMobile)}>
                    Our Barber
                </Button>
                <Button color="inherit" component={Link} to="/testimonials" sx={buttonStyles(isMobile)}>
                    Testimonials
                </Button>
                <Button color="inherit" component={Link} to="/working-hours" sx={buttonStyles(isMobile)}>
                    Working Hours
                </Button>
            </Toolbar>
        </AppBar>
    );
};

const buttonStyles = (isMobile) => ({
    marginRight: isMobile ? 1 : 2,
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    '@media (max-width: 600px)': {
        fontSize: '0.8rem',
    },
});

export default Navbar;
