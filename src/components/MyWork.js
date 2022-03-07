import React, { useRef, useEffect, useState } from 'react';
import { Carousel } from 'react-motion-components';
import GoldenQS from '../assets/img/works/golden-qs.png';
import Ariatel from '../assets/img/works/ariatel.png';
import MOT from '../assets/img/works/mot.png';
import specterline from '../assets/img/works/specterline.png';
import TexasDiamondGarage from '../assets/img/works/texas-diamond.png';
import { Box, Grid, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const works = [
  {"img": GoldenQS, "year": 2019, "done": "I created the whole Front-End inspirated by a previous design made by the client and the Back-End in Wordpress and PHP"},
  {"img": Ariatel, "year": 2020, "done": "I have worked the last two years as a Full-Stack Developer using technologies like Python, Golang and React"},
  {"img": MOT, "year": 2022, "done": "I have made some features and the initial layout of the website (Only Front-End and PHP components)"},
  {"img": specterline, "year": 2020, "done": "I created some template views and components of the dashboard including the styling acording to the Brand Palette"},
  {"img": TexasDiamondGarage, "year": 2019, "done": "I created the whole Front-end inspirated by a previous design made by the client and some logics with PHP"}
];

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    let id = setInterval(() => {
      savedCallback.current();
    }, delay);
    return () => clearInterval(id);
  }, [delay]);
}

export default function MyWork () {
  const [index, setIndex] = useState(0);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('md'));
  
  useInterval(() => {
    setIndex(index + 1);
  }, 3000);

  const itemStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    margin: "0 auto"
  };

  return (
    <Box mt={10} mb={(isSmall ? -15 : 0)}>
        <Typography sx={{fontSize: {xs: '2rem', md: '3rem'}}} variant="h3" component={"h2"} marginBottom={4} textAlign={"center"} fontFamily={"'Roboto Slab'"} fontWeight={500}>
            MY WORK
        </Typography>
        <Grid container spacing={1} justifyContent="center">
          <Grid item sx={{width: 300, height: 300, transformOrigin: 'top', transform: (isSmall ? "scale(.6)" : "unset") }}>
              <Carousel
                width={300}
                height={300}
                direction="horizontal"
                effect="3d"
                index={index}
                onClick={() => {}}
                onChange={index => setIndex(index)}
              >
                {works.map((work, i) => {
                  return (
                    <Slider
                      width={300}
                      height={300}
                      itemStyle={itemStyle}
                      isSmall={isSmall}
                      key={`${i}--carousel-work`}
                      {...work}
                    />
                  );
                })}
              </Carousel>
          </Grid>
        </Grid>
      </Box>
  );
}

function Slider(props) {
  return (
    <div
      style={{
        width: props.width,
        height: props.height,
        ...props.itemStyle,
        backgroundColor: 'transparent',
        border: '1px solid #999',
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <img style={{maxWidth: 150}} src={props.img} alt=""/>
      <Typography px={3} textAlign={"center"} variant="caption" color="black"  fontFamily={"'Roboto Slab'"}>
        {props.isSmall ? null : props.done}
        <Typography textAlign={"center"} fontFamily={"'Roboto Slab'"} color="text.secondary">
          - {props.year} -
        </Typography>
      </Typography>
    </div>
  );
}