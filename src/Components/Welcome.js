import React from "react";
import welcomebg from "../assets/Image/welcombg.png";
import { Button, Stack, Typography } from "@mui/material";

const Welcome = () => {
  return (
    <>
      <Stack mt={2} position={"relative"} >
        <img src={welcomebg} alt="Welcome Post" width={"100%"} />
        <Stack position={"absolute"} top={"8rem"} left={"8rem"} spacing={3}>

         
        <Typography
          variant="h5"
          sx={{
            color: "#C47A5E",
            fontFamily: "Inter",
            textTransform: "uppercase",
            fontWeight: "600",
          }}
        >
          Welcome To airyoga
        </Typography>
        <Typography
          variant="h1"
          sx={{
            color: "#513125",
            fontFamily: "Cormorant Garamond",
            textTransform: "uppercase",
          }}
        >
          <span style={{ color: "#C47A5E" }}>Better Life</span> With <br />
          Perfect Body
        </Typography>
        <Typography
          variant="body"
          sx={{
            color: "#7B7B7B",
            fontFamily: "Inter",
            textTransform: "uppercase",
            fontWeight: "400",
            fontSize: "20",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          <br />
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </Typography>
        <Stack direction={"row"} spacing={2}>
          <Button
            className="Button-Fill"
            sx={{
              color: "white",
              background: "#C47A5E",
              border: "none",
              "&:hover": { border: "1px solid #513125", color: "#513125" },
            }}
          >
            Learn More
          </Button>
        </Stack>
         
        </Stack>
      </Stack>
    </>
  );
};

export default Welcome;
