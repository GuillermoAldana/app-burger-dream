import React from 'react';
import { Box, Flex,Text, HStack, IconButton, Heading, useDisclosure, useColorModeValue } from '@chakra-ui/react';
import NavLink from './navLink';
import NavUser from './navUser';
import NavMobile from './navMobile';
import { ILink } from '../../interfaces/linkInterface';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useSelector } from 'react-redux';

const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const Links: Array<ILink> = [{ Title: 'Home', Enlace: '/' }, { Title: 'Burger', Enlace: '/BurgerList' }];
  const { user } = useSelector((state: any) => state.UserReducer);
  return (
    <React.Fragment>
      <Box bg={useColorModeValue('#37393a', '#37393a')} color='white' px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            bg={useColorModeValue('#37393a', '#37393a')} 
            color='white'
            _hover={{
              textDecoration: 'none',
              bg: useColorModeValue('#404648', '#404648'),
            }}
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Heading as="h3" size="lg">Burger <Text as='span' color='#f36767'>Dreams</Text></Heading>
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
          {user.length !== 0 ? 
            <NavUser /> :
            <NavLink
            key={'Login'}
            Title={'Login'}
            Enlace={'/Login'} />
          }
            
          </Flex>
        </Flex>
          {isOpen && (<NavMobile Links={Links} />)}
      </Box>
    </React.Fragment>
  )
}
export default Nav;
