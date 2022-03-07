import { Box, Button, Grid, Link, Typography } from "@mui/material";
import RobotIMGMeditating from '../assets/img/Saly-39.png'
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const about = {
    borderRadius: "10px",
    background: "#ECF0F3",
    boxShadow:  " inset 2px 2px 4px #c9cccf, inset -2px -2px 4px #ffffff"
}


export default function ContactMe() {
    return (
        <Grid container spacing={2} sx={{marginTop: 5}} id="contact-me">
            <Grid item xs={0} md ={1}></Grid>
            <Grid item xs={12} md ={5}>
                <Box p={4} sx={{display: "flex", flexDirection: "column", mx: {xs: 0, md: 4}}}>
                    <Typography sx={{fontSize: {xs: '2rem', md: '3rem'}}} variant="h3" marginBottom={3} textAlign={"center"} fontFamily={"'Roboto Slab'"} fontWeight={500}>
                        CONTACT ME
                    </Typography>
                    <Typography marginBottom={5} textAlign={"center"} color="gray" variant="caption"  fontFamily={"'Roboto Slab'"}>
                        Bring your good ideas to my radar and let's make them real!  If you want more information about me you could get <Link href="#" download>my CV here</Link>
                    </Typography>

                    <Button sx={{...about, mb: 3, width: {xs: '100%', md: 'fit-content'}, px: 2, fontWeight: 900, fontFamily: "'Roboto Slab'", color: "#545454"}} rel="nofollow" href="https://github.com/Stratoff" component={Link}>
                        <GitHubIcon sx={{mr: 2, color: "#545454"}}/> My GitHub
                    </Button>
                    <Button sx={{...about, mb: 3, ml: {xs: 0, md: 10}, width: {xs: '100%', md: 'fit-content'}, px: 2, fontWeight: 900, fontFamily: "'Roboto Slab'", color: "#545454"}} rel="nofollow" href="https://www.instagram.com/yourcosmicboy/" component={Link}>
                        <InstagramIcon sx={{mr: 2, color: "#545454"}}/> My Instagram
                    </Button>
                    <Button sx={{...about, mb: 3, ml: {xs: 0, md: 25}, width: {xs: '100%', md: 'fit-content'}, px: 2, fontWeight: 900, fontFamily: "'Roboto Slab'", color: "#545454"}} rel="nofollow" href="https://t.me/yourcosmicboy" component={Link}>
                        <TelegramIcon sx={{mr: 2, color: "#545454"}}/> My Telegram
                    </Button>
                </Box>
            </Grid>
            <Grid item xs={6} sx={{display: {xs: "none", md: "block"}}}>
                <Box mt={5} p={4} className="floating" mx={4} sx={{maxWidth: '50%'}}>
                    <img alt="" style={{maxWidth: '100%'}} src={RobotIMGMeditating}/>
                </Box>
            </Grid>
        </Grid>
    );
}