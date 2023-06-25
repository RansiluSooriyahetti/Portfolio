import { Tag } from "@chakra-ui/react";
import React from "react";

export default function DatabaseTag({ skill }) {
  return (
    <Tag colorScheme="red" fontSize="md" px={4} py={1.5}>
      {" "}
      {skill}
    </Tag>
  );
}
