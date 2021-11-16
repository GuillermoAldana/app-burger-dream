import * as React from 'react';
import { Box, FormControl, FormLabel, Input, Textarea, Stack, Button } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import useFirebaseDatabase from '../../hook/useFirebaseDatabase';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { json } from 'stream/consumers';
import { clearCart } from '../../redux/actions/cartActions';
import * as Yup from 'yup';
import { Text } from '@chakra-ui/layout';
import Recomendation from '../recomendation/index';
interface CartCommmentProps {
    
}
 
const CartCommment: React.FC<CartCommmentProps> = () => {
    
    let history = useHistory();
    const [message, setMessage] = React.useState(false);
    const { previewCart } = useSelector((state: any) => state.cartReducer);
    const { save } = useFirebaseDatabase("CartList");
    const { user } = useSelector((state: any) => state.UserReducer);
    const dispatch = useDispatch();

    const registerDataInitial = {
        comment: '',
    };
    const validationRegisterComment = Yup.object().shape({
        comment: Yup.string().required('Este campo es requerido'),
      });
     
    const setRegisterdata = (values: any) =>{
        let data = {
            Comment: values.comment,
            Email: user.email,
            Burgers: previewCart
        }
        setMessage(true)
        save(data);
        
        setTimeout(function(){ history.push("/"); setMessage(false); dispatch(clearCart()) }, 2000);
        
    }
    const backHome =()=>{
        history.push("/");
    }
    return (
        <React.Fragment>
            
            <Formik
                initialValues={registerDataInitial}
                validationSchema={validationRegisterComment}
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
                                            <Input {...field} type="email" name='email' readOnly value={user.email}/>
                                        </FormControl>
                                    )}
                                </Field>
                                <Field name="comment" >
                                    {({ field, form }: any) => (
                                        <FormControl id="comment" isInvalid={form.errors.comment && form.touched.comment}>
                                            <FormLabel>Comentario</FormLabel>
                                            <Textarea {...field} type="text" name='comment' placeholder='Ingrese una comentario' readOnly={(!previewCart) ? true : false}/>
                                            
                                        </FormControl>
                                    )}
                                </Field>
                                {errors.comment && touched.comment ? ( <div style={{color:'red', fontSize:'12px'}}>{errors.comment}</div>) : null}
                                <Stack spacing={10}>
                                {message && <Text fontSize={'md'} fontWeight={'500'}>Muchas gracias por enviarnos tu recomendación</Text>}    
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