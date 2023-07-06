import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import BackGround from "../assets/Image/bgimg.jpg";
import Banner from "../assets/Image/banner.png";

function Become() {
  return (
    <Stack>
      <Stack position={"relative"} alignItems={'center'}  justifyContent={'center'}>
        <img src={BackGround} alt="backGround" height={650} width={"100%"} style={{backgroundSize:"cover"}} />
        <Stack position={'absolute'}  alignItems={"center"} justifyContent={"center"}>
        <img src={Banner} alt="backGround" height={550} width={1300}/>
        <Stack color={"white"} alignItems={"center"} spacing={2} position={'absolute'}>
          <Typography variant="h2" >
          Become a Member
          </Typography>
          <Typography variant="body2" width={"30rem"} textAlign={"center"}>
          Quisque maximus lacus sem, vitae maximus tortor venenatis in. Ut porttitor velit nec nibh dignissim venenatis. Vestibulum non ex id dolor commodo vestibulum. Nulla dignissim quam et augue consectetur porttitor.
          </Typography>
          <Button sx={{color:"black", background:"white", width:"8rem"}}>Join Us+</Button>
        </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Become;
