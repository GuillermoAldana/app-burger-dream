import React from 'react';
import {
  Link,
  useColorModeValue
} from '@chakra-ui/react';
import { ILink } from './../../interfaces/linkInterfaces'
const NavLink = (props: ILink) => {
  return(
      <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={props.Enlace}>
      {props.Title}
    </Link>
  );
} 
export default NavLink;