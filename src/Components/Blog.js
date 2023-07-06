import { Stack, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import c1 from "../assets/Image/1.jpeg";
import c2 from "../assets/Image/2.jpeg";
import c3 from "../assets/Image/3.jpeg";
import c4 from "../assets/Image/4 .jpeg";
import "swiper/css";
 const sliderSettings = {
  slidesPerView : 1,
  spaceBetween : 4,
  navigation: true,
    pagination: true,
  breakpoints :{
      480:{
          slidesPerView:1
      },
      600:{
          slidesPerView:2
      }
  }
}
const data = [
  {
    image: c1,
    title: "10 meditation and mindfulness retreats in the UK",
    date: "25 Aug 2015",
  },
  {
    image: c2,
    title: "8 best kids yoga mats to encourage your little yogi",
    date: "25 Aug 2015",
  },
  {
    image: c3,
    title: "I went to a puppy yoga class and this is what it was",
    date: "25 Aug 2015",
  },
  {
    image: c4,
    title: "The best teachers on to keep you calm in lockdown",
    date: "25 Aug 2015",
  },
  {
    image: c1,
    title: "10 meditation and mindfulness retreats in the UK",
    date: "25 Aug 2015",
  },
  {
    image: c2,
    title: "8 best kids yoga mats to encourage your little yogi",
    date: "25 Aug 2015",
  },
  {
    image: c3,
    title: "I went to a puppy yoga class and this is what it was",
    date: "25 Aug 2015",
  },
  {
    image: c4,
    title: "The best teachers on to keep you calm in lockdown",
    date: "25 Aug 2015",
  },
];

function Blog() {
  return (
    <Stack mt={"3rem"} alignItems={"center"} position={"relative"}>
      <Typography
        color={"#C47A5E"}
        variant="h5"
        fontSize={36}
        sx={{ fontWeight: "2.2rem", textTransform: "uppercase" }}
      >
        OUR Blog
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
        Some tips & trick about yoga
      </Typography>
      <Typography
        variant="paragraph"
        fontSize={20}
        color={"#4C4C4C"}
        textAlign={"center"}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec
        <br />
        ullamcorper mattis, pulvinar dapibus leo.
      </Typography>
      <Stack direction={"row"} my={2} alignItems={"center"} width={"70%"}>
        <Swiper {...sliderSettings}>
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <Stack width={424}>
                <img src={card.image} alt="Team" height={243}  />
                <Typography variant="h5" color={"#513125"}>
                  {card.title}
                </Typography>
                <Typography
                  variant="body"
                  color={"rgba(81, 49, 37, 0.7)"}
                >
                  {card.date}
                </Typography>
              </Stack>
            </SwiperSlide>
          ))}
          <SliderButtons/>
        </Swiper>
      </Stack>
    </Stack>
  );
}

export default Blog;


const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div style={{ display:"flex",margin:"1rem",  justifyContent:"center"}}>
      <button onClick={() =>{swiper.slidePrev()}} style={{width:"1rem" ,height:"1rem", background:"#D9D9D9",border:"1px solid black", borderRadius:"50%", margin:"0.5rem"}}></button>
      <button onClick={() =>{swiper.slideNext()}} style={{width:"1rem" ,height:"1rem",background:"white", border:"1px solid black", borderRadius:"50%", margin:"0.5rem"}}></button>
    </div>
  );
};
