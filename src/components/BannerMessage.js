import { Box, Typography } from "@mui/material";

export default function BannerMessage () {
    const josefin = "'Josefin Sans'";
    return (
        <Box width={"100%"} sx={{mt: {xs: 2, sm: 0}}}>
            <Typography sx={{
                fontSize: {xs: '1.2rem', sm: '1.4rem', md: " 2.125rem"},
                textAlign: {xs: 'center', sm: 'unset'}
            }} variant="h4" component="div" fontWeight={300} fontFamily={josefin}>
                I'm something of a<br/>
            </Typography>           
            <Typography sx={{
                fontSize: {xs: '1.6rem', sm: '2rem', md: "3.75rem"},
                marginTop: {xs: '-0.2rem', sm: '-0.1rem', md: "-0.6rem"},
                marginBottom: {xs: '-0.4rem', sm: '-0.5rem', md: "-1rem"},
                textAlign: {xs: 'center', sm: 'unset'}
            }} variant="h2" fontWeight={900} component="div" fontFamily={josefin}>
                WEB DEVELOPER<br/>
            </Typography>    
            <Typography sx={{
                fontSize: {xs: '1.2rem', sm: '1rem', md: "1.5rem"},
                marginLeft: {sm: '0.5rem', md: "1rem"},
                textAlign: {xs: 'center', sm: 'unset'}
            }} variant="h5" fontWeight={300} component="div" fontFamily={josefin}>
                MYSELF
            </Typography>
        </Box>
    );
}