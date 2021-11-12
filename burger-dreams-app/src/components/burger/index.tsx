import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllItemsBurger } from '../../redux/actions/burgerActions';
import { SimpleGrid, Center, Flex, Box, HStack, Text, Divider } from '@chakra-ui/react';
import { Pagination } from 'react-stitches-paginator';
import { IBurger } from '../../interfaces/burgerInterface';
import BurgerCart from "./burgerCart";
import BurgerBox from "./burgerBox";
import BurgerPagination from './burgerPagination';



interface BurgerProps {

}

const Burger: React.FC<BurgerProps> = () => {

    const dispatch = useDispatch();
    const { listBurger } = useSelector((state: any) => state.burgerReducer);
    const totalPages: number = Math.ceil(listBurger.length / 5);
    const itemsPerPage: number = 5;
    const [page, setPage] = React.useState(1);

    useEffect(() => {
        dispatch(getAllItemsBurger());
    }, []);


    const setPaginate = (listBurger: IBurger[]): IBurger[] => listBurger.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    return (
        <React.Fragment>
            <Flex color="gray" align="right" justify="right">
                <Box width={'100%'}>
                    <Text fontSize="lg" color="gray.700" fontWeight='600' mt='7' ml='2'> Seleccione su pedido</Text>
                    <Text fontSize="xs" color="gray.500" ml='2'>Recuerde, solo puede seleccionar una hamburguesa a la vez. Si desea modificar su unidad. Vuelva a cargarla.</Text>
                    <Divider></Divider>
                </Box>
                <Center w="100px" >
                    <BurgerCart />
                </Center>
            </Flex>

            <SimpleGrid columns={{ base: 1, md: 3, lg: 5 }} spacing={5} align="center" justify="center">

                {setPaginate(listBurger).map((element: IBurger) =>
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
                <Box align={'center'}>
                    <Pagination
                        as={HStack}
                        spacing="10px"
                        totalPages={totalPages}
                        currentPage={page}
                        onPageChange={setPage}
                        itemComponent={BurgerPagination}
                        labels={{
                            previous: "Prev",
                            next: "Next",
                            first: false,
                            last: false,
                            page: (page) => `${page}`
                        }}
                    />
                </Box>
            </SimpleGrid>
        </React.Fragment>
    );
}

export default Burger;