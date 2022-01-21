import { Flex } from '@chakra-ui/react';
import Logo from './Logo';
import NotificationsNav from './NotificationsNav';
import Perfil from './Perfil';
import SearchBox from './SearchBox';

export default function Header() {
  return (
    <Flex as="header" w="100%" h="20" maxWidth={1480} mx="auto" mt="4" px="6" alignItems="center">
      <Logo />
      <SearchBox />
      <Flex alignItems="center" marginLeft="auto">
        <NotificationsNav />
        <Perfil />
      </Flex>
    </Flex>
  );
}