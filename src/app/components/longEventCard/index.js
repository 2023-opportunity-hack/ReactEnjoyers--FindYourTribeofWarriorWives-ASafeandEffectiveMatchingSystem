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
  const { id, title, description, type, interest, area, time } = props.event;
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        height="70"
        width="350"
        maxW={{ base: "100%", sm: "200px" }}
        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="Caffe Latte"
      />

      <Stack className="w-[100%]">
        <CardBody className="w-[100%]">
          <Tag
            className="mb-4"
            size={"sm"}
            key="sm"
            variant="solid"
            colorScheme="orange"
          >
            {area}
          </Tag>
          <Text color="gray">{time}</Text>

          <Heading size="md">{title}</Heading>

          <Text py="2">{description}</Text>
        </CardBody>

        <CardFooter>
          <Link href={`events/${id}`}>
            <Button variant="solid" colorScheme="orange">
              Learn More
            </Button>
          </Link>
        </CardFooter>
      </Stack>
    </Card>
  );
}
