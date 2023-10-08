"use client";

import React from "react";
import EventCard from "../components/eventCard";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
} from "@chakra-ui/react";
import LongEventCard from "../components/longEventCard";
import { events } from "../../../content";

function getAllUniqueInterests(events) {
  const uniqueInterests = new Set();

  for (const event of events) {
    uniqueInterests.add(event.interest);
  }

  const uniqueInterestsArray = Array.from(uniqueInterests);

  return uniqueInterestsArray;
}

export default function GroupEvents() {
  const uniqueInterests = getAllUniqueInterests(events);

  return (
    <div className="max-w-[1200px] m-auto">
      <Text heading fontSize={"2rem"} color="gray.800">
        Explore events near you
      </Text>

      {uniqueInterests.map((uniqueInterests) => {
        return (
          <div className="flex flex-col gap-4">
            {events
              .filter((event) => event.interest === uniqueInterests)
              .map((event) => {
                return <LongEventCard key={event.id} event={event} />;
              })}
          </div>
        );
      })}
      {/* <Tabs variant="soft-rounded" colorScheme="orange">
        <TabList>
          {uniqueInterests.map((interest) => {
            return <Tab>{interest}</Tab>;
          })}
        </TabList>
        <TabPanels>
        </TabPanels>
      </Tabs> */}
    </div>
  );
}
