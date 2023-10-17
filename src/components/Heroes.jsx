import { Box, Heading, InputGroup, Input, InputRightElement, IconButton } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons"
export default function Heroes() {

  return (
    <Box as="section" bg='grey' textAlign="center">
        <Heading as='h2' size="lg" pt={14} pb={6}>How can we help?</Heading>
        
        <InputGroup pb={20} mx="auto" maxW="300px">
            <Input placeholder='Search' bg="white" />
            <InputRightElement>
                <IconButton variant='unstyled' icon={<ArrowForwardIcon/>} colorScheme='black' size='lg' />
            </InputRightElement>
        </InputGroup>
    </Box>
  )
}