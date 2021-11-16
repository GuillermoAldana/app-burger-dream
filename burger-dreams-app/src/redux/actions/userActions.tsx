import { EUser } from '../../constants/emunUser';
import { IUserLogin, UserAuth } from '../../interfaces/userInterface';
import { signInWithAccount, registerUser, signInWithGoogle } from '../../services/firebaseUserServices';

export const setLogout = () => (dispatch: any) => dispatch({ type: EUser.LOGOUT_USER });

export const setRegister = (user: any) => async (dispatch: any) => {
    try {
        const data = await registerUser(user);
    } catch (error) {
        console.log(error);
    }

}
export const setLoginGoogle = () => async (dispatch: any) => {
    try {

        const data = await signInWithGoogle();
        const userData: IUserLogin = {
            uid: data.user?.uid,
            email: data.user?.email,
        }
        dispatch({
            type: EUser.ADD_USER,
            payload: userData
        });

    } catch (error) {
        dispatch({
            type: EUser.ERROR_USER
        })
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
        dispatch({
            type: EUser.ERROR_USER
        })
    }

}