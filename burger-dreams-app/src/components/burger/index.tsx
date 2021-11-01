import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllItemsBurger } from '../../redux/actions/burgerActions';
import BurgerBox from "./burgerBox";
import { SimpleGrid, Center, Flex } from "@chakra-ui/react";
import BurgerCart from "./burgerCart";
import { IBurger } from "../../interfaces/burgerInterface";
interface BurgerProps {

}

const Burger: React.FC<BurgerProps> = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllItemsBurger());
    }, []);

    const { listBurger } = useSelector((state: any) => state.burgerReducer);
    
    return (
        <React.Fragment>
            <Flex color="gray" align="right" justify="right">
                <Center w="100px" >
                    <BurgerCart />
                </Center>
            </Flex>
            <SimpleGrid columns={{ base: 1, md: 3, lg: 5 }} spacing={5} align="center" justify="center">
                {listBurger.map((element: IBurger) =>
                <div key={element.id}>
                    <BurgerBox
                        Burger={element}
                        ImageBox={element.Image}
                        TitleBox={element.Title} 
                        TipoBurgerBox={element.TipoBurger}
                        PrecioBox={element.Price} 
                        RecomentacionBox={element.Recomendacion} 
                    />
                </div>
                )}


            </SimpleGrid>
        </React.Fragment>
    );
}

export default Burger;