import React from "react";
import { Stack, Typography } from "@mui/material";
import Banner from "../assets/Image/banner.png";
import Carasol from "./Carasol/Carasol";

const Courses = () => {
  return (
    <>
      <Stack position={"relative"} alignItems={"center"}>
        <img src={Banner} alt="Welcome Post" width={'100%'} height={650}/>
        <Stack position={"absolute"} mt={3} >
         
            <Typography
            variant="h3"
            sx={{
              color: "white",
              fontFamily: "Cormorant Garamond",
              fontWeight: 300,
              textTransform: "uppercase",
              fontSize: 48,
            }}
          >
            Offering courses
          </Typography>
        </Stack>
        <Stack position={"absolute"} top={"6.5rem"}>
          <Carasol/>
        </Stack>
      </Stack>
    </>
  );
};

export default Courses;
