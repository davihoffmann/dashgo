import { Flex, Input, Text, Icon, HStack, Box, Avatar } from '@chakra-ui/react';
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri';

export default function Header() {
  return (
    <Flex as="header" w="100%" h="20" maxWidth={1480} mx="auto" mt="4" px="6" alignItems="center">
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        dashgo
        <Text as="span" ml="1" color="pink.500">.</Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          mr="4"
          px="4"
          placeholder="Buscar na Plataforma"
          _placeholder={{ color: 'gray.400' }}
        />

        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>

      <Flex alignItems="center" marginLeft="auto">
        <HStack 
          spacing="8" mx="8" pr="8" pt="1" 
          color="gray.300" borderRightWidth={1} 
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} />
          <Icon as={RiUserAddLine} />
        </HStack>

        <Flex alignItems="center">
          <Box mr="4" textAlign="right">
            <Text>Davi Hoffmann</Text>
            <Text color="gray.300" fontSize="small">davi.hoffmann@gmail.com</Text>
          </Box>

          <Avatar size="md" name="Davi Hoffmann" src="https://github.com/davihoffmann.png" />
        </Flex>
      </Flex>
    </Flex>
  )
}