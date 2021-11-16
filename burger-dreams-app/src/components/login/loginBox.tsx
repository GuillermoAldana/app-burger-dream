import React from "react";
import {  Box, FormControl, FormLabel, Input, Center, Stack, Button, Text, useColorModeValue } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin, setLoginGoogle } from "../../redux/actions/userActions";
import { useHistory } from "react-router-dom";
import { useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { validationLogin } from './validationYupBox';
import { UserAuth } from '../../interfaces/userInterface';

interface LoginBoxProps {
    
}

const LoginBox: React.FC<LoginBoxProps> = () => {
    const dispatch = useDispatch();
    let history = useHistory();
    const { user } = useSelector((state: any) => state.UserReducer);
    const loginGoogle = () =>{
        dispatch(setLoginGoogle());
    }
    const loginAccount = (values: UserAuth) =>{
        dispatch(setLogin(values));
    }
    useEffect(()=>{
        if(user !== '')
        history.push("/")
        console.log(user);
    }, [user])

    const registerDataInitial = {
        email: '',
        password: '',
    };
    return (
        <React.Fragment>
            <Formik
                initialValues={registerDataInitial}
                validationSchema={validationLogin}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    loginAccount(values);
                    alert(JSON.stringify(values, null, 2));
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
                                <Field name="email" >
                                    {({ field, form }: any) => (
                                        <FormControl id="email" isInvalid={form.errors.email && form.touched.email}>
                                            <FormLabel>Email</FormLabel>
                                            <Input {...field} type="email" name='email' placeholder='Ingrese un email @' />
                                        </FormControl>
                                    )}
                                </Field>
                                {errors.email && touched.email ? ( <div style={{color:'red', fontSize:'12px'}}>{errors.email}</div>) : null}
                                <Field name="password" >
                                    {({ field, form }: any) => (
                                        <FormControl id="password" isInvalid={form.errors.password && form.touched.password}>
                                            <FormLabel>Password</FormLabel>
                                            <Input {...field} type="password" name='password' placeholder='Ingrese una contraseña' />
                                        </FormControl>
                                    )}
                                </Field>
                                {errors.password && touched.password ? ( <div style={{color:'red', fontSize:'12px'}}>{errors.password}</div>) : null}
                                <Stack spacing={10}>
                                    <Button type="submit" bg={'blue.400'} color={'white'} _hover={{ bg: 'blue.500'}}>
                                        Iniciar sesion
                                    </Button>
                                    <Button w={'full'} variant={'outline'} leftIcon={<FcGoogle />} onClick={()=>loginGoogle()}>
                                    <Center>
                                        <Text>Iniciar sesion con Google</Text>
                                    </Center>
                                </Button>
                                </Stack>
                            </Stack>
                        </Box>
                    </Form>
                )}
            </Formik>
        </React.Fragment>
     );
}
 
export default LoginBox;