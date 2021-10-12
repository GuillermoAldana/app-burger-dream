import React from 'react';
import { Box, Button, Stack, Heading } from "@chakra-ui/react";
const Menu = () => {

    return(
        <React.Fragment>
            <Box as="nav"
                display="flex"
                boxShadow="0px 3px 2432px var(--chakra-colors-blackAlpha-100)"
                height={"20"}
                justifyContent="center"
                minWidth={"320px"}
                top={0}
                width={"100%"}>
                <Stack direction="row" spacing={4} align="center">
                    <Button colorScheme="teal" variant="ghost">
                        Home
                    </Button>
                    <Button colorScheme="teal" variant="ghost">
                        Burgers
                    </Button>
                    <Button colorScheme="teal" variant="ghost">
                        Login
                    </Button>
                </Stack>
            </Box>
        </React.Fragment>
    )
}
export default Menu;