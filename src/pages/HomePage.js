import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Container } from '@mui/material'
export default function HomePage() {
    return (
        <Container maxWidth="xl" sx={{background: "var(--bg-100)"}}>
            <Navbar />
        </Container>
    )
}
