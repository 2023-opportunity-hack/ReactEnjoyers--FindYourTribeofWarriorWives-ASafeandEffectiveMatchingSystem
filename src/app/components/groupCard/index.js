import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Stack,
  Tag,
  Text,
  Button,
} from "@chakra-ui/react";

export default function GroupCard({ name, location, tags, description, bg }) {
  return (
    <Card maxW='xs' cursor={"pointer"}>
      <CardBody>
        <Image
          src={bg}
          alt='Green double couch with wooden legs'
          borderRadius='lg'
          h={48}
          fit='cover'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{`${name} - ${location}`}</Heading>
          <HStack spacing={3}>
            {tags.map((tag) => (
              <Tag
                size='md'
                key={tag.name}
                variant='solid'
                colorScheme={tag.color}
              >
                {tag.name}
              </Tag>
            ))}
          </HStack>
          <Text fontSize='sm'>{description}</Text>
          <Button size='sm' as={"a"} href={"/groups/1"}>
            Join group
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
}
