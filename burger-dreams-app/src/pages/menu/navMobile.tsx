import React from 'react';
import {Box, Stack} from '@chakra-ui/react';
import {ILink} from '../../interfaces/linkInterfaces';
import NavLink from './navLink';
const NavMobile: React.FC<any> = ({Links}) => {
    return ( 
        <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((item: ILink) => (
                  <NavLink 
                  key={item.Title} 
                  Title={item.Title} 
                  Enlace={item.Enlace} />
              ))}
            </Stack>
          </Box>
     );
}
 
export default NavMobile;