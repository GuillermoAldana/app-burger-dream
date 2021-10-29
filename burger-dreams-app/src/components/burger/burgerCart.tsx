import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
    IconButton, Button, Box, DrawerCloseButton, Drawer, DrawerOverlay, DrawerFooter, DrawerContent, DrawerHeader, DrawerBody,
    Stack, useDisclosure
} from '@chakra-ui/react';
interface BurgerCartProps {

}

const BurgerCart: React.FC<BurgerCartProps> = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const handleClick = () => {
        onOpen();
    }
    return (
        <React.Fragment>
            <IconButton onClick={() => handleClick()}
                key={'sm'}
                m={4}
                aria-label="Cart"
                colorScheme="teal"
                icon={<AiOutlineShoppingCart />} />

            <Drawer onClose={onClose} isOpen={isOpen} size={'sm'}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader>{'Sus Pedidos'}
                    </DrawerHeader>
                    <DrawerCloseButton />
                    <DrawerBody>
                        <Stack spacing="24px">
                            <Box>

                            </Box>

                        </Stack>
                    </DrawerBody>
                    <DrawerFooter borderTopWidth="1px">
                        <Button variant="outline" mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme="blue">Finalizar compra</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </React.Fragment>
    );
}

export default BurgerCart;