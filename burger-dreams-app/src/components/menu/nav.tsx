import React from 'react';
import { Box, Flex, HStack, IconButton, Heading, useDisclosure, useColorModeValue } from '@chakra-ui/react';
import NavLink from './navLink';
import NavUser from './navUser';
import NavMobile from './navMobile';
import { ILink } from '../../interfaces/linkInterfaces';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const Links: Array<ILink> = [{ Title: 'Home', Enlace: '/' }, { Title: 'Productos', Enlace: '/Productos' }, { Title: 'Login', Enlace: '/Login' }];

  return (
    <React.Fragment>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Heading as="h3" size="lg">BurgerDream</Heading>
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((item: ILink) => (
                <NavLink
                  key={item.Title}
                  Title={item.Title}
                  Enlace={item.Enlace} />
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <NavUser />
          </Flex>
        </Flex>
          {isOpen && (<NavMobile Links={Links} />)}
      </Box>
    </React.Fragment>
  )
}
export default Nav;
