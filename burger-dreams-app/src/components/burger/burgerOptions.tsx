import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from '@chakra-ui/react';
import BurgerAdd from './burgerAdd';
import { IBurger } from '../../interfaces/burgerInterface';
import { ICart } from '../../interfaces/cartInterface';
import {addCartItem} from '../../redux/actions/cartActions';


interface BurgerOptionProps {
    Burger: IBurger
}


const BurgerOption: React.FC<BurgerOptionProps> = ({Burger}:BurgerOptionProps) => {
    const [unit, setUnit] = React.useState<number>(1);
    const { listCart } = useSelector((state: any) => state.cartReducer);
    
    const dispatch = useDispatch();
    const addUnit = (): void => {
        (unit < 5) && setUnit(unit + 1);
    }
    const lessUnit = (): void => {
        (unit > 1) && setUnit(unit - 1);
    }
    const addCart = () => {
       
        let cartArray: ICart = {Unit: unit, BurgerItem: Burger}
        const existItem: ICart[] = listCart.find((element: ICart) => element.BurgerItem.id === Burger.id);
        (!existItem) && dispatch(addCartItem(cartArray));
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