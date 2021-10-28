import React from "react";
import {useEffect} from "react";
import BurgerBox from "./burgerBox";
import { SimpleGrid } from "@chakra-ui/react";
import * as BurgerServices from "../../services/burgerServices";
interface BurgerProps {
    
}
 
const Burger: React.FC<BurgerProps> = () => {
    useEffect(()=>{
        BurgerServices.getBurgers().then(response => {
           console.log(response);
          });;
    },[])
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