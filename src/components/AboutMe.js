

import {Box, Grid, Typography} from '@mui/material'
import RobotIMGPolite from '../assets/img/Saly-41.png'

const about = {
    borderRadius: "50px",
    background: "#ECF0F3",
    boxShadow:  "-30px 30px 60px #c9cccf, 30px -30px 60px #ffffff"
}

const aboutCloser = {
    borderRadius: "50px",
    background: "#ECF0F3",
    boxShadow:  "-10px 10px 20px #c9cccf, 10px -10px 20px #ffffff",
    width: 'fit-content'
}

export default function AboutMe() {
    return (
        <Grid container spacing={2} sx={{marginTop: 5}}>
            <Grid item xs={0} md={1}></Grid>
            <Grid item xs={12} md={5}>
                <Box p={4} sx={{display: "flex", flexDirection: "column", mx: {xs: 0, md: 4}}}>
                    <Typography sx={{fontSize: {xs: '2rem', md: '3rem'}}} variant="h3" marginBottom={4} textAlign={"center"} fontFamily={"'Roboto Slab'"} fontWeight={500}>
                        ABOUT ME
                    </Typography>
                    <Typography  sx={{transform: {xs: "unset", md: "translate(-2rem, 0)"}, fontSize: {xs: '.8rem', md: '1rem'}, ...aboutCloser}} px={5} py={1} marginBottom={2} textAlign={"center"} variant="body1"  fontFamily={"'Roboto Slab'"}>
                        I'm a full-stack developer from Venezuela currently living in Bogota
                    </Typography>
                    <Typography sx={{transform: {xs: "unset", md: "translate(2rem, 0)"}, fontSize: {xs: '.8rem', md: '1rem'}, ...aboutCloser}} px={5} py={1} marginBottom={2} textAlign={"center"} variant="body1"  fontFamily={"'Roboto Slab'"}>
                        I started to work as a Front-End developer in 2018
                    </Typography>

                    <Typography sx={{transform: {xs: "unset", md: "translate(-2rem, 0)"}, fontSize: {xs: '.8rem', md: '1rem'}, ...aboutCloser}} px={5} py={1} marginBottom={2} textAlign={"center"} variant="body1"  fontFamily={"'Roboto Slab'"}>
                        I love learning new things and take big challenges
                    </Typography> 

                    <Typography sx={{transform: {xs: "unset", md: "translate(2rem, 0)"}, fontSize: {xs: '.8rem', md: '1rem'}, ...aboutCloser}} px={5} py={1} marginBottom={2} textAlign={"center"} variant="body1"  fontFamily={"'Roboto Slab'"}>
                        When I'm not coding I'm fighting crime in Gotham City
                    </Typography>   
                </Box>
            </Grid>
            <Grid item xs={6} sx={{display: {xs: 'none', md: "block"}}}>
                <Box mt={5} p={4} mx={4} sx={{...about, maxWidth: '50%'}}>
                    <img alt="" style={{maxWidth: '100%'}} src={RobotIMGPolite}/>
                </Box>
            </Grid>
        </Grid>
    );
}