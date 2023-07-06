import { Box, Link, Stack, Typography } from "@mui/material";
import About from "../assets/Image/about.jpeg";
import React from "react";

const Choose = () => {
  return (
    <Stack mt={2}>
      {/* Top Panel */}
      <Stack
        m={"1rem 4rem"}
        direction={"row"}
        justifyContent={"center"}
        spacing={4}
      >
        <Stack>
          <Box width={503} height={421}>
            <img src={About} alt="About" width={"100%"} height={"100%"} />
          </Box>
        </Stack>

        <Stack spacing={3} top={"4rem"} position={"relative"}>
          <Stack spacing={2}>
            <Typography
              variant="heading"
              sx={{
                color: "#C47A5E",
                fontFamily: "Inter",
                textTransform: "uppercase",
                fontWeight: "400",
              }}
            >
              Why Choose Us
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: "#513125",
                fontFamily: "Cormorant Garamond",
                textTransform: "uppercase",
                fontWeight: "400",
              }}
            >
              It's all yoga, all the time
            </Typography>
          </Stack>
          <Box width={524} height={260} bgcolor={"#C47A5E"}>
            <Stack m={3} spacing={2}>
              <Typography
                variant="h5"
                textTransform={"uppercase"}
                sx={{
                  fontWeight: 500,
                  fontSize: 36,
                  color: "#FFFFFF",
                }}
              >
                Comfort Palce
              </Typography>
              <Typography
                variant="body3"
                textTransform={"uppercase"}
                sx={{
                  fontWeight: 200,
                  fontSize: 20,
                  textAlign: "justify",
                  color: "#D9D9D9",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </Typography>
              <Link
                variant="body3"
                textTransform={"uppercase"}
                sx={{
                  cursor: "pointer",
                  fontWeight: 200,
                  fontSize: 20,
                  textAlign: "justify",
                  color: "#FFFFFF",
                  textDecorationColor: "#FFFFFF",
                }}
              >
                Join US +
              </Link>
            </Stack>
          </Box>
        </Stack>
      </Stack>

      {/* Second Panel */}
      <Stack  m={"1rem 4rem"}
        direction={"row"}
        justifyContent={"center"}
        spacing={4}>
        <Stack>
          <Box width={518} height={280} bgcolor={"#513125"}>
            <Stack m={3} spacing={2}>
              <Typography
                variant="h5"
                textTransform={"uppercase"}
                sx={{
                  fontWeight: 500,
                  fontSize: 36,
                  color: "#FFFFFF",
                }}
              >
                Comfort Palce
              </Typography>
              <Typography
                variant="body3"
                textTransform={"uppercase"}
                sx={{
                  fontWeight: 200,
                  fontSize: 20,
                  textAlign: "justify",
                  color: "#D9D9D9",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </Typography>
              <Link
                variant="body3"
                textTransform={"uppercase"}
                sx={{
                  cursor: "pointer",
                  fontWeight: 200,
                  fontSize: 20,
                  textAlign: "justify",
                  color: "#FFFFFF",
                  textDecorationColor: "#FFFFFF",
                }}
              >
                Join US +
              </Link>
            </Stack>
          </Box>
        </Stack>
        <Stack>
          <Box width={520} height={287} bgcolor={"#FFEFD1"}>
            <Stack m={3} spacing={2}>
              <Typography
                variant="h5"
                textTransform={"uppercase"}
                sx={{
                  fontWeight: 500,
                  fontSize: 36,
                  color: "#513125",
                }}
              >
                Comfort Palce
              </Typography>
              <Typography
                variant="body3"
                textTransform={"uppercase"}
                sx={{
                  fontWeight: 200,
                  fontSize: 20,
                  textAlign: "justify",
                  color: "#936351",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </Typography>
              <Link
                variant="body3"
                textTransform={"uppercase"}
                sx={{
                  cursor: "pointer",
                  fontWeight: 200,
                  fontSize: 20,
                  textAlign: "justify",
                  color: "#513125",
                  textDecorationColor: "#513125",
                }}
              >
                Join US +
              </Link>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Choose;
