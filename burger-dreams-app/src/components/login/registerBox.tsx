import React from 'react';
import { Box, FormControl, FormLabel, Input, Center, Stack, Button, Text } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { Formik, Form, Field } from 'formik';
import { RegisterData } from '../../types/typeRegister';
import { validationRegister } from './validationYupBox';
import { registerUser } from  '../../services/firebaseUserServices';
interface RegisterBoxProps {};

const RegisterBox: React.FC<RegisterBoxProps> = () => {
    
    const registerDataInitial: RegisterData = {
        name: '',
        email: '',
        password: '',
    };
    return (
        <React.Fragment>
            <Formik
                initialValues={registerDataInitial}
                validationSchema={validationRegister}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    registerUser(values);
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
                                <Field name="name" >
                                    {({ field, form }: any) => (
                                        <FormControl isInvalid={form.errors.name && form.touched.name}>
                                            <FormLabel>Name</FormLabel>
                                            <Input {...field} type="name" name='name' placeholder='Ingrese un nombre' />
                                        </FormControl>
                                    )}
                                </Field>
                                {errors.name && touched.name ? ( <div style={{color:'red', fontSize:'12px'}}>{errors.name}</div>) : null}
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
                                        Registrarse
                                    </Button>
                                    <Button w={'full'} variant={'outline'} leftIcon={<FcGoogle />}>
                                        <Center>
                                            <Text>Registrarse con Google</Text>
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

export default RegisterBox;