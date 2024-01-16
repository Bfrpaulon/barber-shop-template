import { Box, Container, Fade, Stack, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'

export default function AboutUsSectionHomePage() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.5 } // Change the threshold value as per your requirement
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);
    return (
        <Fade in={isVisible} timeout={2000}>
            <Container
                ref={sectionRef}
                maxWidth='xl' sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '60vh', background: "var(--bg-100)", padding: "2% 0 " }}>

                <Fade in={isVisible} timeout={3000}>
                    <Box width={'45%'} sx={{ backgroundColor: 'var(--bg-100)', height: '100%', position: 'relative' }}>
                        <Box sx={{
                            backgroundImage: 'url(https://img.freepik.com/fotos-gratis/cabeleireiro-aparar-barba-para-macho-envelhecido-no-salao_23-2148181981.jpg?size=626&ext=jpg&ga=GA1.2.203374867.1705354102&semt=ais)',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            height: '90%',
                            width: '90%'
                        }}>
                        </Box>
                        <Box sx={{ backgroundColor: 'var(--accent-200)', height: '40%', width: '40%', position: 'absolute', bottom: 10, left: -50, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                            <Typography variant='h4' sx={{ color: 'var(--text-300)', fontWeight: 'bold' }}>
                                12 YEARS
                                EXPERIENCE
                            </Typography>
                        </Box>
                    </Box>
                </Fade>
                <Fade in={isVisible} timeout={4000}>
                    <Box width={'45%'} sx={{ backgroundColor: 'var(--bg-100)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <Typography variant='body1' sx={{ color: 'var(--text-300)', fontWeight: 'bold', backgroundColor: 'var(--accent-200)', width: '15%', padding: '5px' }}>
                            About Us
                        </Typography>
                        <Typography variant='h4' sx={{ color: 'var(--accent-200)', fontWeight: 'bold' }}>
                            Welcome to the place where tradition meets modernity.
                        </Typography>
                        <Typography variant='body1' sx={{ color: 'var(--text-200)' }}>
                            12 years ago, our journey began with a bold vision to redefine the art of shaving and provide a unique experience to our customers.
                        </Typography>
                        <Typography variant='body1' sx={{ color: 'var(--text-200)' }}>
                            Our commitment to excellence is not just a promise, but a tradition spanning more than a decade.
                        </Typography>
                        <Stack direction={'row'} gap={5} >
                            <Stack direction={'column'}>
                                <Typography variant='h4' sx={{ color: 'var(--accent-200)', fontWeight: 'bold' }}>
                                    Since 2012
                                </Typography>
                                <Typography variant='body1' sx={{ color: 'var(--text-200)' }}>
                                    We have been on the cutting edge of the industry for over 12 years.
                                </Typography>
                            </Stack>
                            <Stack direction={'column'}>
                                <Typography variant='h4' sx={{ color: 'var(--accent-200)', fontWeight: 'bold' }}>
                                    1400+ customers
                                </Typography>
                                <Typography variant='body1' sx={{ color: 'var(--text-200)' }}>
                                    Since our beginnings in 2012, we have been honored to serve and care for an incredible community.
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Fade>
            </Container>
        </Fade>
    )
}
