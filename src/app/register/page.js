"use client";

import {
  Flex,
  Box,
  Stack,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const sandboxClientId = "e179e357750320e2e652c80b61c4dc02";
const sandboxRedirectUri = "https://0t3e4.csb.app/sandbox/callback";
const responseType = "token";
const scopes = ["identity", "military_us"].join(",");

const groupsEndpoint = () => {
  const endpoint = "https://groups.id.me";
  const parameters = [
    `client_id=${sandboxClientId}`,
    `redirect_uri=${sandboxRedirectUri}`,
    `response_type=${responseType}`,
    `scopes=${scopes}`,
  ];
  parameters.push(`sandbox=true`);

  return `${endpoint}?${parameters.join("&")}`;
};

export default function Register() {
  return (
    <Flex
      minH={"80vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"2xl"}>Register an account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <Stack spacing={5} justify={"center"} align={"center"}>
              {/* <Image
              width={100}
              height={50}
                src={
                  "https://s3.amazonaws.com/idme-design/brand-assets/Primary-IDme-Logo-RGB.png"
                }
                alt="ID.me Logo"
              /> */}
              <Heading fontSize={"xl"}>Welcome to Warrior Wives!</Heading>
              <Link href={groupsEndpoint()}>
                <Image
                  width={300}
                  height={50}
                  src="https://s3.amazonaws.com/idme/buttons/v4/verify-with-idme-green.png"
                  alt="Verify with ID.me"
                  className="responsive-img"
                />
              </Link>
              <Text fontSize="sm">
                ID.me is a trusted technology partner in helping to keep your
                personal information safe. We specialize in digital identity
                protection and help partners make sure you&#39;re you—and not
                someone pretending to be you—before giving you access to your
                information or offer.
              </Text>
              <ChakraLink
                href={"https://www.id.me/about"}
                target="_blank"
                rel="noreferrer"
                color={"blue.400"}
              >
                Learn more about ID.me
              </ChakraLink>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
