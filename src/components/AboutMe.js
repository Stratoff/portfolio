

import {Box, Grid, Typography} from '@mui/material'
import RobotIMGPolite from '../assets/img/Saly-41.png'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

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
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));  
    const isMedium = useMediaQuery(theme.breakpoints.down('md'));  

    return (
        <Grid container sx={{marginTop: {xs: 5, md: 5}, overflowX: 'hidden', overflowY: 'visible'}} position="relative">
            <Grid item xs={12}>
                <Typography sx={{fontSize: {xs: '2rem', md: '3rem'}, marginBottom: {xs: 2, md: 4}}} variant="h3" textAlign={"center"} fontFamily={"'Roboto Slab'"} fontWeight={500}>
                    ABOUT ME
                </Typography>
            </Grid>
            <Grid display={"flex"} alignItems="center" item xs={12} sm={6} px={2}>
                {isSmall ? (
                    <div>
                        <Typography  sx={{fontSize: {xs: '.8rem', md: '1rem'}}} py={1} textAlign={"center"} variant="body1"  fontFamily={"'Roboto Slab'"}>
                            I'm a full-stack developer from Venezuela currently living in Bogota who started to work as a Front-End developer in 2018.
                        </Typography>
                        <Typography sx={{fontSize: {xs: '.8rem', md: '1rem'}}} textAlign={"center"} variant="body2"  fontFamily={"'Roboto Slab'"}>
                            I love learning new things and take big challenges
                        </Typography> 
                    </div>
                )  : (
                    <div style={{paddingLeft: '30px'}}>
                        <Typography  sx={{fontSize: {xs: '.8rem', md: '1.2rem', lg: '1.8rem'}}} py={1} textAlign={"left"} variant="body1"  fontFamily={"'Roboto Slab'"}>
                            I'm a full-stack developer from Venezuela currently living in Bogota who started to work as a Front-End developer in 2018.
                        </Typography>
                        <Typography sx={{fontSize: {xs: '.8rem', md: '1.2rem', lg: '1.8rem'}}} textAlign={"left"} variant="body2"  fontFamily={"'Roboto Slab'"}>
                            I love learning new things and take big challenges
                        </Typography> 
                    </div>
                )}
            </Grid>

            <Grid item xs={12} sm={6} display="flex" justifyContent="center">
            <Box mt={3} mb={4} p={2} sx={{...(isMedium ?  aboutCloser : {}), maxWidth: '50%'}}>
                        <img alt="" style={{maxWidth: '100%'}} src={RobotIMGPolite}/>
                    </Box>
            </Grid>
        </Grid>
    );
}