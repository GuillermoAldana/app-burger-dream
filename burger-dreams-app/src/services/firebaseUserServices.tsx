import firebase from 'firebase';
import { googleAuthProvider } from '../firebase/firebase-config';
import { IUser, UserAuth } from '../interfaces/userInterface';

export const registerUser = async (values: IUser) => {

    const data = await firebase.auth().createUserWithEmailAndPassword(values.email, values.password)
    return data;
}
export const signInWithGoogle = () => {

    const dataGoogle = firebase.auth().signInWithPopup(googleAuthProvider)
    return dataGoogle;

}
export const signInWithAccount = ({ email, password }: UserAuth) => {
    const dataLogin = firebase.auth().signInWithEmailAndPassword(email, password)
    return dataLogin;
}