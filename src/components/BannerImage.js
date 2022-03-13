import { Box } from "@mui/material";
import RobotIMGWithComputer from '../assets/img/Saly-38.webp'
import RobotMeditating from '../assets/img/Saly-39.webp'
import Calculator from '../assets/img/calculator-dynamic-color-150.png'
import Minecraft from '../assets/img/minecraft-dynamic-color-150.png'
import Puzzle from '../assets/img/puzzle-dynamic-color-150.png'
import Rocket from '../assets/img/rocket-dynamic-color-150.png'
import Sheild from '../assets/img/sheild-dynamic-color-150.png'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function BannerImage() {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));  
    const isMedium = useMediaQuery(theme.breakpoints.down('md'));    

    if (isSmall) {
        return (
            <Box position="relative" overflow={"hidden"}>
                <img alt="" className="floating-1" style={{maxWidth: '100%'}} src={RobotMeditating}/>
                <RandomImage style={{width: '3.2rem', left: 40, top: 40}} src={Calculator}/>
                <RandomImage style={{width: '3.2rem', left: 60, bottom: 100}} src={Minecraft}/>
                <RandomImage style={{width: '3.2rem', right: 70, bottom: 60}} src={Puzzle}/>
                <RandomImage style={{width: '3.2rem', right: 40, top: 60 }} src={Rocket}/>
            </Box>
        )
    };
    
    if (isMedium) {
        return (
        <Box position="relative" overflow={"hidden"}>
            <img alt="" className="floating-1" style={{maxWidth: '100%'}} src={RobotIMGWithComputer}/>
            <RandomImage style={{width: '4.2rem', left: '12%', top: '26%'}} src={Calculator}/>
            <RandomImage style={{width: '4.2rem', left: '15%', bottom: '20%'}} src={Sheild}/>
            <RandomImage style={{width: '4.2rem', left: '20%', bottom: '40%'}} src={Minecraft}/>
            <RandomImage style={{width: '4.2rem', right: '20%', bottom: '40%'}} src={Puzzle}/>
            <RandomImage style={{width: '4.2rem', right: '12%', top: '20%'}} src={Rocket}/>
        </Box>
        )
    };

    return (
        <Box position="relative" sx={{transform: {sm: 'translateX(5rem)', md: 'unset'}}} overflow={"hidden"}>
            <img alt="" className="floating-1" style={{maxWidth: '100%'}} src={RobotIMGWithComputer}/>
            <RandomImage style={{left: '11%', top: '21%'}} src={Calculator}/>
            <RandomImage style={{left: '18%', bottom: '38%'}} src={Sheild}/>
            <RandomImage style={{left: '22%', bottom: '55%'}} src={Minecraft}/>
            <RandomImage style={{right: '21%', bottom: '43%'}} src={Puzzle}/>
            <RandomImage style={{right: '11%', top: '17%' }} src={Rocket}/>
        </Box>
    );
}


const RandomImage = ({src, style}) => {
    return (
        <img alt="" className="floating floating-small-img"  style={
            {
                maxWidth: '5rem', position: 'absolute',
                ...style
            }
        } src={src}/>
    );
}