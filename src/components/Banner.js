import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaHackerrank,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import Education from "./Education";
import profilePic from "../images/profile.png";

export default function Banner() {
  return (
    <Container maxW={"7xl"} alignItems="center" my={5}>
      <Flex
        width={"100%"}
        maxW={["full", "full", "7xl"]}
        justifyContent="center"
        alignItems={"center"}
        flexDir={["column", "column", "row", "row"]}
      >
        <Flex
          width={["md", "md", "2xl"]}
          flexDir={"column"}
          justifyContent="space-between"
          bgColor={"white"}
          color="black"
          maxHeight="2xl"
          minHeight={"4xl"}
          borderRadius="3xl"
          p="10"
          mb={10}
        >
          <Box>
            <Flex alignItems={"center"} justifyContent="center">
              <Image
                borderColor={"gray.100"}
                src={profilePic}
                width="32"
                borderRadius={50}
              />
            </Flex>

            <Heading textAlign={"center"}>RANSILU SOORIYAHETTI</Heading>

            <Text fontSize={"sm"} textAlign="center">
              I am an IT undergraduate From University of Moratuwa who is
              enthusiastic about exploring and learning new technologies.
            </Text>

            <HStack my={4}>
              <Tag px={5} variant={"subtle"} colorScheme="teal">
                Undergraduate
              </Tag>
              <Tag px={5} variant={"subtle"} colorScheme="primary">
                Full Stack Developer
              </Tag>
            </HStack>
            <Box
              orientation="horizontal"
              bgColor="gray.300"
              my={4}
              height={0.2}
            />
            {/* Icons  */}
            <VStack spacing={6} alignItems="start">
              <HStack>
                <Box me={2}>
                  <IconButton
                    shadow={"md"}
                    variant={"ghost"}
                    border="1px solid"
                    borderColor={"gray.300"}
                  >
                    <FaEnvelope />
                  </IconButton>
                </Box>
                <VStack alignItems={"start"} spacing={0.1}>
                  <Text fontSize={"sm"}>Email</Text>
                  <a href="mailto:someone@example.com">
                    <Text fontWeight={"600"}>
                      ransilusooriyahetti@gmail.com
                    </Text>
                  </a>
                </VStack>
              </HStack>

              <HStack>
                <Box me={2}>
                  <IconButton
                    shadow={"md"}
                    variant={"ghost"}
                    border="1px solid"
                    borderColor={"gray.300"}
                  >
                    <FaPhone />
                  </IconButton>
                </Box>
                <VStack alignItems={"start"} spacing={0.1}>
                  <Text fontSize={"sm"}>Phone</Text>
                  <a href="tel:+94-714-865-664">
                    <Text fontWeight={"600"}>+94 71 486 5664</Text>
                  </a>
                </VStack>
              </HStack>

              <HStack>
                <Box me={2}>
                  <IconButton
                    shadow={"md"}
                    variant={"ghost"}
                    border="1px solid"
                    borderColor={"gray.300"}
                  >
                    <FaGithub />
                  </IconButton>
                </Box>
                <VStack alignItems={"start"} spacing={0.1}>
                  <Text fontSize={"sm"}>Github</Text>
                  <a href="https://github.com/RansiluSooriyahetti">
                    <Text fontWeight={"600"}>RansiluSooriyahetti</Text>
                  </a>
                </VStack>
              </HStack>

              <HStack>
                <Box me={2}>
                  <IconButton
                    shadow={"md"}
                    variant={"ghost"}
                    border="1px solid"
                    borderColor={"gray.300"}
                  >
                    <FaLinkedin />
                  </IconButton>
                </Box>
                <VStack alignItems={"start"} spacing={0.1}>
                  <Text fontSize={"sm"}>Linkedin</Text>
                  <a href="https://www.linkedin.com/in/ransilu-sooriyahetti/">
                    <Text fontWeight={"600"}>RansiluSooriyahetti</Text>
                  </a>
                </VStack>
              </HStack>

              <HStack>
                <Box me={2}>
                  <IconButton
                    shadow={"md"}
                    variant={"ghost"}
                    border="1px solid"
                    borderColor={"gray.300"}
                  >
                    <FaHackerrank />
                  </IconButton>
                </Box>
                <VStack alignItems={"start"} spacing={0.1}>
                  <Text fontSize={"sm"}>hackerrank</Text>
                  <a href="https://www.hackerrank.com/ransilusooriyah1?hr_r=1">
                    <Text fontWeight={"600"}>@ransilusooriyah1</Text>
                  </a>
                </VStack>
              </HStack>
            </VStack>
          </Box>

          <ButtonGroup
            justifyContent={"center"}
            alignItems={"center"}
            variant="ghost"
            spacing={1.9}
          >
            <a href="https://www.facebook.com/profile.php?id=100068698308403">
              <IconButton
                _hover={{
                  color: "primary.700",
                  bgColor: "primary.50",
                  border: "1px solid",
                  borderColor: "primary.700",
                }}
              >
                <FaFacebook size={24} />
              </IconButton>
            </a>

            <a href="https://www.instagram.com/iamsihilal/">
              <IconButton
                _hover={{
                  color: "primary.700",
                  bgColor: "primary.50",
                  border: "1px solid",
                  borderColor: "primary.700",
                }}
              >
                <FaInstagram size={24} />
              </IconButton>
            </a>

            <a href="https://twitter.com/RSooriyahetti">
              <IconButton
                _hover={{
                  color: "primary.700",
                  bgColor: "primary.50",
                  border: "1px solid",
                  borderColor: "primary.700",
                }}
              >
                <FaTwitter size={24} />
              </IconButton>
            </a>
          </ButtonGroup>
        </Flex>
        <Box
          ms={["0", "0", "8"]}
          flexDir={"column"}
          justifyContent="space-between"
          bgColor={"white"}
          color="black"
          maxHeight="4xl"
          scrollBehavior={"smooth"}
          minHeight={"4xl"}
          borderRadius="3xl"
          p="10"
          mb={10}
        >
          <Heading>Education and Work Experience</Heading>
          <Education />
        </Box>
      </Flex>
    </Container>
  );
}
