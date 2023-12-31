"use client";
import React, { useState } from "react";
import {
  Box,
  Text,
  InputGroup,
  Input,
  Flex,
  InputLeftElement,
  Divider,
  Center,
  SimpleGrid,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Carousel from "./Carousel";
import GroupCard from "./components/groupCard";

export default function Home() {
  const [input, setInput] = useState("");
  const [groups, setGroups] = useState([]);
  const totalGroups = [
    ...RECOMMENDED_LOCAL_GROUPS,
    ...RECOMMENDED_ONLINE_GROUPS,
  ];

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setGroups(
      totalGroups.filter(
        (g) =>
          g.name.toLowerCase().includes(e.target.value) ||
          g.location.toLowerCase().includes(e.target.value)
      )
    );
    console.log(groups);
  };

  return (
    <>
      <Box>
        <Flex
          flexDir={"column"}
          gap="1rem"
          paddingX="15rem"
          marginBottom="1rem"
        >
          <Text>
            Your location: <b>Missouri</b>
          </Text>
          <InputGroup size="md" bg="white">
            <Input
              value={input}
              placeholder="Search for groups..."
              onChange={handleInputChange}
            />
            <InputLeftElement>
              <SearchIcon></SearchIcon>
            </InputLeftElement>
          </InputGroup>
          {input && (
            <Box
              border={"1px #CBD5E075 solid"}
              w="full"
              borderRadius="0 0 5px 5px"
              marginTop="-1rem"
              bg="white"
            >
              {groups.map((g) => (
                <>
                  <Box paddingX={"1rem"} paddingY={"0.5rem"} cursor={"pointer"}>
                    {g.name} Warrior Wives of {g.location}
                  </Box>
                  <Divider />
                </>
              ))}
            </Box>
          )}
          <Text heading fontSize={"2rem"} color="gray.800" marginTop="1rem">
            Recommended groups near you
          </Text>
        </Flex>
        <Carousel groups={RECOMMENDED_LOCAL_GROUPS} />
        <Flex
          flexDir={"column"}
          gap="1rem"
          paddingX="15rem"
          marginTop="2rem"
          marginBottom="1rem"
        >
          <Text heading fontSize={"2rem"} color="gray.800">
            Recommended online groups for you
          </Text>
        </Flex>
        <Carousel groups={RECOMMENDED_ONLINE_GROUPS} />
        <Flex
          flexDir={"column"}
          gap="1rem"
          paddingX="15rem"
          marginTop="2rem"
          marginBottom="1rem"
        >
          <Text heading fontSize={"2rem"} color="gray.800">
            All groups
          </Text>
        </Flex>
      </Box>
      <Center bg="bg-slate-100" >
        <SimpleGrid columns={3} spacing={10}>
          {[...RECOMMENDED_LOCAL_GROUPS, ...RECOMMENDED_ONLINE_GROUPS].map(
            (group) => (
              <GroupCard
                name={group.name}
                location={group.location}
                tags={group.tags}
                description={group.description}
                bg={group.bg}
                key={group.name}
              />
            )
          )}
        </SimpleGrid>
      </Center>
    </>
  );
}

const RECOMMENDED_LOCAL_GROUPS = [
  {
    name: "Navy",
    location: "Springfield",
    tags: [
      { name: "Jogging", color: "red" },
      { name: "Tennis", color: "red" },
      { name: "Cooking", color: "green" },
    ],
    description:
      "Join our vibrant community of Navy wives! We're all about jogging, cooking, and outdoor fun. Connect with us and thrive together!",
    bg: "https://www.worldatlas.com/r/w1200-q80/upload/27/56/59/shutterstock-1507067762.jpg",
  },
  {
    name: "Marine Corps",
    location: "Kansas City",
    tags: [
      { name: "Football", color: "red" },
      { name: "Reading", color: "green" },
    ],
    description:
      "Calling all Kansas City Marine Corps wives! Dive into our community of football enthusiasts and bookworms. Join us for meaningful connections and shared interests!",
    bg: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Downtown_-_panoramio_%2815%29.jpg/1200px-Downtown_-_panoramio_%2815%29.jpg",
  },
  {
    name: "Baptist",
    location: "St. Louis",
    tags: [
      { name: "Hiking", color: "red" },
      { name: "Painting", color: "green" },
    ],
    description:
      "Kansas City Baptist wives, unite! Explore our world of hiking and painting enthusiasts. Connect, create, and embrace shared passions with us!",
    bg: "https://www.visittheusa.com/sites/default/files/styles/hero_l/public/images/hero_media_image/2017-02/0%20HERO_StLouis%20-%20shutterstock_166920155_Web72DPI_crop.jpg?h=58765dd8&itok=OgvAlZjy",
  },
];

const RECOMMENDED_ONLINE_GROUPS = [
  {
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
  },
  {
    online: true,
    name: "Navy",
    location: "West Coast",
    tags: [
      { name: "Cooking", color: "green" },
      { name: "Travel", color: "green" },
    ],
    description:
      "West Coast Navy spouses, come together with our diverse community! From cooking to travel, we're here to connect and share our passions.",
    bg: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/US_Pacific_States.svg/1200px-US_Pacific_States.svg.png",
  },
];
