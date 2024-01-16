import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Box } from '@mui/material'
import CustomSlider from '../components/CustomSlider/CustomSlider';
import Footer from '../components/Footer/Footer';
import AboutUsSectionHomePage from '../components/AboutUsSectionHomePage/AboutUsSectionHomePage';
import ServicesSectionHomePage from '../components/ServicesSectionHomePage/ServicesSectionHomePage';
export default function HomePage() {

    return (

        <Box sx={{ background: "var(--bg-100)" , maxWidth: '100vw', height: '100vh' , overflowX: 'hidden' }}>
            <Navbar />
            <CustomSlider />
            <AboutUsSectionHomePage />
            <ServicesSectionHomePage />
            <Footer />
        </Box>
    )
}
