import React from 'react';
import userLogo from '../../resources/images/programmer.png';
import { Avatar, Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

const navUser: React.FC<any> = () => {
    return (
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
    );
}

export default navUser;