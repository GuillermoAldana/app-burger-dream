import { Flex, Image } from '@chakra-ui/react';
import imageLogo from './../../resources/images/BurgerPortada.jpg'
import React from 'react';

const PresentLayout = () =>
{
    return(
        <React.Fragment>
            <Flex mx='2' justify='center'>
            <Image src={imageLogo}
                borderWidth="1px"
                borderRadius="lg"
                alt="Portada"
                width='100%' 
                
                objectFit="cover"/>
            </Flex>
        </React.Fragment>
    )
}
export default PresentLayout;