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
} from "@chakra-ui/react";

const milestones = [
  {
    id: 1,
    date: "2013",
    title: "Nalanda College - Colombo",
    description: `9As for G.C.E Ordinary Level`,
  },
  {
    id: 2,
    date: "2019",
    title: "Nalanda College - Colombo",
    description: `Biology A | Chemistry A | Physics C Z-Score: 1.4994 District Rank : 276 for G.C.E Advanced Level `,
  },
  {
    id: 3,
    date: "2019 Oct -2021 June",
    title: "Netex Enginnering - \nJunior network technician",
    description: "Experienced technician skilled in network infrastructure installation, fiber optic deployment, server hardware configuration, and technical troubleshooting.",
  },
  {
    id: 4,
    date: "Present",
    title: "University of Moratuwa",
    description: "Current GPA - 3.5\nLevel 3 Semester 1 - 3.81 (Dean's list)",
  },
  {
    id: 4,
    date: "2024 Jan - 2024 Sep",
    title: "Revocare Solutions - \nSoftware Engineer Intern",
    description: "Full-stack developer who contributed to the multi-faceted Altrogi platform, encompassing CRM, trading, HR, and portfolio management systems for the Skynet team. Leveraged a comprehensive technology stack including SpringBoot, PostgreSQL, React TS, and Tailwind CSS for development, while implementing robust testing frameworks (Cypress, Cucumber, Vitest, JUnit) and configuration technologies (Prometheus, k6, Swagger) for monitoring and documentation.\n2024 Sep - Present contract basic",
  },
];

const Education = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Container
      maxWidth="7xl"
      maxHeight={"3xl"}
      overflowX={"auto"}
      p={{ base: 2, sm: 10 }}
      mt={3}
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

const Card = ({ id, title, description, date }) => {
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
          <chakra.h1 fontSize="md" lineHeight={1.2} fontWeight="bold" w="100%" whiteSpace="pre-line">
            {title}
          </chakra.h1>
          <Text fontSize="sm" whiteSpace="pre-line">{description}</Text>
        </VStack>
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

export default Education;
