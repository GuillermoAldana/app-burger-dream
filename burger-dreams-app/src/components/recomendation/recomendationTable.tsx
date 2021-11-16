import { Table, TableCaption, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table";
import * as React from 'react';
import { Spinner, Stack, Center } from '@chakra-ui/react';
import useFirebaseDatabase from "../../hook/useFirebaseDatabase";

interface RecomendationTableProps {

}

const RecomendationTable: React.FC<RecomendationTableProps> = () => {
    const { recomendationDocuments } = useFirebaseDatabase("CartList");

    if(recomendationDocuments.length === 0) { 
       return <Center mt={6}>
            <Spinner/>
        </Center>
    }
    
    return (
        <React.Fragment>
            <Stack spacing={8} mx={'auto'} maxW={'75%'} py={12} px={6}>
                <Table variant="simple">
                    <TableCaption>Nuestro historia de ventas y comentarios</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Burgers</Th>
                            <Th>User</Th>
                            <Th>Comment</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {recomendationDocuments.map((element) =>
                        <Tr>
                                <Td>{element.Burgers}</Td>
                                <Td>{element.Email}</Td>
                                <Td>{element.Comment}</Td>
                        </Tr>
                        )}
                           
                        

                    </Tbody>
                </Table>
            </Stack>
        </React.Fragment>
    );
}

export default RecomendationTable;