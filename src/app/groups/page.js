"use client";

import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
} from "@chakra-ui/react";
import { events } from "../../../content";
import EventCard from "../components/eventCard";
import { SimpleGrid } from "@chakra-ui/react";

export default function Groups() {
  return (
    <div className="max-w-[1200px] m-auto">
      <Heading className="mb-4">Explore all groups available</Heading>

      <SimpleGrid columns={[2, null, 3]} spacing="20px">
        <EventCard id="group1"/>
        <EventCard id="group2"/>
        <EventCard id="group3"/>
        <EventCard id="group4"/>
      </SimpleGrid>
    </div>
  );
}
