import { Typography, Box, Link, Button } from "@mui/material";
import { CERTS } from "../assets/certs_29-12-2022";
import Avatar from '@mui/material/Avatar';


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
            </Box>
        </Box>
   );
}