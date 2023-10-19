import { Flex, SimpleGrid, Box, Heading, Text, Button } from "@chakra-ui/react";

export default function Card() {
  return (
    <Flex bg="white" h='100vh' justify='center' align='center'>
      <SimpleGrid columns={2} spacing={10} pt={8} pb={20}>
        <Box h='200px' textAlign='center'>
          <Heading as='b'>Branches</Heading>
          <Text fontSize='xs' pt={3}>Abstract Branches lets you manage, version and document your designs in one place.</Text>
          <Button variant='link' color='blue' pt={4}>Learn More</Button>
        </Box>
        <Box h='200px' textAlign='center'>
          <Heading as='b'>Manage your account</Heading>
          <Text fontSize='xs' pt={3}>Configure your account settings, such as your email, profile details and password.</Text>
          <Button variant='link' color='blue' pt={4}>Learn More</Button>
        </Box>
        <Box h='200px' textAlign='center'>
          <Heading as='b'>Manage organizations, teams and projects</Heading>
          <Text fontSize='xs' pt={3}>Use Abstract organizations, teams, and projects to organize your people and your work.</Text>
          <Button variant='link' color='blue' pt={4}>Learn More</Button>
        </Box>
        <Box h='80px' textAlign='center'>
          <Heading as='b'>Manage billing</Heading>
          <Text fontSize='xs' pt={3}>Change Subscriptions and payment details.</Text>
          <Button variant='link' color='blue' pt={4}>Learn More</Button>
        </Box>
        <Box h='80px' textAlign='center'>
          <Heading as='b'>Authenticate to Abstract</Heading>
          <Text fontSize='xs' pt={3}>Set up and configure SSO, SCIM, and Just-in-Time provisioning.</Text>
          <Button variant='link' color='blue' pt={4}>Learn More</Button>
        </Box>
        <Box h='80px' textAlign='center'>
          <Heading as='b'>Abstract support</Heading>
          <Text fontSize='xs' pt={3}>Get in touch with a human.</Text>
          <Button variant='link' color='blue' pt={4}>Learn More</Button>
        </Box>
      </SimpleGrid>
    </Flex>
  )
}
