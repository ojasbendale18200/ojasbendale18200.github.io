import {
  Flex,
  VStack,
  Image,
  Box,
  Heading,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import style from "./Home.module.css";

export default function Home({ colorMode }) {
  const [isSmallScreen] = useMediaQuery("(min-width: 680px)");
  const [isMediumScreen] = useMediaQuery("(min-width: 1180px)");

  return (
    <div id="home">
      <div id={style.home} style={{ color: "#EBC7E8" }}>
        <div className={style.img_txt_wrapper}>
          <img
            id={style.myImg}
            src="https://media.giphy.com/media/dWesBcTLavkZuG35MI/giphy.gif"
            alt="logo"
          />
          <div id={style.myDetailsDiv}>
            <h1 id={style.myName}>
              <span>Hey,</span>
              <br /> I am Ojas Bendale
            </h1>
            <h3 id={style.title}>Full Stack Web Developer</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
