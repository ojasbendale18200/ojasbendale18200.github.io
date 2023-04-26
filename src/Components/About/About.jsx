import { Box, Heading, Image, useDisclosure } from "@chakra-ui/react";
import React, { useEffect } from "react";
import style from "./About.module.css";

import { FaDownload } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { HiDownload } from "react-icons/hi";
// ..

AOS.init();
export default function About({ colorMode }) {
  const openLink = (url) => {
    window.open(url);
  };

  return (
    <div
      id="about"
      className="about section"
      data-aos-mirror="true"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div
        id="About"
        style={{ height: "100px", border: "0px solid blue", padding: "10px" }}
      ></div>
      <Heading
        size={["xl", "xl", "xl", "xl"]}
        textAlign="center"
        fontFamily="Bree Serif, serif"
        color={"#BFACE0"}
      >
        About Me
      </Heading>
      <div data-aos-mirror="true" data-aos="fade-up" data-aos-duration="3000">
        <div id={style.aboutDiv} color={"#BFACE0"}>
          <div id={style.first}>
            <Image
              className="home-img"
              src="profileImg.jpg"
              // src="profile-modified.png"
              alt="Ojas Bendale"
            />
          </div>

          <div className={style.aboutDetails}>
            <p
              id="user-detail-name"
              fontFamily="Bree Serif, serif"
              className={style.name}
            >
              I am Ojas Bendale
            </p>
            <p className={style.name}>Full Stack Web Developer</p>

            <div className="aboutMe" id="user-detail-intro">
              <p className={style.namep}>
                Web Developer with 1000+ hours of coding experience in Frontend,
                passion for building applications in MERN Stack, with
                proficiency in managing development projects. Hands-on
                experience in various programming languages. Experienced in
                creating apps in individual and collaborative environments
              </p>
            </div>

            <div className={style.resumeDiv} backgroundColor={"#bb0606"}>
              <a
                id="resume-link-2"
                className={style.resumeButton}
                href="https://drive.google.com/uc?id=17pL_qb8DTmZvNZb5xhAd63DGuAObwPZo&export=download"
              >
                <div
                  style={{
                    border: "0px solid green",
                    padding: "5px",
                    marginRight: "5px",
                  }}
                  onClick={() =>
                    openLink(
                      "https://drive.google.com/file/d/17pL_qb8DTmZvNZb5xhAd63DGuAObwPZo/view?usp=share_link"
                    )
                  }
                  // className="home-resume"
                  id="resume-button-2"
                >
                  Resume
                </div>
                <HiDownload />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
