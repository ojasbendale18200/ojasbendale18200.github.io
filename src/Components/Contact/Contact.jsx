import {
  Box,
  Heading,
  Link,
  Text,
  Flex,
  Icon,
  FormControl,
  Image,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import style from "./Contact.module.css";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ADDRESS,
  EMAIL_ID,
  FIRST_NAME,
  GITHUB_USERNAME,
  LAST_NAME,
  LINKEDIN_USERNAME,
  RESUME_PATH,
  TWITTER_ID,
} from "../../root.link";

AOS.init();

export default function Contact({ colorMode }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const SendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_x9ycsef",
        "template_z8igh3g",
        e.target,
        "E2IYLHqQiR80FBqk5"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <Box
      id="contact"
      className="my-28"
      width="80%"
      margin="auto"
      color={"white"}
      data-aos-mirror="true"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <Box as="header" px={5} pt={10}>
        <Heading as="h2" size="xl" color={"#BFACE0"}>
          Contact Me
        </Heading>
        <Text fontWeight="thin" fontSize="lg" mt={2} letterSpacing={"1px"}>
          I'd love to hear your thoughts!
        </Text>
      </Box>
      <Flex
        flexDir={{ base: "column", md: "row" }}
        justify="space-between"
        mx={{ md: 6 }}
        mt={{ base: 5, md: 0 }}
      >
        <Box
          w={{ base: "full", md: "6/12" }}
          px={{ base: 4, md: 0 }}
          py={5}
          my={{ base: 5, md: 0 }}
        >
          <Box>
            <Text fontWeight="bold" fontSize="xl" letterSpacing={"1px"}>
              {FIRST_NAME} {LAST_NAME}
            </Text>
            <Text
              fontWeight="thin"
              mt={1}
              id="contact-phone"
              letterSpacing={"1px"}
            >
              9146193009
            </Text>
            <Link
              href={`mailto:${EMAIL_ID}`}
              id="contact-email"
              borderBottom="2px"
              borderColor="gray.500"
              mt={3}
              display="inline-block"
              letterSpacing={"1px"}
            >
              {EMAIL_ID}
            </Link>
          </Box>
          <Link
            href={RESUME_PATH}
            target="_blank"
            rel="noreferrer"
            borderBottom="2px"
            borderColor="gray.500"
            mt={3}
            display="inline-block"
            letterSpacing={"1px"}
          >
            Resume
          </Link>
          <Flex flexDir={{ base: "column", md: "row" }} mt={7}>
            <Box mr={{ base: 0, md: 4 }} mb={{ base: 4, md: 0 }}>
              <Link
                href={`https://www.linkedin.com/in/${LINKEDIN_USERNAME}`}
                target="_blank"
                rel="noreferrer"
                id="contact-linkedin"
                letterSpacing={"1px"}
              >
                <Box
                  border="1px"
                  borderColor="gray.500"
                  p={2}
                  rounded="lg"
                  fontSize="sm"
                  display="flex"
                  alignItems="center"
                >
                  <Image
                    src="./images/icons/linkedin.svg"
                    alt=""
                    width="24px"
                    height="24px"
                    className="mr-1"
                    pr="1"
                  />
                  LinkedIn
                </Box>
              </Link>
            </Box>
            <Box>
              <Link
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noreferrer"
                id="contact-github"
              >
                <Box
                  border="1px"
                  borderColor="gray.500"
                  p={2}
                  rounded="lg"
                  fontSize="sm"
                  display="flex"
                  alignItems="center"
                  letterSpacing={"1px"}
                >
                  <Image
                    src="./images/icons/github.svg"
                    alt=""
                    width="24px"
                    height="24px"
                    className="mr-1"
                    pr="1"
                  />
                  GitHub
                </Box>
              </Link>
            </Box>
          </Flex>
        </Box>
        <Box
          bg="rgba(28, 28, 28)"
          px={[5, null, null, null, 8]}
          py={[10, 8]}
          my={2}
          rounded="lg"
          shadow="lg"
          w={["full", null, null, "6/12"]}
          letterSpacing={"1px"}
        >
          <form
            name="contact"
            method="POST"
            // onSubmit={handleSubmit}
            // ref={formRef}
          >
            <input type="hidden" name="form-name" value="contact" />

            <FormControl>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                type="text"
                name="name"
                id="name"
                className="gradient"
                required
                // value={formData.name}
                // onChange={handleInputChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                type="email"
                name="email"
                id="email"
                className="gradient"
                required
                // value={formData.email}
                // onChange={handleInputChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="message">Message</FormLabel>
              <Textarea
                name="message"
                id="message"
                cols="25"
                rows="5"
                className="gradient"
                required
                // value={formData.message}
                // onChange={handleInputChange}
              />
            </FormControl>

            <Button
              type="submit"
              border="1px"
              borderColor="gray.500"
              backgroundColor={"#BFACE0"}
              p={2}
              rounded="lg"
              w="auto"
              mr="auto"
              mt="4"
              boxShadow="md"
              letterSpacing={"1px"}
              color={"black"}
            >
              Send Message
            </Button>
          </form>
        </Box>
      </Flex>

      <picture>
        <source
          srcSet="./images/rocket-320.webp 320w, ./images/rocket.webp 768w"
          type="image/webp"
        />
        <source
          srcSet="./images/rocket.png"
          sizes="(min-width: 768px) 50vw, 100vw"
          type="image/png"
        />
        <img
          width="500px"
          height="500px"
          loading="lazy"
          alt="red rocket flying"
        />
      </picture>
    </Box>
  );
}
