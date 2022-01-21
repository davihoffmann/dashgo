import { Flex, useBreakpointValue } from '@chakra-ui/react';
import Logo from './Logo';
import NotificationsNav from './NotificationsNav';
import Profile from './Profile';
import SearchBox from './SearchBox';

export default function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Flex as="header" w="100%" h="20" maxWidth={1480} mx="auto" mt="4" px="6" alignItems="center">
      <Logo />
      {
        isWideVersion && (
          <SearchBox />
        )
      }
      
      <Flex alignItems="center" marginLeft="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}