import { Heading } from "@chakra-ui/react";
import React from "react";
import MajorProject from "./MajorProject";
import {
  Box,
  Image,
  Text,
  Button,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { MdSlideshow } from "react-icons/md";
import { BsGithub } from "react-icons/bs";

import { BiLinkExternal } from "react-icons/bi";

import style from "./Project.module.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
export default function Project({ colorMode }) {
  const openLink = (url) => {
    window.open(url);
  };
  const projectdata = [
    {
      name: "Smart-mart",
      img: "./images/smart-shop.png",
      type: "Group",
      desc: "Its an online ecommerse platform which is an replica of india mart",
      techstack: ["ReactJs", "Chakra-Ui", "Redux", "Json-Server"],
      github: "https://github.com/ojasbendale18200/Smart-Shop-",
      link: "https://smart-shop-alpha.vercel.app/",
    },
    {
      name: "Healthy-Way",
      img: "./images/Healthyway.png",
      type: "Group",
      desc: "Healthyway is a website that functions as a nutrition tracking tool to help users reach their health goals by monitoring their daily caloric intake and other relevant factors.",
      techstack: [
        "ReactJs",
        "ChakraUI",
        "Redux",
        "MongoDB",
        "ExpressJS",
        "ChartJS",
      ],
      github: "https://github.com/ojasbendale18200/Healthy-way",
      link: "https://healty-way.vercel.app/",
    },
    {
      name: "WordHunt",
      img: "./images/wordHunt.png",
      type: "Group",
      desc: "Word-Hunt is basically single player as well as multiplayer game where user have to find specific words in given time",
      techstack: [
        "ReactJs",
        "TypeScript",
        "Nodejs",
        "ExpressJs",
        "webSocket",
        "MongoDB",
        "TailwindCss",
      ],
      github: "https://github.com/ojasbendale18200/Word-Hunt",
      link: "https://word-hunt-indol.vercel.app/",
    },
    {
      name: "Cryptoverse",
      img: "./images/cryptoverse.png",
      type: "Individual",
      desc: "Here you can get all the Details about the Cryptocurrency such as price and news with respect to perticular cryprocurrenct",
      techstack: ["ReactJs", "RapidAPI", "Antd"],
      github: "https://github.com/ojasbendale18200/Cryptoverse",
      link: "https://cryptoverse-eta.vercel.app/",
    },

    {
      name: "Travel Go",
      img: "./images/travel-go.png",
      type: "Individual",
      desc: "Travel go is website that helps users to book hotels in sustainable price",
      techstack: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/ojasbendale18200/offbeat-edge-8089",
      link: "https://frabjous-hamster-391753.netlify.app/",
    },
  ];

  return (
    <Box
      id="projects"
      className="project"
      w="full"
      // color="#ffffff"
      p="30px 0px"
      textAlign="center"
      pt={20}
      data-aos-mirror="true"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <Box w="85%" m="auto">
        <Box
          gap={"10px"}
          display={"flex"}
          mb="25px"
          justifyContent={"center"}
          fontWeight="400"
        >
          <Heading
            size={["xl", "xl", "xl", "xl"]}
            textAlign="center"
            fontFamily="Bree Serif, serif"
            color={"#BFACE0"}
            letterSpacing={"1px"}
          >
            Projects
          </Heading>
        </Box>
        <Box display="grid" gap="50px" gridTemplateColumns="repeat(1, 1fr)">
          {projectdata &&
            projectdata.map((project) => {
              return (
                <Box
                  className="project-card"
                  bg={"#0c1014"}
                  data-aos-mirror="true"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  <Box
                    display={["inline", "inline", "flex"]}
                    rowGap="60px"
                    justifyContent="space-between"
                    // border={"3px solid #1877f2"}
                  >
                    <Image
                      w={["100%", "97%", "60%"]}
                      m="auto"
                      src={project.img}
                      alt="project-thumbnail"
                    />
                    <Box w={["100%", "97%", "39%"]} m="auto" p={"30px"}>
                      <Text
                        fontSize={["2xl", "3xl", "4xl"]}
                        className="project-title"
                        // color="#fff"
                        color={"rgba(121, 114, 232, 1)"}
                        mb="30px"
                        mt={"20px"}
                      >
                        {project.name}
                      </Text>
                      {/* <Text fontSize={["xl", "2xl", "3xl"]}>
                        ( {project.type} )
                      </Text> */}
                      <Text
                        className="project-description"
                        textAlign={"left"}
                        w={["100%", "90%", "90%"]}
                        m="auto"
                        fontSize={["sm", "md", "md"]}
                        color="#fff"
                        mb="30px"
                        letterSpacing={"1px"}
                      >
                        {project.desc}
                      </Text>
                      <Flex
                        flexWrap={"wrap"}
                        className="project-tech-stack"
                        w={["100%", "90%", "90%"]}
                        textAlign={"left"}
                        m={"auto"}
                        justify={"center"}
                      >
                        {/* <Text
                          className="project-tech-stack"
                          // w={["100%", "90%", "90%"]}
                          // m="auto"
                          mt="10px"
                          fontSize={["sm", "md", "md"]}
                          color="#fff"
                        >
                           {project.techstack}
                        </Text> */}
                        {project.techstack.map((disc, index) => (
                          <Text
                            className="project-tech-stack"
                            borderWidth="1px"
                            borderColor="gray.500"
                            px={{ base: 1, md: 2 }}
                            py={{ base: 0.5, md: 1 }}
                            borderRadius="lg"
                            mt={2}
                            fontSize={{ base: "xs", md: "sm" }}
                            key={index}
                            ml="2"
                            mb="3"
                            letterSpacing={"1px"}
                            color={"white"}
                          >
                            {disc}
                          </Text>
                        ))}
                      </Flex>
                      <Box
                        display="flex"
                        alignItems="flex-start"
                        w={["100%", "80%", "100%"]}
                        m="auto"
                        mr={"5px"}
                        justifyContent="space-around"
                      >
                        <Button
                          className="project-deployed-link"
                          letterSpacing={"1px"}
                          as="a"
                          // color={useColorModeValue('black','white')}
                          target="_blank"
                          href={project.link}
                          _hover={{ color: "rgba(121, 114, 232, 1)" }}
                          mt="10px"
                          w={"100px"}
                          p={["5px 5px", "10px 10px", "10px 10px"]}
                          fontSize={["md", "lg", "lg"]}
                          // color="black"
                          // border="1px solid white"
                          variant="solid"
                          leftIcon={<BiLinkExternal />}
                        >
                          Live
                        </Button>
                        <Button
                          className="project-github-link"
                          letterSpacing={"1px"}
                          as="a"
                          target="_blank"
                          href={project.github}
                          _hover={{ color: "rgba(121, 114, 232, 1)" }}
                          mt="10px"
                          w={"100px"}
                          p={["5px 5px", "10px 10px", "10px 10px"]}
                          fontSize={["md", "lg", "lg"]}
                          // color="black"
                          // border="1px solid white"
                          variant="solid"
                          leftIcon={<BsGithub />}
                        >
                          Github
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              );
            })}
        </Box>
      </Box>
    </Box>
  );
}
