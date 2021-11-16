import * as React from 'react';
import { Box, FormControl, FormLabel, Input, Textarea, Stack, Button } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import useFirebaseDatabase from '../../hook/useFirebaseDatabase';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
interface CartCommmentProps {
    
}
 
const CartCommment: React.FC<CartCommmentProps> = () => {
    
    let history = useHistory();
    const { previewCart } = useSelector((state: any) => state.cartReducer);
    const { save } = useFirebaseDatabase("CartList");
    
    const registerDataInitial = {
        comment: '',
    };
    const setRegisterdata = (values: any) =>{
        let data = {
            Comment: values.comment,
            Email: 'Guillermo.Aldana',
            Burgers: previewCart
        }
        save(data);
    }
    const backHome =()=>{
        history.push("/");
    }
    return (
        <React.Fragment>
            <Formik
                initialValues={registerDataInitial}
                /* validationSchema={validationRegister} */
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    setRegisterdata(values);
                    actions.setSubmitting(false);
                }}>
                {({errors, touched }) => (
                    <Form>
                        <Box
                            rounded={'lg'}
                            bg={'white'}
                            boxShadow={'lg'}
                            p={4}>
                            <Stack spacing={4}>
                                <Field name="name" >
                                    {({ field, form }: any) => (
                                        <FormControl >
                                            <FormLabel>Mis compras</FormLabel>
                                            <Input {...field} type="text" name='compra' readOnly value={previewCart}/>
                                        </FormControl>
                                    )}
                                </Field>
                                <Field name="email" >
                                    {({ field, form }: any) => (
                                        <FormControl id="email">
                                            <FormLabel>Usuario</FormLabel>
                                            <Input {...field} type="email" name='email' readOnly />
                                        </FormControl>
                                    )}
                                </Field>
                                <Field name="Comment" >
                                    {({ field, form }: any) => (
                                        <FormControl id="comment" isInvalid={form.errors.password && form.touched.password}>
                                            <FormLabel>Comentario</FormLabel>
                                            <Textarea {...field} type="text" name='comment' placeholder='Ingrese una comentario' readOnly={(!previewCart) ? true : false}/>
                                            
                                        </FormControl>
                                    )}
                                </Field>
                                {/* {errors.comment && touched.comment ? ( <div style={{color:'red', fontSize:'12px'}}>{errors.password}</div>) : null} */}
                                <Stack spacing={10}>
                                {previewCart ?
                                    <Button type="submit" bg={'blue.400'} color={'white'} _hover={{ bg: 'blue.500'}}>
                                        Enviar
                                    </Button> :
                                    <Button onClick={()=> backHome()} bg={'blue.400'} color={'white'} _hover={{ bg: 'blue.500'}}>
                                    Volver
                                    </Button>

                                }    
                                </Stack>
                            </Stack>
                        </Box>
                    </Form>
                )}
            </Formik>
        </React.Fragment>
    );
}

export default CartCommment;