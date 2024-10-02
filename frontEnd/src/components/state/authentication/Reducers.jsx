import { isPresentInFavorite } from "../../config/favoriteRestaurentLogic";
import { ADD_TO_FAVORITE_REQUEST, ADD_TO_FAVORITE_SUCCESS, GET_USER_REQUEST, LOGIN_REQUEST, 
    LOGIN_SUCCESS, REGISTER_REQUEST, REGISTER_SUCCESS, GET_USER_SUCCESS,
    REGISTER_FAILURE,LOGIN_FAILURE,ADD_TO_FAVORITE_FAILURE,GET_USER_FAILURE,
    LOGOUT} from "./ActionType"

const initialState ={
    user: null,
    isLoading: false,
    error: null,
    jwt: null,
    favorite: [],
    success: null
}
export const authReducers = (state = initialState, action) =>{
    switch(action.type){
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case ADD_TO_FAVORITE_REQUEST:
        case GET_USER_REQUEST:
        return{...state, isLoading: true, error:null, success:null, user:null};

        case LOGIN_SUCCESS:
        return {...state, isLoading: false, jwt: action.payload, success: "Login successfully"}
        case REGISTER_SUCCESS:
        return {...state, isLoading: false, jwt: action.payload, success: "Registered successfully"}

        case GET_USER_SUCCESS:
        return {...state, isLoading: false, user: action.payload}

        case ADD_TO_FAVORITE_SUCCESS:
            return {...state, error: null, isLoading:false,
                 favorite: isPresentInFavorite(state.favorite, action.payload)? state.favorite.filter((items)=> items.id!==action.payload.id)
                :[action.payload,...state.favorite]
                }

        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
        case ADD_TO_FAVORITE_FAILURE:
        case GET_USER_FAILURE:
        return{...state, isLoading: false, error:action.payload, success:null};

        case LOGOUT:
        return{...state, isLoading: false, error:null, user:null, success:null};
        default:
            return state;
      }

      

}