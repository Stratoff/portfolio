import { Typography, Box, Grid, Tooltip } from "@mui/material";
import DevIcon from "devicon-react-svg";

const aboutCloser = {
    borderRadius: "10px",
    background: "#ECF0F3",
    boxShadow:  " 5px 5px 10px #c9cccf, -5px -5px 10px #ffffff",
    width: 'fit-content'
};

const skills = [
    {"icon": "javascript", style: {fill: "black"}, "verbose": "JavaScript"},
    {"icon": "html5", style: {fill: "#E44D26"}, "verbose": "HTML 5"},
    {"icon": "css3", style: {fill: "#1572B6"}, "verbose": "CSS 3"},
    {"icon": "react", style: {fill: "#61DAFB"}, "verbose": "React"},
    {"icon": "jquery", style: {fill: "#0868AC"}, "verbose": "JQuery"},
    {"icon": "bootstrap", style: {fill: "#5B4282"}, "verbose": "Bootstrap 4 and 3"},
    {"icon": "python", style: {fill: "#386f9f"}, "verbose": "Python"},
    {"icon": "django", style: {fill: "#003A2B"}, "verbose": "Django"},
    {"icon": "linux", style: {fill: "black"}, "verbose": "Linux Server management"},
    {"icon": "docker", style: {fill: "#019BC6"}, "verbose": "Docker"},
    {"icon": "postgresql", style: {fill: "#336791", fillRule:"evenodd", clipRule: "evenodd"}, "verbose": "PostgreSQL"},
    {"icon": "mysql", style: {fill: "#00618A"}, "verbose": "MySQL"},
    {"icon": "git", style: {fill: "#F34F29"}, "verbose": "GIT"},
    {"icon": "wordpress", style: {fill: "#494949"}, "verbose": "WordPress"},
    {"icon": "mongodb", style: {fill: "#4FAA41"}, "verbose": "MongoDB"},
    {"icon": "php", style: {fill: "#6181B6"}, "verbose": "PHP"},
    {"icon": "redis", style: {fill: "#A41E11"}, "verbose": "Redis"}
];


