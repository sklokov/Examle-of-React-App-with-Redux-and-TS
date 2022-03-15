import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {useDispatch} from "react-redux";
import {getDataForMainPage} from "../../store/main-page-reducer";
import { useNavigate } from 'react-router-dom';

const pages = ['Make Api Request', 'Clear Page'];

const ResponsiveAppBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCloseNavMenu = async (page: string) => {
        if(page === 'Make Api Request') {
            await dispatch(getDataForMainPage(10));
            navigate('/animals-info');
        } else if (page === 'Clear Page') {
            navigate('/');
        }
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => handleCloseNavMenu(page)}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;