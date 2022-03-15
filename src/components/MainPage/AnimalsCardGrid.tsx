import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {useSelector} from "react-redux";
import {RootState} from "../../store/configureStore";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function AnimalsCardGrid() {
    const projectData = useSelector((state: RootState) => state.mainPage.projectData);

    return (
        <>
            <Box sx={{flexGrow: 1}} style={{padding: "2em 0 2em 0"}}>
                <Grid container item xs={16} spacing={2}>
                    {projectData.map((dataItem: any, key: number) => (
                        <Grid item xs={3} key={key}>
                            <Card sx={{maxWidth: 400}}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={dataItem.image_link}
                                    style={{objectFit: "contain", height: 250, width: 250, margin: "1em auto"}}
                                    alt={dataItem.name}
                                    key={key}
                                />
                                <CardContent>
                                    <p style={{fontSize: 16, fontWeight: 600, marginTop: 0, textAlign: "center"}}>
                                        {dataItem.latin_name}
                                    </p>
                                    <div style={{display: "flex", alignItems: "baseline", justifyContent: "center"}}>
                                        <p style={{fontSize: 16, marginTop: 0}}>
                                            Animal Type:
                                        </p>
                                        <p style={{fontSize: 16, marginTop: 0}}>
                                            {dataItem.animal_type}
                                        </p>
                                    </div>
                                    <div style={{display: "flex", alignItems: "baseline", justifyContent: "center"}}>
                                        <p style={{fontSize: 16, marginTop: 0}}>
                                            Max length:
                                        </p>
                                        <p style={{fontSize: 16, marginTop: 0}}>
                                            {dataItem.length_max}
                                        </p>
                                    </div>
                                    <div style={{display: "flex", alignItems: "baseline", justifyContent: "center"}}>
                                        <p style={{fontSize: 16, marginTop: 0}}>
                                            Min length:
                                        </p>
                                        <p style={{fontSize: 16, marginTop: 0}}>
                                            {dataItem.length_min}
                                        </p>
                                    </div>
                                    <div style={{display: "flex", alignItems: "baseline", justifyContent: "center"}}>
                                        <p style={{fontSize: 16, marginTop: 0}}>
                                            Lifespan:
                                        </p>
                                        <p style={{fontSize: 16, marginTop: 0}}>
                                            {dataItem.lifespan}
                                        </p>
                                    </div>
                                    <div style={{display: "flex", alignItems: "baseline", justifyContent: "center"}}>
                                        <p style={{fontSize: 16, marginTop: 0}}>
                                            Max weight:
                                        </p>
                                        <p style={{fontSize: 16, marginTop: 0}}>
                                            {dataItem.weight_max}
                                        </p>
                                    </div>
                                    <div style={{display: "flex", alignItems: "baseline", justifyContent: "center"}}>
                                        <p style={{fontSize: 16, marginTop: 0}}>
                                            Min weight:
                                        </p>
                                        <p style={{fontSize: 16, marginTop: 0}}>
                                            {dataItem.weight_min}
                                        </p>
                                    </div>

                                    <div style={{display: "flex", alignItems: "baseline", justifyContent: "center"}}>
                                        <p style={{fontSize: 16, marginTop: 0}}>
                                            Lifespan:
                                        </p>
                                        <p style={{fontSize: 16, marginTop: 0}}>
                                            {dataItem.lifespan}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
}