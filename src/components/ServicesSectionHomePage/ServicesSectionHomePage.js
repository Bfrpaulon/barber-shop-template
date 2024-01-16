import { Card, Container, Fade, List, Stack, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
export default function ServicesSectionHomePage() {
    const [haircuts, setHaircuts] = useState([]);

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
    useEffect(() => {
        fetch('https://barber-shop-api.cyclic.app/api/haircuts')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch haircuts');
                }
                return response.json();
            })
            .then(data => {
                setHaircuts(data);
                console.table(data);
                console.table(haircuts);
                if (data.length === 0) {
                }
            })
            .catch(error => {
                console.error(error);
                // Handle the error here
            });
    }, []);
    return (

        <Fade in={isVisible} timeout={2000}>
            <Container
                ref={sectionRef}
                maxWidth='xl'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '60vh',
                    background: "var(--bg-100)",
                    padding: "2% 0 "
                }}
            >
                <Stack sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '360px' }} gap={3}>
                    <Typography variant='body1' sx={{ color: 'var(--text-300)', fontWeight: 'bold', backgroundColor: 'var(--accent-200)', width: "40%", padding: '5px', textAlign: 'center' }}>
                        Services
                    </Typography>
                    <Typography variant='h4' sx={{ color: 'var(--text-100)', fontWeight: 'bold', width: "100%", padding: '5px', textAlign: 'center' }}>
                        Most performed services
                    </Typography>
                </Stack>
                <Stack direction='row' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                    <List sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
                        {haircuts.map(haircut => (
                            <Card key={haircut._id} sx={{ backgroundColor: 'var(--accent-200)', padding: '10px', borderRadius: '4px', cursor: 'pointer', minWidth: '250px', width: '400px', justifyContent: 'center', alignContent: 'center' }}>
                                <Stack direction={'row'} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                                    <img src={haircut.photos} alt={haircut.name} style={{ width: '48px', height: '48px', objectFit: 'cover' }} />
                                    <Typography variant="h6">{haircut.name}</Typography>
                                </Stack>
                                <Stack sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                                    <Typography variant="body1">{haircut.description}</Typography>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'var(--accent-100)' }}>From $ {haircut.price}</Typography>
                                </Stack>
                            </Card>
                        ))}
                    </List>
                </Stack>
            </Container>
        </Fade>
    );
}