import { Box, Stack, Typography } from "@mui/material";
import Yoga from "../assets/Image/Yoga.png";
import Yoga2 from "../assets/Image/Yoga2.png";
import Yoga3 from "../assets/Image/Yoga3.png";
import Yoga4 from "../assets/Image/Yoga4.png";
import React from "react";

const Benifits = () => {
  return (
    <Stack spacing={2}>
      <Stack direction={"column"} spacing={2} alignItems={"center"}>
        <Typography
          variant="h5"
          sx={{
            color: "#C47A5E",
            fontFamily: "Inter",
            textTransform: "uppercase",
            fontWeight: "400",
          }}
        >
          what we do
        </Typography>
        <Typography
          variant="h3"
          sx={{
            color: "#513125",
            fontFamily: "Cormorant Garamond",
            fontWeight: "400",
            textTransform:"uppercase"
          }}
        >
          Benifits Of Yoga
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
          Contrary to popular belief Lorem is not simply random text. It
          <br /> has roots in adipiscing ncididunt piece of classical literature
        </Typography>
      </Stack>
      <Stack>
        <Stack
          direction={"row"}
          m={"1rem 4rem"}
          justifyContent={"center"}
          spacing={4}
        >
          <Box
            width={525}
            height={266}
            bgcolor={"rgba(196, 122, 94 ,23%)"}
            boxShadow={"0px 4px 10px rgba(0, 0, 0, 25%)"}
            textAlign={"center"}
          >
            <img src={Yoga} alt="Yoga" width={"25%"} />
              <Typography variant="h6">Strong Body Life</Typography>
              <Typography variant="body2" m={"1rem 4rem"}>
                Lorem ipsum dolor sit amet, consectetur blandit magna adipiscing
                elit ncididunt labore et dolore magna aliqua enim.
              </Typography>
          </Box>
          <Box
            width={525}
            height={266}
            bgcolor={"white"}
            boxShadow={"0px 4px 10px rgba(0, 0, 0, 25%)"}
            textAlign={"center"}
            >
              <img src={Yoga2} alt="Yoga2" width={"25%"} />
                <Typography variant="h6">Increased Flexibility</Typography>
                <Typography variant="body2" m={"1rem 4rem"}>
                  Lorem ipsum dolor sit amet, consectetur blandit magna adipiscing
                  elit ncididunt labore et dolore magna aliqua enim.
                </Typography>
          </Box>
        </Stack>
        <Stack
          direction={"row"}
          m={"1rem 4rem"}
          justifyContent={"center"}
          spacing={4}
        >
          <Box
            width={525}
            height={266}
            bgcolor={"white"}
            boxShadow={"0px 4px 30px rgba(0, 0, 0, 25%)"}
            textAlign={"center"}
            >
              <img src={Yoga3} alt="Yoga3" width={"25%"} />
                <Typography variant="h6">Increases Blood Flow</Typography>
                <Typography variant="body2" m={"1rem 4rem"}>
                  Lorem ipsum dolor sit amet, consectetur blandit magna adipiscing
                  elit ncididunt labore et dolore magna aliqua enim.
                </Typography>
          </Box>
          <Box
            width={525}
            height={266}
            bgcolor={"white"}
            boxShadow={"0px 4px 30px rgba(0, 0, 0, 25%)"}
            textAlign={"center"}
            >
              <img src={Yoga4} alt="Yoga4" width={"25%"} />
                <Typography variant="h6">Drops Blood Pressure</Typography>
                <Typography variant="body2" m={"1rem 4rem"}>
                  Lorem ipsum dolor sit amet, consectetur blandit magna adipiscing
                  elit ncididunt labore et dolore magna aliqua enim.
                </Typography>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Benifits;
