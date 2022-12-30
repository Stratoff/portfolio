import { Typography, Box, Link, Button } from "@mui/material";
import { CERTS } from "../assets/certs_29-12-2022";
import Avatar from '@mui/material/Avatar';
import GoogleLogo from '../assets/img/google-logo.png'
import GoogleLink from '../assets/google-html.pdf'
import CiscoLink from '../assets/ccna.pdf'
import SchoolIcon from '@mui/icons-material/School';

export default function Certs() {
    return (
        <Box mt={8}>
            <Typography sx={{fontSize: {xs: '2rem', md: '3rem'}}} variant="h3" component={"h2"} marginBottom={4} textAlign={"center"} fontFamily={"'Roboto Slab'"} fontWeight={500}>
                Certifications
            </Typography>

            <Box sx={{ width: '100%'}} display="flex" flexWrap={"wrap"} justifyContent="center">
                {CERTS.map(cert => (
                    <Button key={cert.title} component={Link} href={cert.link} target="_blank" color='primary' variant="outlined" sx={{borderRadius: 30, fontFamily: "'Roboto Slab'", mx: 1, mb: 1, pl: '6px', textTransform: 'capitalize'}}>
                        <Avatar alt={`${cert.title} badge`} src={cert.badge} sx={{mr: 1}}/>
                        {cert.title}
                    </Button>
                ))}

                <Button component={Link} href={GoogleLink} download color='primary' variant="outlined" sx={{borderRadius: 30, fontFamily: "'Roboto Slab'", mx: 1, mb: 1, pl: '6px', textTransform: 'capitalize'}}>
                    <Avatar alt={`Curso de Introducción al Desarrollo Web badge`} src={GoogleLogo} sx={{mr: 1}}/>
                    Curso de Introducción al Desarrollo Web
                </Button>
                <Button component={Link} href={CiscoLink} download color='primary' variant="outlined" sx={{borderRadius: 30, fontFamily: "'Roboto Slab'", mx: 1, mb: 1, pl: '6px', textTransform: 'capitalize'}}>
                    <Avatar alt={`CCNA Routing and Switching: Introducción a badge`}  sx={{mr: 1, bgcolor: '#1976d2'}}>
                        <SchoolIcon/>
                    </Avatar>
                    CCNA Routing and Switching
                </Button>
            </Box>
        </Box>
   );
}