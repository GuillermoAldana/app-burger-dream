import { EUser } from '../../constants/emunUser';

const initialState = {
    errorLogin: false,
    user: [],
};

const UserReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case EUser.ADD_USER:
            return {
                ...state,
                user: action.payload,
                errorLogin: false,
            }
        case EUser.LOGOUT_USER:
            return {
                ...state,
                user: [],
                errorLogin: false,
            }
        case EUser.ERROR_USER:
            return {
                ...state,
                errorLogin: true
            }
            
        default:
            return state;
    }
}
export default UserReducer;