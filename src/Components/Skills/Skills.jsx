import { Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import style from "./Skills.module.css";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
export default function Skills({ colorMode }) {
  const skillsArray = [
    {
      id: "1",
      name: "HTML",
      logo: "./images/icons/html5-original.svg",
    },
    {
      id: "2",
      name: "CSS",
      logo: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg",
    },
    {
      id: "3",
      name: "JavaScript",
      logo: "./images/icons/javascript-original.svg",
    },
    {
      id: "4",
      name: "React",
      logo: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
    },
    {
      id: "5",
      name: "Redux",
      logo: "./images/icons/redux.svg",
    },
    {
      id: "6",
      name: "Typescript",
      logo: "./images/icons/typescript.svg",
    },
    {
      id: "7",
      name: "Chakra UI",
      logo: "/images/icons/chakra-ui.svg",
    },
    {
      id: "8",
      name: "NextJs",
      logo: "./images/icons/next-js.svg",
    },
    {
      id: "9",
      name: "NodeJS",
      logo: "./images/icons/nodejs-original.svg",
    },
    {
      id: "10",
      name: "MongoDB",
      logo: "./images/icons/mongodb-original.svg",
    },
    {
      id: "11",
      logo: "https://alih6051.github.io/static/media/tailwind.e7b4a92d5aefbddd6f0651c024144be2.svg",
      name: "Tailwind",
    },
    {
      id: "12",
      logo: "./images/icons/mongoose-1.svg",
      name: "Mongoose",
    },
    {
      id: "13",
      name: "Express JS",
      logo: "./images/icons/pngwing.com.png",
    },
  ];

  const toolsArray = [
    {
      id: "1",
      name: "Postman",
      logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    },

    {
      id: "2",
      name: "Github",
      logo: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
    },

    {
      id: "3",
      name: "vsCode",
      logo: "https://lh5.googleusercontent.com/5ES-Ty5oZV246Psq5ABbOGxOn3MN5piHduRfeQRlXNj3aAW32v7K9rHYaSqdvOjFFfQ=w2400",
    },

    {
      id: "4",
      name: "git",
      logo: "./images/icons/git-scm-icon.svg",
    },
  ];

  return (
    <div id="skills">
      <div id="Skills" style={{ height: "20px" }}></div>
      <div className="skills-card-name" id={style.skill}>
        <Heading
          size={["xl", "xl", "xl", "xl"]}
          fontFamily="Bree Serif, serif"
          style={{ color: "#BFACE0" }}
          textAlign="center"
          color="#243D25"
          letterSpacing={"1px"}
        >
          Skills
        </Heading>
        <div
          className="skills-card"
          id={style.skillDiv}
          data-aos-mirror="true"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          {skillsArray.map((skill) => (
            <div key={skill.name} className={style.skill_in_div}>
              <div className="skills-card-img" data-aos="">
                <img className={style.logo} src={skill.logo} alt={skill.name} />
              </div>
              <p
                className="skills-card-name"
                id={style.skillH3}
                style={{
                  color: "#BFACE0",
                }}
              >
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div id="Skills" style={{ height: "20px" }}></div>
      <div className="skills-card-name" id={style.skill}>
        <Heading
          size={["xl", "xl", "xl", "xl"]}
          fontFamily="Bree Serif, serif"
          style={{
            color: colorMode === "light" ? "#4C3575" : "#BFACE0",
          }}
          textAlign="center"
          color="#243D25"
        >
          Tools
        </Heading>
        <div
          className="skills-card"
          id={style.skillDiv}
          data-aos-mirror="true"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          {toolsArray.map((skill) => (
            <div key={skill.name} className={style.skill_in_div}>
              <div className="skills-card-img" data-aos="">
                <img className={style.logo} src={skill.logo} alt={skill.name} />
              </div>
              <p
                className="skills-card-name"
                id={style.skillH3}
                style={{
                  color: colorMode === "light" ? "#4C3575" : "#BFACE0",
                }}
              >
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
