"use client";

import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Button,
  Tag,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LongEventCard(props) {
  const { id, title, description, location, area, time } = props.event;
  return (
    <Link href={`/events/${id}`}>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        mb={6}
      >
        <Image
          objectFit="cover"
          height="70"
          width="250"
          maxW={{ base: "100%", sm: "200px" }}
          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Caffe Latte"
        />

        <CardBody className="w-[100%] h-[100px]">
          <Tag
            className="mb-4"
            size={"sm"}
            key="sm"
            variant="solid"
            colorScheme="orange"
          >
            {location}
          </Tag>
          <Text color="gray">{time}</Text>

          <Heading size="md">{title}</Heading>

          <Text>{description}</Text>
        </CardBody>
      </Card>
    </Link>
  );
}
