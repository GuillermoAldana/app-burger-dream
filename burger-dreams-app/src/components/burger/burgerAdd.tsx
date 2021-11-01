import React from 'react';
import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Stack } from '@chakra-ui/layout';

interface BurgerAddProps {
    addUnit: () => void;
    lessUnit: () => void;
    unit: number;
}

const BurgerAdd: React.FC<BurgerAddProps> = ({addUnit, lessUnit, unit}: BurgerAddProps) => {

    return (
        <Stack direction="row" >
            <Button colorScheme="teal" size="sm" onClick={lessUnit} maxW={20}>
                -
            </Button>
            <Input isReadOnly={true} size="sm" value={unit} />
            <Button colorScheme="teal" size="sm" onClick={addUnit} maxW={20}>
                +
            </Button>
        </Stack>
    );
}

export default BurgerAdd;