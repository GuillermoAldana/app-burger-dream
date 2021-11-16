import React from 'react';
import { useDispatch } from 'react-redux';
import userLogo from '../../resources/images/programmer.png';
import { Avatar, Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { setLogout } from '../../redux/actions/userActions';
import { useHistory } from 'react-router-dom';

const NavUser = () => {
    let history = useHistory();
    const dispatch = useDispatch();
    const redirectLogout = () =>{
        dispatch(setLogout())
        history.push('/');
    }
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
                <MenuItem onClick={() => { redirectLogout() }}>Cerrar sesion</MenuItem>
            </MenuList>
        </Menu>
    );
}

export default NavUser;