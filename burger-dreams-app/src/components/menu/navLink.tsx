
import {
  Link,
  useColorModeValue
} from '@chakra-ui/react';
import { ILink } from '../../interfaces/linkInterface'
const NavLink = (props: ILink) => {
  return(
      <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('#404648', '#404648'),
      }}
      href={props.Enlace}>
      {props.Title}
    </Link>
  );
} 
export default NavLink;