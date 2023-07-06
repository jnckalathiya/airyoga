import {
  FacebookOutlined,
  Instagram,
  Twitter,
} from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";
import Team1 from "../assets/Image/team1.png";
import Team2 from "../assets/Image/team2.png";
import Team3 from "../assets/Image/team3.png";
import Team4 from "../assets/Image/team4.png";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { sliderSettings } from "../utils/common";
const data = [
  {
    img: Team1,
    name: "LAURA CHARETTE",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing",
  },
  {
    img: Team2,
    name: "MICHAL RUHEEN",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing",
  },
  {
    img: Team3,
    name: "VETTE LONGORIA",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing",
  },
  {
    img: Team4,
    name: "LONGORIA MICHAL",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing",
  },
  {
    img: Team1,
    name: "LAURA CHARETTE",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing",
  },
  {
    img: Team2,
    name: "MICHAL RUHEEN",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing",
  },
  {
    img: Team3,
    name: "VETTE LONGORIA",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing",
  },
  {
    img: Team4,
    name: "LONGORIA MICHAL",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing",
  },
];

export const Trainer = () => {

  return (
      <Stack mt={"3rem"} alignItems={"center"} position={"relative"}>
        <Typography
          color={"#C47A5E"}
          variant="h5"
          fontSize={36}
          sx={{ fontWeight: "2.2rem", textTransform: "uppercase" }}
        >
          OUR TRAINER
        </Typography>
        <Typography
          color={"#513125"}
          sx={{
            fontSize: "3.5rem",
            fontWeight: 500,
            textTransform: "uppercase",
            fontFamily: "Cormorant Garamond",
            textAlign: "center",
          }}
        >
          Talented trainers from all
          <br /> over the world
        </Typography>

        <Stack direction={"row"} my={2} alignItems={"center"} justifyContent={"center"} width={"70%"}>
        
        <Swiper {...sliderSettings}>
            {data.map((trainer, i) => (
              <SwiperSlide key={i}>
                <Stack justifyContent={"center"} alignItems={"center"}>
                  <img src={trainer.img} alt="Team" />
                  <Typography variant="h5" color={"#513125"}>{trainer.name}</Typography>
                  <Typography variant="body" textAlign={"center"} color={"rgba(81, 49, 37, 0.7)"}>
                    Lorem ipsum dolor sit amet <br />
                    consectetur adipiscing
                  </Typography>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    color={"#513125"}
                  >
                    <IconButton sx={{color:"#513125"}}>
                      <Twitter />
                    </IconButton>
                    <IconButton sx={{color:"#513125"}}>
                      <FacebookOutlined />
                    </IconButton>
                    <IconButton sx={{color:"#513125"}}>
                      <Instagram />
                    </IconButton>
                  </Stack>
                </Stack>
              </SwiperSlide>
            ))}
            <SliderButtons/>
          </Swiper>
          

        </Stack>
      </Stack>
  );
};
const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div style={{display:"flex", alignItems:"center",justifyContent:"center", marginTop:"1rem",}}>
      <button onClick={() =>{swiper.slidePrev()}} style={{border:"1px solid #513125",color:"#513125",  background:"none",fontSize:24, fontWeight:"bold", marginLeft:"1rem",  left:"1rem", borderRadius:"50%"}}>&lt;</button>
      <button onClick={() =>{swiper.slideNext()}} style={{border:"1px solid #513125",color:"#513125", background:"none",fontSize:24, fontWeight:"bold", marginLeft:"1rem", right:"1rem", borderRadius:"50%"}}>&gt;</button>
    </div>
  );
};
