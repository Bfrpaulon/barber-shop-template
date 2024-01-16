import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Box } from '@mui/material'
import CustomSlider from '../components/CustomSlider/CustomSlider';
export default function HomePage() {

    return (

        <Box sx={{ background: "var(--bg-100)" }}>
            <Navbar />
            <CustomSlider />
        </Box>
    )
}
