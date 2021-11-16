
import { EUser } from '../../constants/emunUser';
import { IUser } from '../../interfaces/userInterface';

const initialState = {
    error: null,
    user: '',
};

const UserReducer = (state = initialState, action: any) => {
    switch(action.type){
        case EUser.ADD_USER:
            return{
                ...state,
                user: action.payload
            } 
        default:
            return state;
    }
}
export default UserReducer;