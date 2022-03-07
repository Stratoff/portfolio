import { Box } from "@mui/material";
import RobotIMGWithComputer from '../assets/img/Saly-38.png'
import Calculator from '../assets/img/calculator-dynamic-color.png'
// import Computer from '../assets/img/computer-dynamic-color.png'
import Minecraft from '../assets/img/minecraft-dynamic-color.png'
import Puzzle from '../assets/img/puzzle-dynamic-color.png'
import Rocket from '../assets/img/rocket-dynamic-color.png'
import Sheild from '../assets/img/sheild-dynamic-color.png'

export default function BannerImage() {
    return (
        <Box position="relative" sx={{transform: {sm: 'translateX(5rem)', md: 'unset'}}}>
            <img alt="" className="floating-1" style={{maxWidth: '100%'}} src={RobotIMGWithComputer}/>
            <RandomImage style={{left: '5rem', top: '10rem'}} src={Calculator}/>
            <RandomImage style={{left: '8rem', bottom: '18rem'}} src={Sheild}/>
            <RandomImage style={{left: '10rem', bottom: '25rem'}} src={Minecraft}/>
            <RandomImage style={{right: '10rem', bottom: '20rem'}} src={Puzzle}/>
            <RandomImage style={{right: '5rem', top: '10rem' }} src={Rocket}/>
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