import React from 'react';
import { Box, Flex, Avatar, HStack, IconButton, Heading, Button, Menu, MenuButton, MenuList, MenuItem, useDisclosure, useColorModeValue } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import NavLink from './navLink';
import {ILink} from '../../interfaces/linkInterfaces';
import NavMobile from './navMobile';
import userLogo from '../../resources/images/programmer.png';
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
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                  <Avatar
                    size={'sm'}
                    src={userLogo}
                  />
              </MenuButton>
              <MenuList>
                <MenuItem>Cerrar sesion</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
        {isOpen && ( <NavMobile Links={Links}/> ) }
      </Box>
    </React.Fragment>
  )
}
export default Nav;
