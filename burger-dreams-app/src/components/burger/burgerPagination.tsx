import React from 'react';
import { Button } from '@chakra-ui/react';
interface BurgerPaginationProps {

}

const BurgerPagination: React.FC<BurgerPaginationProps> = (props: any) => {
    return (
            <Button
                variant={props.isActive ? "solid" : "outline"}
                colorScheme={props.isActive ? "teal" : "gray"}
                isDisabled={props.isDisabled}
                onClick={props.onClick}>
                {props.children}
            </Button>
    );
}

export default BurgerPagination;