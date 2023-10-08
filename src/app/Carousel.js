"use client";
import { Box, Flex, Tag, Text, Badge, Button } from "@chakra-ui/react";
import useEmblaCarousel from "embla-carousel-react";

export default function Carousel({ groups }) {
  const [emblaRef] = useEmblaCarousel({ loop: true });
  return (
    <Box overflow={"hidden"} ref={emblaRef}>
      <Flex h={"30rem"}>
        {groups.map((g) => (
          <>
            <Box
              flex={"0 0 100%"}
              minW={0}
              bgImage={`url(${g.bg})`}
              bgPosition='center'
              bgRepeat='no-repeat'
              bgSize='cover'
            >
              <Box
                position='absolute'
                w='full'
                h='full'
                bg='gray.800'
                opacity={0.7}
              />
              <Box
                paddingX={"12rem"}
                paddingY={"5rem"}
                position='relative'
                zIndex={1}
              >
                {g.online && <Tag colorScheme="blue" marginRight="1rem">Online Only</Tag>}
                <Tag colorScheme="orange">{g.name}</Tag>
                <Text
                  heading
                  fontWeight={"bold"}
                  fontSize={"3rem"}
                  color='white'
                >{`${g.name} Warrior Wives of ${g.location}`}</Text>
                <Text
                  fontWeight={"semibold"}
                  color='gray.200'
                >{`${g.location}, Missouri`}</Text>
                {g.tags.map((t) => (
                  <Badge marginRight={"0.5rem"} colorScheme={t.color}>
                    {t.name}
                  </Badge>
                ))}
                <Text
                  subheading
                  color='white'
                  marginTop='1rem'
                >{`${g.description}`}</Text>
                <Box marginTop={"1rem"}>
                  <Button size='sm'>View Group</Button>
                </Box>
              </Box>
            </Box>
          </>
        ))}
      </Flex>
    </Box>
  );
}
