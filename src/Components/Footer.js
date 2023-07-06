import { AlternateEmail, FacebookOutlined, Instagram, LocationOn, Phone, WhatsApp } from "@mui/icons-material";
import { IconButton, Link, Stack, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Stack
      sx={{
        background: "#1E1E1E",
        color: "#FFFFFF",
        alignItems: "center",
        p: "2rem",
      }}
      spacing={10}
    >
      <Stack
        display={"flex"}
        justifyContent={"space-around"}
        direction={"row"}
        spacing={'10rem'}
      >
        <Stack spacing={3}>
          <Typography variant="h5">Reach us</Typography>
          
          <Stack spacing={2}><Stack direction={"row"}spacing={2}>
                   <Phone/> <Link href="https://wa.me/9510941438?text="  sx={{color:"#FFFFFF", textDecoration:"none",cursor:"pointer" }}> +919510941438</Link>

          </Stack>
          <Stack direction={"row"}spacing={2}>
                   <AlternateEmail/> <Link href="mailto: jensikalathiya2@gmail.com" sx={{color:"#FFFFFF", textDecoration:"none",cursor:"pointer" }}> jensikalathiya2@gmail.com</Link>

          </Stack>
          <Stack direction={"row"}spacing={2}>
                   <LocationOn/> <Link href="https://goo.gl/maps/A6m9SRkVT8TSJDCd7" sx={{color:"#FFFFFF", textDecoration:"none",cursor:"pointer" }}> Surat,Gujrat,India</Link>

          </Stack>
            </Stack>
        </Stack>
        <Stack spacing={3}>
          <Typography variant="h5">Quick Links</Typography>
          <Typography>About Us</Typography>
          <Typography>Blog</Typography>
          <Typography>Contact Us</Typography>
          <Typography>Gallary</Typography>
          <Stack>
            
          </Stack>
        </Stack>
        <Stack spacing={3}>
          <Stack spacing={1.5}>
            <Typography variant="h5">Newsletter Subscribe</Typography>
            <Stack direction={"row"} alignItems={"center"}>
              <input
                placeholder="Enter Email"
                style={{
                  height: "1.7rem",
                  background: "rgba(217, 217, 217, 0.5)",
                  color: "white",
                  outline: "none",
                }}
              />
              <button
                style={{
                  height: "2rem",
                  background: "rgba(196, 122, 94, 0.71)",
                  color: "white",
                  border: "none",
                }}
              >
                Subscribe
              </button>
            </Stack>
          </Stack>
          <Stack>
            <Typography variant="h5">Follow Us</Typography>
            <Stack direction={"row"}  >
              <IconButton sx={{color:"#FFFFFF"}}>
                <Instagram />
              </IconButton>
              <IconButton sx={{color:"#FFFFFF"}}>
                <FacebookOutlined />
              </IconButton>
              <IconButton sx={{color:"#FFFFFF"}}>
                <WhatsApp />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack direction={"row"} spacing={1} alignItems={"center"}>
        <hr
          style={{ width: "45rem", background: "none", color:"rgba(217, 217, 217, 0.5)" }}
        />
        <Typography variant="h5">
          AIR<span>YOGA </span>
        </Typography>{" "}
        <hr
          style={{ width: "45rem", background: "rgba(217, 217, 217, 0.5)" }}
        />
      </Stack>
      <Stack>
        <Typography fontSize={14} color="#D9DBE1">
          © 2023 jensikalathiya UI Kit. All rights reserved
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Footer;
