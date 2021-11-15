import firebase from 'firebase';
import { IUser } from '../interfaces/userInterface';

export const registerUser = async (values: IUser) => {
    firebase.auth().createUserWithEmailAndPassword(values.email, values.password)
        .then(async ({ user }) => {
            console.log(user);
        })
        .catch(e => {
            console.log(e)
        })
}
