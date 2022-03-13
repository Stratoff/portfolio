import { Divider, Typography } from "@mui/material";

export default function Credits() {
    return (
        <>
            <Divider orientation='horizontal' sx={{position: 'absolute', top: 1, left:0, width: '100%', display: {sm: 'none'}}}>
                <Typography variant="caption" color={'#888f95'} fontFamily={"'Roboto Slab'"}>
                    Javier Garcia © {new Date().getFullYear()}
                </Typography>
            </Divider>
            <Divider orientation='vertical' sx={{display: {xs: 'none', sm: 'flex'}, position: 'fixed', left: 1, bottom: 4}}>
                <Typography variant="caption" fontFamily={"'Roboto Slab'"} sx={{writingMode: 'vertical-lr', transform: 'rotate(180deg)', transformOrigin: 'center'}}>
                    Javier Garcia © {new Date().getFullYear()}
                </Typography>
            </Divider>
        </>
);
}