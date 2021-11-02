import React from "react";
import { Button } from '@chakra-ui/react';
import BurgerAdd from './burgerAdd';
import { IBurger } from '../../interfaces/burgerInterface';
import { ICart } from '../../interfaces/cartInterface';
import Burger from './index';
interface BurgerOptionProps {
    Burger: IBurger
}


const BurgerOption: React.FC<BurgerOptionProps> = ({Burger}:BurgerOptionProps) => {
    const [unit, setUnit] = React.useState<number>(1);
    const [cart, setCart] = React.useState<ICart[]>([]);

    const addUnit = (): void => {
        (unit < 5) && setUnit(unit + 1);
    }
    const lessUnit = (): void => {
        (unit > 1) && setUnit(unit - 1);
    }
    const addCart = () => {
        let cartBurger: ICart[] = [];
        cartBurger.push({Unit: unit, Burger: Burger})
        setCart({
            ...cart, // Obtenemos elementos con un spread operator
           /*  cart: cartBurger, */
        });
        console.log(cart)
    }
    return (
        <React.Fragment>
            <BurgerAdd addUnit={addUnit} unit={unit} lessUnit={lessUnit}/>
            <Button
                onClick={addCart}
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