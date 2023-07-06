import { Stack, Typography } from "@mui/material";
import React from "react";
import Smile from "../assets/Image/smile.png";
import user from "../assets/Image/user.png";
import flower from "../assets/Image/flower.png";
import CountUp from 'react-countup';

function Happy() {
  return (
    <Stack
      direction={"row"}
      spacing={2}
      alignItems={"center"}
      justifyContent={"center"}
      mt={3}
      textAlign={"center"}
      color={"rgba(81, 49, 37, 0.7)"}
    ><Stack position={'relative'}height={"28rem"}>
      <Stack position={"absolute"} top={"6rem"} right={"20rem"}>
        <img src={Smile} alt="Happy client" />
        <Typography variant="h2"><CountUp end={950} duration={5}/>+</Typography>
        <Typography variant="body3" fontSize={20}>
          Happy Clients
        </Typography>
      </Stack>
      <Stack position={"absolute"} top={20}>
        {" "}
        <img src={flower} alt="Years Experience" />
        <Typography variant="h2"><CountUp end={12} duration={5}/>+</Typography>
        <Typography variant="body3" fontSize={20}>
          Years Experience
        </Typography>
      </Stack>
      <Stack position={"absolute"} top={"6rem"} left={"20rem"}>
        {" "}
        <img src={user} alt="Expert Trainers" />
        <Typography variant="h2"><CountUp end={125} duration={5}/>+</Typography>
        <Typography variant="body3" fontSize={20}>
          Expert Trainers
        </Typography>
      </Stack>
    </Stack>
      
    </Stack>
  );
}

export default Happy;