export default function Skills() {
    return (
        <Box mt={8}>
            <Typography sx={{fontSize: {xs: '2rem', md: '3rem'}}} variant="h3" component={"h2"} marginBottom={4} textAlign={"center"} fontFamily={"'Roboto Slab'"} fontWeight={500}>
                STACK
            </Typography>
            <Grid container spacing={3} sx={{px: {xs: 'none', md: '20%'}}} justifyContent="center">
                {skills.map((skill, i) => (
                    <Grid item key={`skill--${i}`}>
                        <Tooltip title={skill.verbose}>
                            <Box sx={{...aboutCloser, width: 50, height: 50, p: 1}}>
                                <DevIcon style={skill.style} icon={skill.icon}/>
                            </Box>
                        </Tooltip>
                    </Grid>
                ))}
                <Grid item>
                    <Tooltip title={"C++"}>
                        <Box sx={{...aboutCloser, width: 50, height: 50, p: 1}}>
                            <svg viewBox="0 0 128 128">
                                <path d="M87 70v-5h5v-4h-5v-5h-5v5h-5v4h5v5zm18-14h-4v5h-6v4h6v5h4v-5h5v-4h-5zm11.5-23.7c-.6-1.1-1.4-2.1-2.3-2.6L66.1 1.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7L11.4 29.7c-1.7 1-3.4 3.5-3.4 5.4v55.7c0 1.1.7 2.3 1.4 3.4l.1.1c.5.8 1.3 1.5 2 1.9l48.3 27.9c.8.5 2 .7 3.2.7 1.2 0 2.3-.3 3.1-.7l47.5-27.9c1.7-1 2.4-3.5 2.4-5.4V35.1c0-.8.4-1.8 0-2.6l.5-.2zm-4.2 2.1c0 .3-.3.5-.3.7v55.7c0 .8-.2 1.7-.4 2L64 120.6c-.1.1-.5.2-1.1.2-.6 0-1-.1-1.1-.2L13.6 92.8s-.1-.1-.2-.1l-.6-.6c-.4-.7.2-1.1-.8-1.2V35.2c1-.5.9-1.7 1.4-1.9L61.7 5.4c.1 0 .6-.2 1.2-.2s1 .1 1.1.2l48 27.7.4.9c.1.1-.1.3-.1.4zM63 87.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6C80.1 82.5 72.1 87.5 63 87.5z" fill="#9C033A"></path>
                            </svg>
                        </Box>
                    </Tooltip>
                </Grid>

                <Grid item>
                    <Tooltip title={"LUA"}>
                        <Box sx={{...aboutCloser, width: 50, height: 50, p: 1}}>
                            <svg viewBox="0 0 128 128">
                                <path fill="navy" d="M127.3 15.1c0-7.9-6.4-14.3-14.3-14.3S98.6 7.1 98.6 15.1 105 29.4 113 29.4s14.3-6.4 14.3-14.3"></path><path fill="navy" d="M64 15.1c-27 0-49 21.9-49 49s21.9 49 49 49 49-21.9 49-49-22-49-49-49zm6 28.6c0-7.9 6.4-14.3 14.3-14.3s14.3 6.4 14.3 14.3S92.2 58 84.3 58 70 51.6 70 43.7z"></path><path fill="gray" d="M66.3 128l-.1-1.5c1.8-.1 3.6-.2 5.4-.4l.2 1.5c-1.8.2-3.7.3-5.5.4zm-5.6 0c-1.9-.1-3.7-.3-5.6-.5l.2-1.5c1.8.2 3.6.4 5.4.5v1.5zm16.6-1.4l-.3-1.4c1.8-.4 3.5-.8 5.3-1.4l.4 1.4c-1.7.6-3.5 1.1-5.4 1.4zm-27.7-.2c-1.8-.4-3.6-.9-5.4-1.5l.5-1.4c1.7.6 3.5 1 5.3 1.5l-.4 1.4zm38.4-3l-.6-1.4c1.7-.7 3.3-1.4 5-2.3l.7 1.3c-1.7.9-3.4 1.7-5.1 2.4zm-49-.4c-1.7-.7-3.4-1.5-5-2.4l.7-1.3c1.6.9 3.3 1.6 4.9 2.4L39 123zm59-4.7l-.8-1.2c1.5-1 3-2 4.5-3.1l.9 1.2c-1.5 1.1-3.1 2.1-4.6 3.1zm-68.8-.6c-1.6-1-3.1-2.1-4.5-3.2l.9-1.2c1.4 1.1 2.9 2.2 4.4 3.2l-.8 1.2zm77.7-6.1l-1-1.1c1.3-1.2 2.7-2.5 3.9-3.8l1.1 1c-1.3 1.3-2.7 2.6-4 3.9zm-86.5-.7c-1.4-1.3-2.7-2.6-3.9-4l1.1-1c1.2 1.3 2.5 2.7 3.8 3.9l-1 1.1zm94.1-7.5l-1.2-.9c1.1-1.4 2.2-2.9 3.2-4.4l1.2.8c-1 1.5-2.1 3.1-3.2 4.5zm-101.6-.8c-1.1-1.5-2.2-3-3.2-4.6l1.2-.8c1 1.5 2 3 3.1 4.5l-1.1.9zm107.7-8.5l-1.3-.7c.9-1.6 1.6-3.3 2.4-4.9l1.3.5-2.4 5.1zM7 93.1c-.8-1.7-1.6-3.4-2.3-5.1l1.3-.5c.7 1.7 1.4 3.3 2.3 5l-1.3.6zm117.9-9.3l-1.4-.5c.6-1.7 1-3.5 1.5-5.3l1.4.3c-.4 1.9-.9 3.7-1.5 5.5zm-122.1-1c-.5-1.8-1-3.6-1.4-5.4l1.4-.3c.4 1.8.8 3.5 1.4 5.3l-1.4.4zm124.6-9.9l-1.5-.2c.2-1.8.4-3.6.5-5.4l1.5.1c0 1.8-.2 3.7-.5 5.5zM.5 71.9C.2 70 .1 68.2 0 66.3l1.5-.1c.1 1.8.2 3.6.4 5.4l-1.4.3zm126-10.1c-.1-1.8-.2-3.6-.4-5.4l1.5-.2c.2 1.8.4 3.7.4 5.6h-1.5zm-125-1L0 60.7c.1-1.9.3-3.7.5-5.6l1.5.3c-.2 1.8-.4 3.6-.5 5.4zM125.2 51c-.4-1.8-.8-3.6-1.4-5.3l1.4-.4c.5 1.8 1 3.6 1.4 5.4l-1.4.3zM3 50l-1.4-.3c.4-1.8.9-3.6 1.5-5.4l1.4.5C3.9 46.5 3.4 48.2 3 50zm119-9.4c-.7-1.7-1.4-3.4-2.3-5l1.3-.7c.8 1.7 1.6 3.4 2.3 5.1l-1.3.6zm-115.6-1L5 39.1c.7-1.7 1.5-3.4 2.4-5l1.3.7c-.8 1.5-1.6 3.2-2.3 4.8zm5.1-9.6l-1.2-.8c1-1.6 2.1-3.1 3.2-4.5l1.2.9c-1.2 1.4-2.2 2.9-3.2 4.4zm6.7-8.6l-1.1-1c1.3-1.4 2.6-2.7 4-3.9l1 1.1c-1.4 1.2-2.7 2.5-3.9 3.8zm8.1-7.3l-.9-1.2c1.5-1.1 3-2.2 4.6-3.2l.8 1.2c-1.6 1.1-3.1 2.1-4.5 3.2zm67-5.4c-1.6-.8-3.3-1.6-4.9-2.3l.5-1.4c1.7.7 3.4 1.5 5 2.4l-.6 1.3zm-57.8-.4L34.8 7c1.7-.8 3.4-1.6 5.1-2.3l.6 1.3c-1.7.7-3.4 1.5-5 2.3zm47.7-3.8c-1.7-.6-3.5-1-5.3-1.4l.3-1.4c1.8.4 3.6.9 5.4 1.5l-.4 1.3zm-37.6-.3l-.4-1.4c1.8-.5 3.6-1 5.4-1.4l.3 1.4c-1.8.4-3.6.9-5.3 1.4zm27-2.2c-1.8-.2-3.6-.4-5.4-.5l.1-1.5c1.9.1 3.7.3 5.6.5L72.6 2zm-16.3-.1L56.1.4c1.8-.2 3.7-.4 5.6-.4l.1 1.5c-1.9 0-3.7.2-5.5.4z"></path>
                            </svg>
                        </Box>
                    </Tooltip>
                </Grid>

                <Grid item>
                    <Tooltip title={"GO Language"}>
                        <Box sx={{...aboutCloser, width: 50, height: 50, p: 1}}>
                            <svg viewBox="0 0 128 128">
                                <g fill="#00acd7" fillRule="evenodd"><path d="M11.156 54.829c-.243 0-.303-.122-.182-.303l1.273-1.637c.12-.182.424-.303.666-.303H34.55c.243 0 .303.182.182.364l-1.03 1.576c-.121.181-.424.363-.606.363zM2.004 60.404c-.242 0-.303-.12-.182-.303l1.273-1.636c.121-.182.424-.303.667-.303h27.636c.242 0 .364.182.303.364l-.485 1.454c-.06.243-.303.364-.545.364zM16.67 65.98c-.242 0-.302-.182-.181-.364l.848-1.515c.122-.182.364-.363.607-.363h12.12c.243 0 .364.181.364.424l-.12 1.454c0 .243-.243.425-.425.425zM79.58 53.738c-3.819.97-6.425 1.697-10.182 2.666-.91.243-.97.303-1.758-.606-.909-1.03-1.576-1.697-2.848-2.303-3.819-1.878-7.516-1.333-10.97.91-4.121 2.666-6.242 6.605-6.182 11.514.06 4.849 3.394 8.849 8.182 9.516 4.121.545 7.576-.91 10.303-4 .545-.667 1.03-1.394 1.636-2.243H56.064c-1.272 0-1.575-.788-1.151-1.818.788-1.879 2.242-5.03 3.09-6.606.183-.364.607-.97 1.516-.97h22.06c-.12 1.637-.12 3.273-.363 4.91-.667 4.363-2.303 8.363-4.97 11.878-4.364 5.758-10.06 9.333-17.273 10.303-5.939.788-11.454-.364-16.302-4-4.485-3.394-7.03-7.879-7.697-13.454-.788-6.606 1.151-12.546 5.151-17.758 4.303-5.636 10-9.212 16.97-10.485 5.697-1.03 11.151-.363 16.06 2.97 3.212 2.121 5.515 5.03 7.03 8.545.364.546.122.849-.606 1.03z"></path><path d="M99.64 87.253c-5.515-.122-10.546-1.697-14.788-5.334-3.576-3.09-5.818-7.03-6.545-11.697-1.091-6.848.787-12.909 4.909-18.302 4.424-5.819 9.757-8.849 16.97-10.122 6.181-1.09 12-.484 17.272 3.091 4.788 3.273 7.757 7.697 8.545 13.515 1.03 8.182-1.333 14.849-6.97 20.546-4 4.06-8.909 6.606-14.545 7.757-1.636.303-3.273.364-4.848.546zm14.424-24.485c-.06-.788-.06-1.394-.182-2-1.09-6-6.606-9.394-12.363-8.06-5.637 1.272-9.273 4.848-10.606 10.545-1.091 4.727 1.212 9.515 5.575 11.454 3.334 1.455 6.667 1.273 9.879-.363 4.788-2.485 7.394-6.364 7.697-11.576z" fillRule="nonzero"></path></g>
                            </svg>
                        </Box>
                    </Tooltip>
                </Grid>

                <Grid item>
                    <Tooltip title={"RethinkDB"}>
                        <Box sx={{...aboutCloser, width: 50, height: 50, p: 1}} display={"inline-flex"} alignItems={"center"}>
                            <svg width={50} viewBox="0 0 512 82">
                                <path fill="#204956" d="M0 78.994v-5.295c0-1.081.54-1.621 1.62-1.621h5.62V15.885H1.62c-1.08 0-1.62-.54-1.62-1.62V8.86c0-1.08.54-1.62 1.62-1.62 9.222-.433 16.895-.65 23.018-.65 18.731 0 28.096 6.7 28.096 20.1 0 4.683-1.188 8.808-3.566 12.374-2.377 3.566-5.547 6.285-9.51 8.158l12.644 24.855h6.7c1.08 0 1.621.54 1.621 1.62v5.296c0 1.08-.54 1.62-1.62 1.62H44.737c-1.08 0-1.873-.468-2.378-1.404L27.664 50.14h-2.161c-2.306 0-4.359-.108-6.16-.324v22.26h6.808c1.08 0 1.621.541 1.621 1.622v5.295c0 1.08-.54 1.62-1.62 1.62H1.62c-1.08 0-1.621-.54-1.621-1.62zM19.343 15.56v26.043c.577.072 1.405.108 2.486.108 5.835 0 10.374-1.153 13.615-3.458 3.242-2.305 4.863-5.763 4.863-10.374 0-8.213-5.69-12.319-17.074-12.319h-3.89zm71.538 66.35c-8.573 0-14.859-2.503-18.857-7.51-3.999-5.007-5.998-11.635-5.998-19.883 0-8.25 2.125-15.075 6.376-20.478 4.25-5.403 10.374-8.105 18.37-8.105 3.963 0 7.367.738 10.212 2.215 2.846 1.477 5.025 3.476 6.538 5.998 2.882 4.899 4.323 10.554 4.323 16.966 0 3.025-.144 4.682-.433 4.97-.288.289-.828.433-1.62.433h-31.77c.36 5.187 1.638 9.203 3.835 12.049 2.198 2.845 5.998 4.268 11.4 4.268 3.963 0 8.034-.936 12.212-2.81 1.009-.504 1.729-.216 2.161.865l2.053 4.97c.36.865.036 1.586-.972 2.162-4.755 2.594-10.698 3.89-17.83 3.89zm-12.86-33.39h22.477c.144-9.006-3.386-13.509-10.59-13.509-4.25 0-7.258 1.351-9.023 4.053-1.765 2.701-2.72 5.853-2.864 9.455zm58.57-12.536v27.232c0 3.386.432 5.835 1.297 7.348.864 1.513 2.485 2.27 4.863 2.27 2.377 0 4.682-.505 6.916-1.514.792-.288 1.368 0 1.729.865l1.945 4.97c.072.217.108.523.108.92 0 .395-.36.81-1.08 1.242-3.459 1.729-7.565 2.593-12.32 2.593-6.412 0-10.626-1.657-12.643-4.97-1.441-2.162-2.27-4.251-2.486-6.268a82.652 82.652 0 0 1-.432-8.645V35.985h-6.16c-1.08 0-1.62-.54-1.62-1.621v-5.62c0-1.08.54-1.62 1.62-1.62h6.16V12.535c0-1.08.54-1.62 1.62-1.62h8.862c1.08 0 1.621.54 1.621 1.62v14.589h10.914c1.08 0 1.621.54 1.621 1.62v5.62c0 1.08-.54 1.62-1.62 1.62H136.59zM157.123 7.24V1.62c0-1.08.54-1.62 1.62-1.62h16.318c1.08 0 1.621.54 1.621 1.62v33.284c4.034-5.98 9.618-8.969 16.75-8.969 11.166 0 16.75 6.123 16.75 18.37v27.773h6.375c1.08 0 1.621.54 1.621 1.62v5.296c0 1.08-.54 1.62-1.62 1.62h-23.666c-1.081 0-1.621-.54-1.621-1.62v-5.295c0-1.081.54-1.621 1.62-1.621h5.188v-22.37c0-4.538-.577-7.852-1.73-9.941-1.152-2.09-3.53-3.134-7.132-3.134s-6.591 1.08-8.969 3.242c-2.377 2.161-3.566 4.61-3.566 7.348v24.855h6.592c1.08 0 1.62.54 1.62 1.62v5.296c0 1.08-.54 1.62-1.62 1.62h-24.53c-1.08 0-1.621-.54-1.621-1.62v-5.295c0-1.081.54-1.621 1.62-1.621h5.836V8.86h-5.835c-1.08 0-1.621-.54-1.621-1.62zm84.829 64.838h6.808c1.08 0 1.62.54 1.62 1.62v5.296c0 1.08-.54 1.62-1.62 1.62h-25.72c-1.08 0-1.62-.54-1.62-1.62v-5.295c0-1.081.54-1.621 1.62-1.621h6.809V35.985h-5.835c-1.081 0-1.621-.54-1.621-1.621v-5.62c0-1.08.54-1.62 1.62-1.62h16.318c1.08 0 1.62.54 1.62 1.62v43.334zm-15.129-60.083c0-2.233.703-4.088 2.107-5.565 1.405-1.477 3.278-2.216 5.62-2.216 2.341 0 4.214.739 5.619 2.216 1.405 1.477 2.107 3.332 2.107 5.565 0 2.233-.72 4.07-2.161 5.511-1.441 1.441-3.332 2.161-5.673 2.161-2.342 0-4.197-.72-5.566-2.16-1.368-1.442-2.053-3.279-2.053-5.512zm27.34 22.477v-5.727c0-1.081.54-1.621 1.62-1.621h14.697c.937 0 1.513.54 1.73 1.62l.972 6.268c4.034-6.051 9.798-9.077 17.29-9.077 11.166 0 16.75 6.123 16.75 18.37v27.773h6.267c1.08 0 1.621.54 1.621 1.62v5.296c0 1.08-.54 1.62-1.62 1.62h-23.558c-1.081 0-1.621-.54-1.621-1.62v-5.295c0-1.081.54-1.621 1.62-1.621h5.188v-22.37c0-4.538-.577-7.852-1.73-9.941-1.152-2.09-3.53-3.134-7.132-3.134s-6.591 1.08-8.969 3.242c-2.377 2.161-3.566 4.61-3.566 7.348v24.855h6.7c1.08 0 1.621.54 1.621 1.62v5.296c0 1.08-.54 1.62-1.62 1.62h-24.531c-1.08 0-1.621-.54-1.621-1.62v-5.295c0-1.081.54-1.621 1.62-1.621h5.728V35.985h-5.835c-1.08 0-1.621-.504-1.621-1.513zM338.992 1.62v43.117h5.511l16.75-16.426c.792-.792 1.729-1.188 2.81-1.188h8.428c1.081 0 1.621.54 1.621 1.62v5.62c0 1.08-.54 1.62-1.62 1.62H365.9l-11.887 11.563 14.804 24.53h6.376c1.08 0 1.62.541 1.62 1.622v5.295c0 1.08-.54 1.62-1.62 1.62h-13.94c-1.009 0-1.837-.468-2.486-1.404l-16.209-26.151h-3.566v19.019h5.727c1.08 0 1.621.54 1.621 1.62v5.296c0 1.08-.54 1.62-1.62 1.62h-23.558c-1.081 0-1.621-.54-1.621-1.62v-5.295c0-1.081.54-1.621 1.62-1.621h5.728V8.753h-5.835c-1.081 0-1.621-.54-1.621-1.62V1.62c0-1.08.54-1.621 1.62-1.621h16.318c1.08 0 1.621.54 1.621 1.62zm44.846 5.62c9.221-.433 16.065-.65 20.532-.65 4.466 0 7.798.09 9.996.271 2.197.18 4.7.558 7.51 1.135 2.81.576 5.313 1.35 7.51 2.323 2.198.973 4.413 2.36 6.646 4.16a25.814 25.814 0 0 1 5.62 6.268c3.313 5.475 4.97 12.535 4.97 21.18 0 13.04-3.602 22.747-10.806 29.123-7.204 6.376-17.038 9.564-29.501 9.564h-22.477c-1.08 0-1.621-.54-1.621-1.621v-5.295c0-1.081.54-1.621 1.62-1.621h5.62V15.993h-5.62c-1.08 0-1.62-.54-1.62-1.62V8.86c0-1.08.54-1.62 1.62-1.62zm43.279 57.164c4.358-5.187 6.538-12.283 6.538-21.288s-2.035-15.85-6.106-20.532c-4.07-4.683-10.428-7.024-19.073-7.024h-6.916v56.625h7.132c7.925 0 14.066-2.594 18.425-7.78zm28.366 14.589v-5.295c0-1.081.54-1.621 1.621-1.621h5.728V15.993h-5.62c-1.08 0-1.62-.54-1.62-1.62V8.86c0-1.153.54-1.729 1.62-1.729 8.645-.36 16.858-.54 24.639-.54 7.78 0 13.994 1.495 18.64 4.484 4.647 2.99 6.97 7.259 6.97 12.806 0 4.034-1.242 7.546-3.728 10.536-2.485 2.99-5.42 5.169-8.807 6.538 5.547.864 9.78 2.917 12.697 6.16 2.918 3.241 4.377 7.203 4.377 11.886 0 6.124-2.27 11.076-6.808 14.859-4.539 3.782-10.554 5.925-18.046 6.43-3.098.216-8.069.324-14.913.324h-15.129c-1.08 0-1.62-.54-1.62-1.621zm19.452-32.42v25.72h4.862c6.34 0 11.257-1.009 14.75-3.026 3.495-2.017 5.242-5.511 5.242-10.482 0-8.14-5.691-12.211-17.074-12.211h-7.78zm0-31.23v22.262h4.106c10.662 0 15.993-3.71 15.993-11.13 0-4.18-1.297-7.079-3.89-8.7-2.594-1.62-6.304-2.431-11.13-2.431h-5.08z"/>
                            </svg>
                        </Box>
                    </Tooltip>
                </Grid>

                <Grid item>
                    <Tooltip title={"Material UI"}>
                        <Box sx={{...aboutCloser, width: 50, height: 50, p: 1}} display={"inline-flex"} alignItems={"center"}>
                            <svg width={128} viewBox="0 0 128 128">
                                <g>
                                    <path fill="#1FA6CA" d="M.2 68.6V13.4L48 41v18.4L16.1 41v36.8L.2 68.6z"></path><path fill="#1C7FB6" d="M48 41l47.9-27.6v55.3L64 87l-16-9.2 32-18.4V41L48 59.4V41z"></path><path fill="#1FA6CA" d="M48 77.8v18.4l32 18.4V96.2L48 77.8z"></path><path fill="#1C7FB6" d="M80 114.6L127.8 87V50.2l-16 9.2v18.4L80 96.2v18.4zM111.9 41V22.6l16-9.2v18.4l-16 9.2z"></path>
                                </g>
                            </svg>
                        </Box>
                    </Tooltip>
                </Grid>                                    
            </Grid>
        </Box>
   );
}