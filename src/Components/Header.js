import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import header from "../assets/Image/header.png";

const Header = () => {
  return (
    <Stack direction={"row"} >
      {/* Left Side */}
      <Stack m={"6rem 4rem 0rem "} direction={"column"} spacing={4} >
        <Stack direction={"column"} spacing={2}>
          <Typography
            sx={{
              fontSize: 24,
              color: "#C47A5E",
              fontFamily: "Inter",
              textTransform: "uppercase",
              fontWeight:"600",
            }}
          >
            Airyoga
          </Typography>
          <Typography
          variant="h1"
            sx={{
              color: "#513125",
              fontFamily: "Cormorant Garamond",
              textTransform: "uppercase",
            }}
          >
            Bend your mind, inspire yourself
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut elit
            <br />
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </Typography>
        </Stack>

        <Stack direction={"row"} spacing={2}>
          <Button
            className="Button-Fill"
            sx={{ color: "white", background: "#C47A5E", border: "none",
        "&:hover" : {border: "1px solid #513125", color: "#513125"} }}
            
          >
            Learn More
          </Button>
          <Button
            className="Button-Outline"
            sx={{ border: "1px solid #513125", color: "#513125",
            "&:hover" : {color: "white", background: "#C47A5E", border: "none"}  }}
          >
            Contact Us
          </Button>
        </Stack>
      </Stack>

      {/* Right Side */}
      <Stack width={"40%"}>
        <img src={header} alt="Header" />
      </Stack>
    </Stack>
  );
};

export default Header;
