import React, {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ResponsiveAppBar from "./components/AppBar/AppBar";
import {useSnackbar} from "notistack";
import Slide from '@mui/material/Slide';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {RootState} from "./store/configureStore";
import {useDispatch, useSelector} from "react-redux";
import {actions} from "./store/main-page-reducer";
import AnimalsCardGrid from "./components/MainPage/AnimalsCardGrid";

function App() {
    const dispatch = useDispatch();
    const mainPageLoaderStatus = useSelector((state: RootState) => state.mainPage.mainPageLoaderStatus);
    const mainPageDownloadStatus = useSelector((state: RootState) => state.mainPage.mainPageDownloadStatus);
    const badRequestDownloadStatus = useSelector((state: RootState) => state.mainPage.badRequestDownloadStatus);

    const {enqueueSnackbar} = useSnackbar();

    useEffect(() => {
        if (mainPageDownloadStatus) {
            enqueueSnackbar('Success', {
                variant: "success",
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "left",
                    // @ts-ignore
                }, TransitionComponent: Slide
            })
            setTimeout(() => dispatch(actions.changeDownloadStatus(false)), 100)
        }
    }, [mainPageDownloadStatus])

    useEffect(() => {
        if (badRequestDownloadStatus) {
            enqueueSnackbar('Error', {
                variant: "error",
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "left",
                    // @ts-ignore
                }, TransitionComponent: Slide
            })
            setTimeout(() => dispatch(actions.changeBadRequestDownloadStatus(false)), 100)
        }
    }, [badRequestDownloadStatus])

    return (
        <Router>
            <ResponsiveAppBar/>
            {mainPageLoaderStatus ? (
                <Box sx={{
                    display: 'flex', zIndex: 1, position: "fixed", left: "50%", top: "50%",
                    transform: "translate(-50%, -50%)"
                }}>
                    <CircularProgress/>
                </Box>
            ) : <></>}
            <Routes>
                <Route path='/animals-info' element={<AnimalsCardGrid/>}/>
            </Routes>
        </Router>
    );
}

export default App;
