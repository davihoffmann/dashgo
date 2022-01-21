import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export default function Perfil() {
  return (
    <Flex alignItems="center">
      <Box mr="4" textAlign="right">
        <Text>Davi Hoffmann</Text>
        <Text color="gray.300" fontSize="small">davi.hoffmann@gmail.com</Text>
      </Box>

      <Avatar size="md" name="Davi Hoffmann" src="https://github.com/davihoffmann.png" />
    </Flex>
  );
} 