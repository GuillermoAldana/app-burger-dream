import { Box, Image, Center, Heading, Text, Stack } from "@chakra-ui/react";
import React from "react";
import BurgerOption from "./burgerOptions";
import { IBurger } from '../../interfaces/burgerInterface';
import { BsStarFill } from "react-icons/bs";
interface BurgerListProps {
    ImageBox: string;
    TitleBox: string;
    TipoBurgerBox: string;
    PrecioBox: number;
    RecomentacionBox: number;
    Burger: IBurger;
    
}

const BurgerBox: React.FC<BurgerListProps> = ({ ImageBox, TitleBox, TipoBurgerBox, PrecioBox, RecomentacionBox, Burger }: BurgerListProps) => {
    const assignedStar = (recomendation : number) => {
        const star:number[] = Array(recomendation).fill(0)
        return star.map(item => <BsStarFill key={item}/>);
    }
    return (
        <React.Fragment>
            <Center align="right" justify="right">
                <Box
                    bg={'white'}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    overflow={'hidden'}>
                    <Image
                        h={'170px'}
                        w={'full'}
                        src={ImageBox}
                        objectFit={'cover'}
                    />
                    <Box p={6}>
                        <Stack spacing={0} align={'center'} mb={5}>
                            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                                {TitleBox}
                            </Heading>
                            <Text color={'gray.500'}>{TipoBurgerBox}</Text>
                        </Stack>
                        <Stack direction={'row'} justify={'center'} spacing={6}>
                            <Stack spacing={0} align={'center'}>
                                <Text fontWeight={600}>{PrecioBox}</Text>
                                <Text fontSize={'sm'} color={'gray.500'}>
                                Precio
                                </Text>
                            </Stack>
                            <Stack spacing={0} align={'center'}>
                                <Text fontWeight={600} display={'flex'}>{assignedStar(RecomentacionBox)}</Text>
                                <Text fontSize={'sm'} color={'gray.500'}>
                                    Recomendación
                                </Text>
                            </Stack>
                        </Stack>
                        <BurgerOption Burger={Burger}/>
                    </Box>
                </Box>
            </Center>
        </React.Fragment>
    );
}

export default BurgerBox;