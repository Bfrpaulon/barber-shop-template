import React from 'react';
import { Typography, Container, Grid, Box, Paper } from '@mui/material';
import Flicking from "@egjs/react-flicking";
import { IconMap, IconPhone } from '@tabler/icons-react';
import "@egjs/react-flicking/dist/flicking.css";

const images = [
    require('../../assets/IMAGE1.jpg'),
    require('../../assets/IMAGE2.jpg'),
    require('../../assets/IMAGE3.jpg'),
];

const texts = [
    {
        title: 'LUXURY HAIRCUT AT AFFORDABLE PRICE',
        address: '123 STREET, NEW YORK, USA',
        phoneNumber: '+012 345 67890',
    },
    {
        title: 'PREMIUM BARBER SERVICES WITHOUT BREAKING THE BANK',
        address: '123 STREET, NEW YORK, USA',
        phoneNumber: '+012 345 67890',
    },
    {
        title: 'HIGH-END EXPERIENCE AT AN ECONOMICAL PRICE POINT',
        address: '123 STREET, NEW YORK, USA',
        phoneNumber: '+012 345 67890',
    }
];

const CustomSlider = () => {
    return (
        <Flicking
            className="flicking"
            options={{
                align: "prev",
                circular: true,
                bounce: 300,
                nextButton: true,
                prevButton: true,
            }}

        >
            {images.map((image, index) => (
                <Paper
                    key={index}
                    style={{
                        height: '60vw',
                        maxHeight: '720px',
                        width: '100vw',
                        background: `url(${image}) no-repeat center  / cover`,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Container sx={{ animation: 'fadeIn 3s ease' }}>
                        <Grid container justifyContent="center" alignItems="center">
                            <Grid item xs={12} md={6}>
                                <Box color="#fff" textAlign="left">
                                    <Typography variant="h3" gutterBottom>
                                        {texts[index].title}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        <IconMap width={48} />
                                        {texts[index].address}
                                    </Typography>
                                    <Typography variant="body1">
                                        <Typography variant="body1">
                                            <IconPhone width={48} />
                                            {texts[index].phoneNumber}
                                        </Typography>
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
            ))}
        </Flicking>
    );
};

export default CustomSlider;
