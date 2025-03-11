import React from "react";
import {
  Box,
  chakra,
  Container,
  Text,
  HStack,
  VStack,
  Flex,
  useColorModeValue,
  useBreakpointValue,
  Tag,
} from "@chakra-ui/react";

const milestones = [
  {
    id: 1,
    date: "2021",
    title: "Fruit Sorting Machine",
    description: `We optimized the fruit sorting process by efficiently and accurately categorizing fruits based on their skin color level, resulting overall quality improvement.`,
    tech: ["C", "Proteus", "Atmel Studio"],
  },
  {
    id: 2,
    date: "2022",
    title: "Online Delivery Portal ",
    description: `I successfully contributed to the development of a web application for a laundry service, where i played a key role in designing and implementing Delivery person Dashboard. This dashboard integrated with Google maps, various data which helpful for delivery and pickup management.`,
    tech: ["React.js", "SpringBoot", "MySQL"],
  },
  {
    id: 3,
    date: "2024",
    title: "Cypress - Cucumber test suite for UI and API ",
    description: `I successfully contributed to implement test suite for both UI and API testing. Focused on e2e testing and validating functionality and reliability of web application(UI) and book management system(API).`,
    tech: ["Cypress", "Cucumber", "Github actions"],
  },
  {
    id: 4,
    date: "2024",
    title: "CRM for managing small scale company (ongoing)",
    description: `Working on a CRM project which help to create quotation, invoices, manage HR and relevant functionalities.functionality implemented such a way user can dynamically change structure in generating pdf.`,
    tech: ["SpringBoot", "PostgreSQL", "react TS", "tailwind CSS"],
  },
  {
    id: 5,
    date: "2025",
    title: "Analysis on the effect of Metadata changes on the views of YouTube Videos in Sri Lankan Context (ongoing)",
    description: `Final year research project (ongoing)\n\nDeveloping a predicting models in both machine learning models and statistical models for getting view count prediction and compare accuracy on each model on time series data.use YouTube API to get trending video data and make time series data collection and evaluate on statistical and machine learning models.`,
    tech: ["Python", "Machine Learning", "Statistical models"],
  },
];

const Projects = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Container
      maxWidth="7xl"
      maxHeight={"3xl"}
      overflowX={"auto"}
      p={{ base: 2, sm: 10 }}
      my={2}
      css={{
        "&::-webkit-scrollbar": {
          marginTop: "8px",
          width: "8px",
          height: "8px",
        },
        "&::-webkit-scrollbar-track": {
          marginTop: "8px",
          width: "2px",
          height: "4px",
        },
        "&::-webkit-scrollbar-thumb": {
          marginTop: "8px",
          background: "#121212",
          borderRadius: "12px",
        },
      }}
    >
      {milestones.map((milestone) => (
        <Flex key={milestone.id} mb="10px">
          {/* Desktop view(left card) */}
          {isDesktop && milestone.id % 2 === 0 && (
            <>
              <EmptyCard />
              <LineWithDot />
              <Card {...milestone} />
            </>
          )}

          {/* Mobile view */}
          {isMobile && (
            <>
              <LineWithDot />
              <Card {...milestone} />
            </>
          )}

          {/* Desktop view(right card) */}
          {isDesktop && milestone.id % 2 !== 0 && (
            <>
              <Card {...milestone} />

              <LineWithDot />
              <EmptyCard />
            </>
          )}
        </Flex>
      ))}
    </Container>
  );
};

const Card = ({ id, title, description, date, tech }) => {
  // For even id show card on left side
  // For odd id show card on right side
  const isEvenId = id % 2 === 0;
  let borderWidthValue = isEvenId ? "15px 15px 15px 0" : "15px 0 15px 15px";
  let leftValue = isEvenId ? "-15px" : "unset";
  let rightValue = isEvenId ? "unset" : "-15px";

  const isMobile = useBreakpointValue({ base: true, md: false });
  if (isMobile) {
    leftValue = "-15px";
    rightValue = "unset";
    borderWidthValue = "15px 15px 15px 0";
  }

  return (
    <HStack
      flex={1}
      p={{ base: 3, sm: 6 }}
      bg={useColorModeValue("gray.300", "gray.800")}
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
      _before={{
        content: `""`,
        w: "0",
        h: "0",
        borderColor: `transparent ${useColorModeValue(
          "#edf2f6",
          "#1a202c"
        )} transparent`,
        borderStyle: "solid",
        borderWidth: borderWidthValue,
        position: "absolute",
        left: leftValue,
        right: rightValue,
        display: "block",
      }}
    >
      <Box>
        <Text fontSize="md" color={isEvenId ? "primary.800" : "blue.700"}>
          {date}
        </Text>

        <VStack spacing={2} mb={3} textAlign="left">
          <chakra.h1 fontSize="xl" lineHeight={1.2} fontWeight="bold" w="100%">
            {title}
          </chakra.h1>
          <Text fontSize="sm">{description}</Text>
        </VStack>

        <HStack>
          {tech.map((tech) => (
            <Tag variant={"subtle"}>{tech}</Tag>
          ))}
        </HStack>
      </Box>
    </HStack>
  );
};

const LineWithDot = () => {
  return (
    <Flex
      pos="relative"
      alignItems="center"
      mr={{ base: "40px", md: "40px" }}
      ml={{ base: "0", md: "40px" }}
    >
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={useColorModeValue("gray.400", "gray.700")}
        top="0px"
      ></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          top="0"
          left="0"
          bottom="0"
          right="0"
          width="100%"
          height="100%"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          bg={useColorModeValue("primary.800", "gray.200")}
          borderRadius="100px"
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

const EmptyCard = () => {
  return (
    <Box
      flex={{ base: 0, md: 1 }}
      p={{ base: 0, md: 6 }}
      bg="transparent"
    ></Box>
  );
};

export default Projects;
