import { EUser } from '../../constants/emunUser';
import { IUserLogin, UserAuth } from '../../interfaces/userInterface';
import { signInWithAccount, registerUser, signInWithGoogle } from '../../services/firebaseUserServices';

import { useHistory } from "react-router-dom";

export const setRegister = (user: any) => async (dispatch: any) => {
    try {
        
        const data = await registerUser(user);
        const userData: IUserLogin = {
            uid: data.user?.uid,
            email: data.user?.email,
        }
    } catch (error) {
        console.log(error);
    } 

}
export const setLoginGoogle = () => async (dispatch: any) => {
    try {
        
        const data = await signInWithGoogle();
        let userData: IUserLogin[] = [];
        userData.push({
            uid: data.user?.uid,
            email: data.user?.email,
        })
        dispatch({ 
            type: EUser.ADD_USER, 
            payload: userData 
        });

    } catch (error) {
        console.log(error);
    } 

}
export const setLogin = (value: UserAuth) => async (dispatch: any) => {
    try {
        const data = await signInWithAccount(value);
        const userData: IUserLogin = {
            uid: data.user?.uid,
            email: data.user?.email,
        }

        dispatch({ 
            type: EUser.ADD_USER, 
            payload: userData 
        });

    } catch (error) {
        console.log(error);
    } 

}