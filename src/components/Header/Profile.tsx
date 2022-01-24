import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export default function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex alignItems="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>
            Davi Hoffmann
          </Text>
          <Text color="gray.300" fontSize="small">
            davi.hoffmann@gmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Davi Hoffmann" src="https://github.com/davihoffmann.png" />
    </Flex>
  );
} 