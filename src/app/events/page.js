import Link from "next/link";
import React from "react";
import EventCard from "../components/eventCard";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import LongEventCard from "../components/longEventCard";
import { events } from "../../../content";

export default function Events() {
  return (
    <div className="max-w-[1200px] m-auto">
      <Tabs variant="soft-rounded" colorScheme="orange">
        <TabList>
          <Tab>Army</Tab>
          <Tab>Religion</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div className="flex flex-col gap-4">
              {events.map((event) => {
                return <LongEventCard key={event.id} event={event} />;
              })}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex flex-col gap-4">
              {events.map((event) => {
                return <LongEventCard key={event.id} event={event} />;
              })}
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
