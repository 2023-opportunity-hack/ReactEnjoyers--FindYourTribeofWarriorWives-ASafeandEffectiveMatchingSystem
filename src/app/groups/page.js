"use client";

import React from "react";
import {
  Center,
  SimpleGrid,
} from "@chakra-ui/react";
import GroupCard from "../components/groupCard";

const GROUPS_JOINED = [
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

export default function Groups() {
  return (
    <Center bg='bg-slate-100 pt-10 pb-10'>
    <SimpleGrid columns={4} spacing={10}>
      {GROUPS_JOINED.map((group) => (
        <GroupCard
          name={group.name}
          location={group.location}
          tags={group.tags}
          description={group.description}
          bg={group.bg}
          key={group.name}
        />
      ))}
    </SimpleGrid>
    </Center>
  );
}
