import React from "react";
import {useState} from 'react';
import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react';
import BurgerAdd from './burgerAdd';
interface BurgerOptionProps {

}


const BurgerOption: React.FC<BurgerOptionProps> = () => {

    return (
        <React.Fragment>
            <BurgerAdd />
            <Button
                w={'full'}
                mt={8}
                bg={'#151f21'}
                color={'white'}
                rounded={'md'}
                _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                }}>
                Agregar carrito
            </Button>
        </React.Fragment>
    );
}

export default BurgerOption;