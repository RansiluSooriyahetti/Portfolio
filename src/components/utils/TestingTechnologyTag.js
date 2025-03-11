import { Tag } from "@chakra-ui/react";
import React from "react";

export default function TestingTechnologyTag({ skill }) {
  return (
    <Tag colorScheme="purple" fontSize="md" px={4} py={1.5}>
      {" "}
      {skill}
    </Tag>
  );
}
