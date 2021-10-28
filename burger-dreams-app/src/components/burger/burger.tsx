import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import BurgerBox from './burgerBox';
interface BurgerProps {
    
}
 
const Burger: React.FC<BurgerProps> = () => {
    return ( 
        <React.Fragment>
        <SimpleGrid columns={{ base: 1, md: 5 }} spacing={3}>
            <BurgerBox  
            ImageBox={'https://bigseventravel.com/wp-content/uploads/2019/05/Screenshot-2019-05-07-at-20.15.55.png'} TitleBox={'Title'} TipoBurgerBox={'Veggie'} 
            PrecioBox={10} RecomentacionBox={4} />
            <BurgerBox  
            ImageBox={'https://bigseventravel.com/wp-content/uploads/2019/05/Screenshot-2019-05-07-at-20.15.55.png'} TitleBox={'Title'} TipoBurgerBox={'Veggie'} 
            PrecioBox={10} RecomentacionBox={4} />
            <BurgerBox  
            ImageBox={'https://bigseventravel.com/wp-content/uploads/2019/05/Screenshot-2019-05-07-at-20.15.55.png'} TitleBox={'Title'} TipoBurgerBox={'Veggie'} 
            PrecioBox={10} RecomentacionBox={4} />
            <BurgerBox  
            ImageBox={'https://bigseventravel.com/wp-content/uploads/2019/05/Screenshot-2019-05-07-at-20.15.55.png'} TitleBox={'Title'} TipoBurgerBox={'Veggie'} 
            PrecioBox={10} RecomentacionBox={4} />

        </SimpleGrid>
        </React.Fragment>
     );
}
 
export default Burger;