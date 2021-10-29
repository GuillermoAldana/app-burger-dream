import {GET_ITEMS_BURGER} from '../../constants/types';

const initialState = {
    error: null,
    objectMovie:[]
};

export default (state = initialState, action: any) =>{
    switch(action.type){
        case GET_ITEMS_BURGER:
            return{
                ...state,
                objectMovie: action.payload
            }
        default:
            return state;
    }
}