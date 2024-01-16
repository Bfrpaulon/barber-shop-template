import React, { useState } from 'react';
import { Container, Grid, Typography, TextField, Button, Link, Alert, Box } from '@mui/material';
import { IconLocation, IconPhone, IconMailbox, IconArrowUp } from '@tabler/icons-react';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState('');
    const [alertMessage, setAlertMessage] = useState('');

    const handleEmailChange = (event) => {
        const emailValue = event.target.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for email validation

        setEmail(emailValue);
        setShowAlert(false);

        if (!emailRegex.test(emailValue)) {
            setShowAlert(true);
            setAlertType('error');
            setAlertMessage('Invalid email');
        }
    };

 const handleSubscribe = () => {
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for email validation
 
     if (!emailRegex.test(email)) {
         setShowAlert(true);
         setAlertType('error');
         setAlertMessage('Invalid email');
         return;
     }
 
     fetch('https://barber-shop-api.cyclic.app/api/newsletter', {
         method: 'POST',
         body: JSON.stringify({ email }),
         headers: {
             'Content-Type': 'application/json'
         }
     })
         .then(response => response.json())
         .then(data => {
             console.log(data);
             setEmail('');
             setShowAlert(true);
             setAlertType('success');
             setAlertMessage('Thank you for subscribing.');
             setTimeout(() => {
                 setShowAlert(false);
             }, 1000);
 
         })
         .catch(error => {
             console.error(error);
             setShowAlert(true);
             setAlertType('error');
             setAlertMessage('An error occurred. Please try again later.');
 
             setTimeout(() => {
                 setShowAlert(false);
             }, 1000);
         });
 };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <Container maxWidth="xl" sx={{ background: 'var(--bg-100)', padding: '2rem 0', justifyContent: 'center' }}>
            <Grid container spacing={3}>
                {/* Coluna 1: Get in Touch */}
                <Grid item xs={12} md={4} sx={{ textAlign: 'left', color: 'var(--text-100)' }}>
                    <Typography variant="h6" fontWeight="bold" sx={{ textTransform: 'uppercase', color: 'var(--primary-300)', marginBottom: '1rem' }}>Get in Touch</Typography>
                    <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
                        <IconLocation /> 123 STREET, NEW YORK, USA
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
                        <IconPhone /> +012 345 67890
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
                        <IconMailbox /> contact@barbershop.com
                    </Typography>
                </Grid>

                {/* Coluna 2: Links Rápidos */}
                <Grid item mb={3} xs={12} md={4}>
                    <Typography variant="h6" fontWeight="bold" sx={{ textTransform: 'uppercase', color: 'var(--primary-300)', marginBottom: '1rem' }}>Quick Links</Typography>
                    <Link href="#" sx={{ color: 'var(--text-100)', textDecoration: 'none', ":hover": { color: 'var(--primary-300)' } }} > Link 1</Link><br /><br />
                    <Link href="#" sx={{ color: 'var(--text-100)', textDecoration: 'none', ":hover": { color: 'var(--primary-300)' } }}>Link 2</Link><br /><br />
                    <Link href="#" sx={{ color: 'var(--text-100)', textDecoration: 'none', ":hover": { color: 'var(--primary-300)' } }}>Link 3</Link><br /><br />
                    <Link href="#" sx={{ color: 'var(--text-100)', textDecoration: 'none', ":hover": { color: 'var(--primary-300)' } }}>Link 4</Link><br /><br />
                    <Link href="#" sx={{ color: 'var(--text-100)', textDecoration: 'none', ":hover": { color: 'var(--primary-300)' } }}>Link 5</Link>
                </Grid>

                {/* Coluna 3: Newsletter */}
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" fontWeight="bold" sx={{ textTransform: 'uppercase', color: 'var(--primary-300)', marginBottom: '1rem' }}>Subscribe to Newsletter</Typography>
                    <Typography variant="body1" sx={{ marginBottom: '0.5rem', color: 'var(--text-100)' }}>Stay updated with our latest news and offers.</Typography>
                    <TextField
                        label="Enter your email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="email"
                        value={email}
                        InputProps={{
                            sx: {
                                color: 'var(--text-100)', borderColor: 'var(--text-100)', marginBottom: '0.5rem', 
                                "::placeholder": {
                                    color: 'var(--text-100)'
                                },

                            }
                        }}

                        onChange={handleEmailChange}

                    />
                    {/* Botão Subscribe */}
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Button variant="contained" color="primary" sx={{ marginRight: '1rem', color: 'var(--text-300)', backgroundColor: 'var(--text-100)', ":hover": { backgroundColor: 'var(--primary-300)' } }} onClick={handleSubscribe}>Subscribe</Button>
                        {showAlert && (
                            <Alert variant="outlined" severity={alertType} sx={{ width: '100%' }}>
                                {alertMessage}
                            </Alert>
                        )}
                    </Box>

                </Grid>

                {/* Coluna 4: Botão Scroll to Top */}
                <Grid item xs={12} md={4}>
                    <Button
                        onClick={scrollToTop}
                        variant="outlined"
                        sx={{
                            marginTop: '1rem',
                            borderRadius: '25px',
                            padding: '0.5rem',
                            color: 'white',
                            borderColor: 'white',
                            ":hover": {
                                borderColor: 'var(--primary-300)',
                                color: 'var(--primary-300)'
                            }
                        }}
                    >
                        <IconArrowUp />
                    </Button>
                </Grid>
            </Grid>
            <Grid container justifyContent="center" alignItems="center">
                {/* Seção de Direitos Autorais */}
                <Grid item xs={12}>
                    <Typography variant="body1" sx={{ color: 'var(--text-100)' }} align="center">
                        &copy; 2024 Barber Shop. All rights reserved. Developed by <Link href="https://github.com/Bfrpaulon" target="_blank" rel="noopener noreferrer" sx={{ color: 'var(--primary-300)', textDecoration: 'none' }}>Bruno Paulon</Link>.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Footer;