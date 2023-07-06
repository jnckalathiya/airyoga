import React, { useState } from "react";
import card1 from "../../assets/Image/card1.png";
import card2 from "../../assets/Image/card2.png";
import card3 from "../../assets/Image/card3.png";
import card4 from "../../assets/Image/card4.png";

import { Link, Stack, Typography } from "@mui/material";

const Carasol = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <Stack
      alignItems={"center"}
      display={"flex"}
      flexDirection={"column"}
      height={"100%"}
      justifyContent={"center"}
    >
      <Stack direction={"row"} spacing={2}>
        {/* Card 1 */}

        <div
          position={"relative"}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <img src={card4} alt="Stretching Yoga" width={350} />

          {isHovering === true ? (
            <Stack
              className="content"
              position={"absolute"}
              top={0}
              sx={{
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 50%)",
                width: 350,
                height: "100%",
              }}
              spacing={2}
              alignItems={"center"}
              textAlign={"center"}
              justifyContent={"center"}
            >
              <Typography
                sx={{
                  fontWeight: "medium",
                  fontSize: 30,
                  textTransform: "uppercase",
                }}
              >
                Stretching yoga
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </Typography>
              <Link
                sx={{
                  color: "white",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Read More...
              </Link>
            </Stack>
          ) : (
            <Stack
              className="content"
              position={"absolute"}
              top="72.6%"
              sx={{
                backgroundColor: "rgba(255, 255, 255, 50%)",
                width: 350,
                height: 126,
              }}
              alignItems={"center"}
              textAlign={"center"}
            >
              <Typography
                variant="h4"
                position={"absolute"}
                top="1.5rem"
                sx={{
                  fontWeight: "medium",
                  fontSize: 40,
                  textTransform: "uppercase",
                }}
              >
                Stretching yoga
              </Typography>
            </Stack>
          )}
        </div>
        {/* Card 2 */}
        <div
          className="card"
          position={"relative"}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <img src={card1} alt="Stretching Yoga" width={350} />
          {isHovering === true ? (
            <Stack
              className="content"
              position={"absolute"}
              top={0}
              sx={{
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 50%)",
                width: 350,
                height: "100%",
              }}
              spacing={2}
              alignItems={"center"}
              textAlign={"center"}
              justifyContent={"center"}
            >
              <Typography
                sx={{
                  fontWeight: "medium",
                  fontSize: 30,
                  textTransform: "uppercase",
                }}
              >
                Body Balance
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </Typography>
              <Link
                sx={{
                  color: "white",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Read More...
              </Link>
            </Stack>
          ) : (
            <Stack
              className="content"
              position={"absolute"}
              top="72.6%"
              sx={{
                backgroundColor: "rgba(255, 255, 255, 50%)",
                width: 350,
                height: 126,
              }}
              alignItems={"center"}
              textAlign={"center"}
            >
              <Typography
                variant="h4"
                position={"absolute"}
                top="2rem"
                sx={{
                  fontWeight: "medium",
                  fontSize: 40,
                  textTransform: "uppercase",
                }}
              >
                Body Balance
              </Typography>
            </Stack>
          )}
        </div>
        {/* Card 3 */}
        <div
          className="card"
          position={"relative"}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <img src={card2} alt="Stretching Yoga" width={350} />
          {isHovering === true ? (
            <Stack
              className="content"
              position={"absolute"}
              top={0}
              sx={{
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 50%)",
                width: 350,
                height: "100%",
              }}
              spacing={2}
              alignItems={"center"}
              textAlign={"center"}
              justifyContent={"center"}
            >
              <Typography
                sx={{
                  fontWeight: "medium",
                  fontSize: 30,
                  textTransform: "uppercase",
                }}
              >
                Maditation Yoga
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </Typography>
              <Link
                sx={{
                  color: "white",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Read More...
              </Link>
            </Stack>
          ) : (
            <Stack
              className="content"
              position={"absolute"}
              top="72.6%"
              sx={{
                backgroundColor: "rgba(255, 255, 255, 50%)",
                width: 350,
                height: 126,
              }}
              alignItems={"center"}
              textAlign={"center"}
            >
              <Typography
                variant="h4"
                position={"absolute"}
                top="1.5rem"
                sx={{
                  fontWeight: "medium",
                  fontSize: 40,
                  textTransform: "uppercase",
                }}
              >
                Maditation Yoga
              </Typography>
            </Stack>
          )}
        </div>
        {/* Card 4 */}
        <div
          className="card"
          position={"relative"}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <img src={card3} alt="Stretching Yoga" width={350} />
          {isHovering === true ? (
            <Stack
              className="content"
              position={"absolute"}
              top={0}
              sx={{
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 50%)",
                width: 350,
                height: "100%",
              }}
              spacing={2}
              alignItems={"center"}
              textAlign={"center"}
              justifyContent={"center"}
            >
              <Typography
                sx={{
                  fontWeight: "medium",
                  fontSize: 30,
                  textTransform: "uppercase",
                }}
              >
                Nature Yoga
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </Typography>
              <Link
                sx={{
                  color: "white",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Read More...
              </Link>
            </Stack>
          ) : (
            <Stack
              className="content"
              position={"absolute"}
              top="72.6%"
              sx={{
                backgroundColor: "rgba(255, 255, 255, 50%)",
                width: 350,
                height: 126,
              }}
              alignItems={"center"}
              textAlign={"center"}
            >
              <Typography
                variant="h4"
                position={"absolute"}
                top="2rem"
                sx={{
                  fontWeight: "medium",
                  fontSize: 40,
                  textTransform: "uppercase",
                }}
              >
                Nature Yoga
              </Typography>
            </Stack>
          )}
        </div>
      </Stack>
    </Stack>
  );
};

export default Carasol;
