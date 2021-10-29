import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllItemsBurger } from '../../redux/actions/burgerActions';
import BurgerBox from "./burgerBox";
import { SimpleGrid, Center, Flex } from "@chakra-ui/react";
import BurgerCart from "./burgerCart";
interface BurgerProps {

}

const Burger: React.FC<BurgerProps> = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllItemsBurger());
        
    }, [])
    return (
        <React.Fragment>
            <Flex color="gray" align="right" justify="right">
                <Center w="100px" colorScheme="teal" >
                     <BurgerCart />
                </Center>
            </Flex>
            <SimpleGrid columns={{ base: 1, md: 3, lg: 5}}  spacing={5} align="center" justify="center">
                <BurgerBox
                    ImageBox={'https://bigseventravel.com/wp-content/uploads/2019/05/Screenshot-2019-05-07-at-20.15.55.png'} TitleBox={'Title'} TipoBurgerBox={'Veggie'}
                    PrecioBox={10} RecomentacionBox={4} />

            </SimpleGrid>
        </React.Fragment>
    );
}

export default Burger;