import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const CustomBreadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Link component={RouterLink} to="/">
                Home
            </Link>
            {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;
                return (
                    <Box key={name} >
                        <Typography color={isLast ? 'textPrimary' : 'inherit'}>{name}</Typography>
                        {!isLast && <Link component={RouterLink} to={routeTo}>{' / '}</Link>}
                    </Box>
                );
            })}
        </Breadcrumbs>
    );
};

export default CustomBreadcrumbs;
