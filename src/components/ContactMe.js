import { Box, Button, Grid, Link, Typography, Stack } from "@mui/material";
import RobotRunning from '../assets/img/Saly-40.webp'
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const about = {
    borderRadius: "10px",
    background: "#ECF0F3",
    boxShadow:  " inset 2px 2px 4px #c9cccf, inset -2px -2px 4px #ffffff"
}



export default function ContactMe() {
    const theme = useTheme();
    const isMedium = useMediaQuery(theme.breakpoints.down('md'));  

    return (
        <Grid container spacing={2} sx={{marginTop: 5}} id="contact-me">
            <Grid item xs={0} sm={1}></Grid>
            <Grid display="flex" alignItems={"center"} item xs={12} sm={5}>
                <Box py={4} px={2} sx={{display: "flex", flexDirection: "column"}}>
                    <Typography sx={{fontSize: {xs: '2rem', md: '3rem'}}} variant="h3" marginBottom={3} textAlign={"center"} fontFamily={"'Roboto Slab'"} fontWeight={500}>
                        CONTACT ME
                    </Typography>
                    <Typography marginBottom={5} textAlign={"center"} color="gray" variant="caption"  fontFamily={"'Roboto Slab'"}>
                        Bring your good ideas to my radar and let's make them real!  If you want more information about me you could get <Link href="#" download>my CV here</Link>
                    </Typography>

                    {isMedium ? (
                        <>
                            <Button sx={{...about, mb: 3, width: {xs: '100%', md: 'fit-content'}, px: 2, fontWeight: 900, fontFamily: "'Roboto Slab'", color: "#545454"}} rel="nofollow" href="https://github.com/Stratoff" component={Link}>
                                <GitHubIcon sx={{...(isMedium ? {mr: 2} : {}), color: "#545454"}}/> {isMedium && "My GitHub"}
                            </Button>
                            <Button sx={{...about, mb: 3, width: {xs: '100%', md: 'fit-content'}, px: 2, fontWeight: 900, fontFamily: "'Roboto Slab'", color: "#545454"}} rel="nofollow" href="https://www.instagram.com/yourcosmicboy/" component={Link}>
                                <InstagramIcon sx={{...(isMedium ? {mr: 2} : {}), color: "#545454"}}/> {isMedium && "My Instagram"}
                            </Button>
                            <Button sx={{...about, mb: 3, width: {xs: '100%', md: 'fit-content'}, px: 2, fontWeight: 900, fontFamily: "'Roboto Slab'", color: "#545454"}} rel="nofollow" href="https://t.me/yourcosmicboy" component={Link}>
                                <TelegramIcon sx={{...(isMedium ? {mr: 2} : {}), color: "#545454"}}/> {isMedium && "My Telegram"}
                            </Button>
                        </>
                    ) : (
                        <Stack direction="row" justifyContent="center" spacing={3}>
                            <Button sx={{...about, height: 60, display: 'flex', mb: 3, width: {xs: '100%', md: 'fit-content'}, px: 2, fontWeight: 900, fontFamily: "'Roboto Slab'", color: "#545454"}} rel="nofollow" href="https://github.com/Stratoff" component={Link}>
                                <GitHubIcon sx={{...(isMedium ? {mr: 2} : {}), color: "#545454"}}/> {isMedium && "My GitHub"}
                            </Button>
                            <Button sx={{...about, height: 60, display: 'flex', mb: 3, width: {xs: '100%', md: 'fit-content'}, px: 2, fontWeight: 900, fontFamily: "'Roboto Slab'", color: "#545454"}} rel="nofollow" href="https://www.instagram.com/yourcosmicboy/" component={Link}>
                                <InstagramIcon sx={{...(isMedium ? {mr: 2} : {}), color: "#545454"}}/> {isMedium && "My Instagram"}
                            </Button>
                            <Button sx={{...about, height: 60, display: 'flex', mb: 3, width: {xs: '100%', md: 'fit-content'}, px: 2, fontWeight: 900, fontFamily: "'Roboto Slab'", color: "#545454"}} rel="nofollow" href="https://t.me/yourcosmicboy" component={Link}>
                                <TelegramIcon sx={{...(isMedium ? {mr: 2} : {}), color: "#545454"}}/> {isMedium && "My Telegram"}
                            </Button>
                        </Stack>
                    )}
                </Box>
            </Grid>
            <Grid item xs={6} sx={{display: {xs: "none", sm: "block"}}}>
                <Box mt={5} p={4} mx={4} sx={{maxWidth: '50%'}}>
                    <img alt="" style={{maxWidth: '100%'}} src={RobotRunning}/>
                </Box>
            </Grid>
        </Grid>
    );
}