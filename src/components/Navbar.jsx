import {
  Flex,
  Box,
  Heading,
  Divider,
  Stack,
  Input,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { UnlockIcon } from "@chakra-ui/icons";

export default function Navbar() {
  return (
    <Flex as="nav" alignItems="center" bg="black">
      <UnlockIcon color="white" mb={2} ml={5} />
      <Flex gap={1} m={5}>
        <Box>
          <Heading as="h6" size="xs" mb={2} color="white">
            Abstract
          </Heading>
        </Box>
        <Divider orientation="vertical" mx={4} height="20px" bg="white" />
        <Heading as="h6" size="xs" mb={2} color="white">
          Help Center
        </Heading>
      </Flex>

      <Spacer />

      <Flex gap={2} alignItems="center" mr={5}>
        <Stack direction='row' spacing={2}>
          <Input placeholder="Submit a request" color="white" />
        </Stack>
        <Button type="submit" colorScheme="blue">
          Sign In
        </Button>
      </Flex>
    </Flex>
  );
}
