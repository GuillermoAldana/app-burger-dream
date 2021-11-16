import { EUser } from '../../constants/emunUser';

const initialState = {
    error: null,
    user: '',
};

const UserReducer = (state = initialState, action: any) => {
    switch(action.type){
        case EUser.ADD_USER:
            return {
                ...state,
                user: action.payload
            }
        case EUser.LOGOUT_USER:
            return {
            ...state,
            user: '',
            }     
        default:
            return state;
    }
}
export default UserReducer;