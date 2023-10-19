import { Box, Flex, Heading, Spacer, Text } from '@chakra-ui/react';
import { UnlockIcon } from "@chakra-ui/icons";

export default function Footer() {
  return (
    <Box bg="black" h="100vh">
        <Flex as="nav" justify='space-around' pb={20}>
            <Box>
                <Heading as='h6' size="sm" color="white" m={12}>Abstract</Heading>
                <Text fontSize="xs" color="white" m={10}>Branches</Text>
            </Box>
            <Spacer />
            <Box>
                <Heading as='h6' size="sm" color="white" m={12}>Resources</Heading>
                <Text fontSize="xs" color="white" ml={10}>Blog</Text>
                <Text fontSize="xs" color="white" ml={10} >Help Center</Text>
                <Text fontSize="xs" color="white" ml={10}>Release Notes</Text>
                <Text fontSize="xs" color="white" ml={10}>Status</Text>
            </Box>
            <Spacer />
            <Box>
                <Heading as='h6' size="sm" color="white" m={12}>Community</Heading>
                <Text color="white" fontSize="xs" ml={12}>Twitter</Text>
                <Text color="white" fontSize="xs" ml={12}>LinkedIn</Text>
                <Text color="white" fontSize="xs" ml={12}>Facebook</Text>
                <Text color="white" fontSize="xs" ml={12}>Dribble</Text>
                <Text color="white" fontSize="xs" ml={12}>Podcast</Text>
            </Box>
            <Spacer />
            <Box>
                <Heading as='h6' size="sm" color="white" m={12}>Company</Heading>
                <Text color="white" fontSize="xs" ml={12}>About Us</Text>
                <Text color="white" fontSize="xs" ml={12}>Careers</Text>
                <Text color="white" fontSize="xs" ml={12}>Legal</Text>
                <Box pt={10}>
                    <Text as="b" color="white" fontSize="xs" ml={12}>Contact Us</Text>
                    <Text color="white" fontSize="xs" ml={12}>info@abstract.com</Text>
                </Box>
            </Box>
        </Flex>

        <Flex justify='center' pt={10}>
            <Box align='center' textAlign='center'>
                <UnlockIcon color="white" fontSize="xs"/>
                <Text as='p' color="white">&copy; Copyright 2022<br />Abstract Studio Design, Inc.<br />All rights reserved</Text>
            </Box>
        </Flex>
    </Box>
  )
}