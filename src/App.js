
import './assets/css/fonts.css';
import './assets/css/animations.css';
import {Box, Button, Grid, Link, Stack, Typography} from '@mui/material'
import BannerMessage from './components/BannerMessage';
import BannerImage from './components/BannerImage';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import MyWork from './components/MyWork';
import { Component } from 'react';
import ContactMe from './components/ContactMe';
import Credits from './components/Credits';


class App extends Component {

    render() {
        return (
            <Box component="main" py={4} sx={{pr: {xs: 1, sm: 4}, pl: {xs: 1, sm: 5}}}>
                <Credits/>
                <BannerMessage/>
                <Box position="fixed" sx={{display: {xs: 'none', sm: 'block'}}} right={0} pr={4} top={40} zIndex={9999}>
                    <Stack direction={"row"} spacing={1}>
                        <Button component={Link} href="#contact-me" color='primary' variant="contained" sx={{borderRadius: 5, fontFamily: "'Roboto Slab'"}}>CONTACT ME</Button>
                    </Stack>
                </Box>       

                <Grid container spacing={2} sx={{marginTop: {xs: '-1rem', md: '-5rem'}}}>
                    <Grid item position={"relative"} sx={{display: {xs: 'none', md: 'block'}}} xs={6} md={4}>
                        <Box top={'50%'} pl={3} position={"absolute"}>
                            <Typography sx={{fontSize: {xs: '.5rem', sm: '.8rem', md: "1rem"}}} fontFamily={"'Roboto Slab'"} marginBottom={-1} fontWeight={400}>
                                Full-stack developer
                            </Typography>
                            <Typography sx={{fontSize: {xs: '.2rem', sm: '.7rem', md: ".8rem"}}} variant="caption" fontFamily={"'Roboto Slab'"} fontWeight={200}>
                                Based on Colombia
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <BannerImage/>
                    </Grid>
                </Grid>

                <AboutMe/>
                <Skills/>
                <MyWork/>
                <ContactMe/>
            </Box>
        );
    }
}

export default App;
