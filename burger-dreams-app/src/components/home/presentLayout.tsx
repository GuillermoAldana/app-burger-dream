import { Flex, Image } from '@chakra-ui/react';
import imageLogo from './../../resources/images/imageBurger.png'
import React from 'react';

const PresentLayout = () =>
{
    return(
        <React.Fragment>
            <Flex align='center' mx='2'>
            <Image src={imageLogo}
                alt="Segun Adebayo" 
                boxSize="450px"
                objectFit="cover"/>
            </Flex>
        </React.Fragment>
    )
}
export default PresentLayout;