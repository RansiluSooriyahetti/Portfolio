import React from "react";
import { Box, Container, Flex, Heading, Text, Wrap } from "@chakra-ui/react";
import Projects from "./Projects";
import CustomSkillTag from "./utils/CustomSkillTag";
import FrameworkTag from "./utils/FrameworkTag";
import DatabaseTag from "./utils/DatabaseTag";
import ToolTag from "./utils/ToolTag";
import WebDevelopmentTag from "./utils/WebDevelopmentTag";
import TestingTechnologyTag from "./utils/TestingTechnologyTag";

export default function SkillsProjects() {
  return (
    <Container maxW={"7xl"} alignItems="center" my={5} overflow="hidden">
      <Flex
        height={"100%"}
        width={"100%"}
        maxW={["full", "full", "7xl"]}
        justifyContent="center"
        alignItems={"center"}
        flexDir={["column", "column", "row", "row"]}
        flexWrap="wrap"
      >
        <Box
          me={["0", "0", "8"]}
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
          <Heading>Projects</Heading>
          <Projects />
        </Box>

        <Flex
          id="skills"
          width={["md", "md", "md"]}
          flexDir={"column"}
          justifyContent="start"
          bgColor={"white"}
          color="black"
          maxHeight="100%"
          overflowY="auto"
          borderRadius="3xl"
          p="10"
          mb={10}
        >
          <Heading textAlign={"start"}>Skills</Heading>

          <Text fontSize={"sm"} textAlign="start">
            My skills, which I constantly keep improving.
          </Text>

          <Box my={5}>
            <Heading textAlign={"start"} as="h4" fontSize={"lg"}>
              {" "}
              Programming Languages
            </Heading>

            <Box
              orientation="horizontal"
              bgColor="gray.300"
              my={3}
              height={0.2}
            />
            {/* Icons  */}

            <Wrap spacing="2" shouldWrapChildren={true} overflow="hidden">
              <CustomSkillTag skill={"Java"} />
              <CustomSkillTag skill={"Javascript"} />
              <CustomSkillTag skill={"C"} />
            </Wrap>
          </Box>
          
          <Box my={2}>
            <Heading textAlign={"start"} as="h4" fontSize={"lg"}>
              {" "}
              Web Development
            </Heading>
            <Box
              orientation="horizontal"
              bgColor="gray.300"
              my={3}
              height={0.2}
            />
            <Wrap spacing="2" shouldWrapChildren={true} overflow="hidden">
              <WebDevelopmentTag skill={"React JS/TS"} />
              <WebDevelopmentTag skill={"Tailwind CSS"} />
              <WebDevelopmentTag skill={"HTML"} />
              <WebDevelopmentTag skill={"CSS"} />
            </Wrap>
          </Box>

          <Box my={2}>
            <Heading textAlign={"start"} as="h4" fontSize={"lg"}>
              {" "}
              Backend Technologies
            </Heading>
            <Box
              orientation="horizontal"
              bgColor="gray.300"
              my={3}
              height={0.2}
            />
            <Wrap spacing="2" shouldWrapChildren={true} overflow="hidden">
              <FrameworkTag skill={"Spring Boot"} />
            </Wrap>
          </Box>
          
          <Box my={2}>
            <Heading textAlign={"start"} as="h4" fontSize={"lg"}>
              {" "}
              Database
            </Heading>
            <Box
              orientation="horizontal"
              bgColor="gray.300"
              my={3}
              height={0.2}
            />
            <Wrap spacing="2" shouldWrapChildren={true} overflow="hidden">
              <DatabaseTag skill={"MySQL"} />
              <DatabaseTag skill={"PostgreSQL"} />
              <DatabaseTag skill={"MSSQL"} />
            </Wrap>
          </Box>
          
          <Box my={2}>
            <Heading textAlign={"start"} as="h4" fontSize={"lg"}>
              {" "}
              Testing Technologies
            </Heading>
            <Box
              orientation="horizontal"
              bgColor="gray.300"
              my={3}
              height={0.2}
            />
            <Wrap spacing="2" shouldWrapChildren={true} overflow="hidden">
              <TestingTechnologyTag skill={"Cypress"} />
              <TestingTechnologyTag skill={"Cucumber"} />
              <TestingTechnologyTag skill={"Vitest"} />
              <TestingTechnologyTag skill={"JUnit"} />
            </Wrap>
          </Box>
          
          <Box my={5}>
            <Heading textAlign={"start"} as="h4" fontSize={"lg"}>
              {" "}
              Other Tools
            </Heading>

            <Box
              orientation="horizontal"
              bgColor="gray.300"
              my={2}
              height={0.2}
            />

            <Wrap spacing="2" shouldWrapChildren={true} overflow="hidden">
              <ToolTag skill={"Github"} />
              <ToolTag skill={"Prometheus"} />
              <ToolTag skill={"Grafana"} />
              <ToolTag skill={"Docker"} />
              <ToolTag skill={"Swagger"} />
              <ToolTag skill={"Linux"} />
              <ToolTag skill={"VS Code"} />
            </Wrap>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
}