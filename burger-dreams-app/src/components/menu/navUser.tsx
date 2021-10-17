import React from 'react';
import userLogo from '../../resources/images/programmer.png';
import { Avatar, Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

const NavUser = () => {
    return (
        <Menu>
            <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
                color={'gray'}>
                
                <Avatar
                    size={'sm'}
                    src={userLogo}
                />
            </MenuButton>
            <MenuList color={'#37393a'}>
                <MenuItem>Cerrar sesion</MenuItem>
            </MenuList>
        </Menu>
    );
}

export default NavUser;