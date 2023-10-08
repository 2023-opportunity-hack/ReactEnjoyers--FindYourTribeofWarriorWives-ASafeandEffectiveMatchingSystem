"use client";

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  Tag,
  Badge,
  Card,
} from "@chakra-ui/react";
import LongEventCard from "../../components/longEventCard";
import { MdLocalShipping } from "react-icons/md";
import { events } from "../../../../content";

// ENABLE THIS FOR OPTIMIZATION

// export async function generateStaticParams() {
//   const api = `<API_LINK>/events`;
//   const events = await fetch(api).then((res) => res.json());

//   return events.map((event) => ({
//     id: event.id,
//   }));
// }

const data = {
  online: true,
  name: "Marine Corps",
  location: "Midwest",
  tags: [
    { name: "Hiking", color: "red" },
    { name: "Painting", color: "green" },
    { name: "Gaming", color: "green" },
    { name: "Reading", color: "green" },
  ],
  description:
    "Midwest Marine Corps spouses, discover the great outdoors with our hiking and painting enthusiasts. Join us for gaming and book club fun!",
  bg: "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/2019-8/couple-hiking-mountain-climbing-1296x728-header.jpg?w=1155&h=1528",
};

export default function EventPage({ params }) {
  return (
    <Container maxW={"7xl"}>
      <Card paddingY='1rem' paddingX='2rem' mb='3rem'>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 19 }}
        >
          <Flex>
            <Image
              rounded={"md"}
              alt={"product image"}
              src={data.bg}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={{ base: "100%", sm: "400px", lg: "520px" }}
            />
          </Flex>
          <Stack spacing={{ base: 6 }}>
            <Box as={"header"}>
              <Heading
                lineHeight={1.1}
                fontWeight={700}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
                mb="1rem"
              >
                {`${data.name} Warrior Wives of ${data.location}`}
              </Heading>
              {data.online && (
                <Tag colorScheme='blue' marginRight='1rem'>
                  Online Only
                </Tag>
              )}
              <Tag colorScheme='orange'>{data.name}</Tag>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue("gray.500", "gray.400")}
                  fontSize={"2xl"}
                  fontWeight={"300"}
                >
                  {data.description}
                </Text>
                {/* <Text fontSize={"lg"}>{data.longDescription}</Text> */}
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color='orange'
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Details
                </Text>

                <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>
                      <span className='font-bold'>Location: </span>
                      Zoom
                    </ListItem>
                    <ListItem>
                      <span className='font-bold'>Interest: </span>{" "}
                      {data.tags.map((t) => (
                        <Badge colorScheme={t.color} marginRight='0.5rem'>
                          {t.name}
                        </Badge>
                      ))}
                    </ListItem>
                  </List>
                </SimpleGrid>

                <Button
                  rounded={"none"}
                  w={"full"}
                  mt={8}
                  size={"lg"}
                  py={"7"}
                  bg={useColorModeValue("gray.900", "gray.50")}
                  color={useColorModeValue("white", "gray.900")}
                  textTransform={"uppercase"}
                  _hover={{
                    boxShadow: "lg",
                  }}
                >
                  Join Group
                </Button>
              </Box>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Card>
      <div className='max-w-[1200px] m-auto'>
        <Text heading fontSize={"2rem"} color='gray.800' pb='5'>
          Events
        </Text>

        {events.map((event) => {
          return <LongEventCard key={event.id} event={event} />;
        })}
      </div>
    </Container>
  );
}
