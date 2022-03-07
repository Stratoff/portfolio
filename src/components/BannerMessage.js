import { Typography } from "@mui/material";

export default function BannerMessage () {
    // const roboto = "'Roboto Slab'";
    const josefin = "'Josefin Sans'";
    return (
        <div>
            <Typography sx={{
                fontSize: {xs: '1.4rem', md: " 2.125rem"}
            }} variant="h4" component="div" fontWeight={300} fontFamily={josefin}>
                I'm something of a<br/>
            </Typography>           
            <Typography sx={{
                fontSize: {xs: '2rem', md: "3.75rem"},
                marginTop: {xs: '-0.1rem', md: "-0.6rem"},
                marginBottom: {xs: '-0.5rem', md: "-1rem"},
            }} variant="h2" fontWeight={900} component="div" fontFamily={josefin}>
                WEB DEVELOPER<br/>
            </Typography>    
            <Typography sx={{
                fontSize: {xs: '1rem', md: "1.5rem"},
                marginLeft: {xs: '0.5rem', md: "1rem"}
            }} variant="h5" fontWeight={300} component="div" fontFamily={josefin}>
                MYSELF
            </Typography>
        </div>
    );
}