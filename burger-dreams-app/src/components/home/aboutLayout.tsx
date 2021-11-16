import { Box, Text, Heading, Divider, Stack, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import Verduras from '../../resources/images/verduras.png'
import Burger from '../../resources/images/burger.jpg';
import Fritas from '../../resources/images/Fritas.png';
import AboutIcon from './aboutIcon';

const AboutLayout: React.FC<any> = () => {
    
    return (
        <React.Fragment>
            <Box mx='10' mt='50px' ml='5'>
                <Stack spacing={3}>
                    <Heading as="h1" size="4xl">
                        Burger <Text as='span' color='#f36767'>Dreams</Text>
                    </Heading>
                    <Divider />
                    <Text fontSize="lg" mt='20px'>
                        Hamburguesas y Papas fritas. Es un concepto decididamente sencillo a primera vista.
                        Pero si pruebas una BurgerDream, te sorprenderá el sabor de la perfección de las hamburguesas.
                    </Text>
                    <Text fontSize='lg'>
                        Nuestra comida es ética, nutritiva y deliciosa, y eso es algo que nunca pondremos en peligro. Creemos en el poder de la comida para unir a la gente,
                        y además de ofrecer un servicio genuino y elegante, queríamos ser un lugar de encuentro relajado donde los amigos y la familia pudieran tener grandes charlas y
                        estrechar lazos con una hamburguesa.
                        Si podemos alegrar el día de alguien sentándose y echando unas risas mientras se come algo delicioso, sabemos que estamos haciendo bien nuestro trabajo.
                    </Text>
                </Stack>
                <Box p={4} >
                    <SimpleGrid columns={{ base: 3, md: 3 }} spacing={10} >
                        <AboutIcon title={'Productos / Calidad'} image={Verduras} />
                        <AboutIcon title={'Burger Caseras'} image={Burger} />
                        <AboutIcon title={'Hecho con Amor'} image={Fritas} />
                    </SimpleGrid>
                </Box>
            </Box>
        </React.Fragment>
    )
}
export default AboutLayout;