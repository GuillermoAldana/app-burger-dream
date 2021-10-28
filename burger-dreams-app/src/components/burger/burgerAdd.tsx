import React from 'react';
import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Stack } from '@chakra-ui/layout';

interface BurgerAddProps {
   /*  handleAdd: void;
    handleLess: void;
    valueCount: number; */
}

const BurgerAdd: React.FC<BurgerAddProps> = (props: BurgerAddProps) => {

    return (
        <Stack>
            <Button colorScheme="teal" size="sm" >
                -
            </Button>
            <Input isReadOnly={true}/>
            <Button colorScheme="teal" size="sm">
                +
            </Button>
        </Stack>
    );
}

export default BurgerAdd;