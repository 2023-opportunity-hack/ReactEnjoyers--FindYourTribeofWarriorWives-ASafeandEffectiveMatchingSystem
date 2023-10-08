"use client";
import {
  Box,
  Text,
  InputGroup,
  Input,
  InputRightElement,
  Flex,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Image from "next/image";
import Carousel from "./Carousel";

export default function Home() {
  return (
    <Box>
      <Flex flexDir={"column"} gap='1rem' paddingX='5rem' marginBottom='1rem'>
        <InputGroup size='lg'>
          <Input placeholder='Search' />
          <InputRightElement>
            <SearchIcon></SearchIcon>
          </InputRightElement>
        </InputGroup>
        <Text heading fontSize={"2rem"} color='gray.800'>
          Recommended groups near you
        </Text>
      </Flex>
      <Carousel groups={RECOMMENDED_LOCAL_GROUPS} />
      <Flex flexDir={"column"} gap='1rem' paddingX='5rem' marginY='1rem'>
        <Text heading fontSize={"2rem"} color='gray.800'>
          Recommended online groups for you
        </Text>
      </Flex>
      <Carousel groups={RECOMMENDED_ONLINE_GROUPS} />
    </Box>
  );
}

const RECOMMENDED_LOCAL_GROUPS = [
  {
    service: "Navy",
    location: "Springfield",
    tags: [
      { name: "Jogging", color: "red" },
      { name: "Tennis", color: "red" },
      { name: "Christian", color: "blue" },
      { name: "Cooking", color: "green" },
    ],
    description:
      "Join our vibrant community of Navy wives! We're all about jogging, cooking, and outdoor fun. Connect with us and thrive together!",
    bg: "https://www.worldatlas.com/r/w1200-q80/upload/27/56/59/shutterstock-1507067762.jpg",
  },
  {
    service: "Marine Corps",
    location: "Kansas City",
    tags: [
      { name: "Football", color: "red" },
      { name: "Reading", color: "green" },
      { name: "Baptist", color: "blue" },
      { name: "Christian", color: "blue" },
    ],
    description:
      "Calling all Kansas City Marine Corps wives! Dive into our community of football enthusiasts and bookworms. Join us for meaningful connections and shared interests!",
    bg: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Downtown_-_panoramio_%2815%29.jpg/1200px-Downtown_-_panoramio_%2815%29.jpg",
  },
  {
    service: "Air Force",
    location: "St. Louis",
    tags: [
      { name: "Hiking", color: "red" },
      { name: "Painting", color: "green" },
    ],
    description:
      "Kansas City Air Force wives, unite! Explore our world of hiking and painting enthusiasts. Connect, create, and embrace shared passions with us!",
    bg: "https://www.visittheusa.com/sites/default/files/styles/hero_l/public/images/hero_media_image/2017-02/0%20HERO_StLouis%20-%20shutterstock_166920155_Web72DPI_crop.jpg?h=58765dd8&itok=OgvAlZjy",
  },
];

const RECOMMENDED_ONLINE_GROUPS = [
  {
    online: true,
    service: "Marine Corps",
    location: "Midwest",
    tags: [
      { name: "Hiking", color: "red" },
      { name: "Painting", color: "green" },
      { name: "Online Gaming", color: "green" },
      { name: "Book Club", color: "green" },
      { name: "Christian", color: "blue" },
    ],
    description:
      "Midwest Marine Corps spouses, discover the great outdoors with our hiking and painting enthusiasts. Join us for gaming and book club fun!",
    bg: "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/2019-8/couple-hiking-mountain-climbing-1296x728-header.jpg?w=1155&h=1528",
  },
  {
    online: true,
    service: "Navy",
    location: "West Coast",
    tags: [
      { name: "Jewish", color: "blue" },
      { name: "Cooking", color: "green" },
      { name: "Travel", color: "green" },
    ],
    description:
      "West Coast Navy spouses, come together with our diverse community! From cooking to travel, we're here to connect and share our passions.",
    bg: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/US_Pacific_States.svg/1200px-US_Pacific_States.svg.png",
  },
];
