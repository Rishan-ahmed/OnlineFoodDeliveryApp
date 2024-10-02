import axios from "axios"
import {ADD_TO_FAVORITE_FAILURE, ADD_TO_FAVORITE_REQUEST, ADD_TO_FAVORITE_SUCCESS,GET_USER_FAILURE,
     GET_USER_SUCCESS,GET_USER_REQUEST, LOGIN_REQUEST, LOGIN_SUCCESS,LOGIN_FAILURE, LOGOUT,
      REGISTER_FAILURE, REGISTER_REQUEST , REGISTER_SUCCESS} from "./ActionType"
import { api, API_URL } from "../../config/api"


export const Register_user = (reqData) => async(dispatch)=>{
    dispatch({type:REGISTER_REQUEST})
    try {
        const {data} = await axios.post(`${API_URL}/auth/signUp`, {
            email: reqData.formData.email,
            password: reqData.formData.password,
            username: reqData.formData.username,
            role: reqData.formData.role
        })
        if (data.jwt)localStorage.setItem("jwt", data.jwt)
        if(data.role === "ROLE_RESTAURENT_OWNER"){
            reqData.navigate("/admin/restaurent")
        }
        else{
            reqData.navigate("/")
        }
        dispatch({type:REGISTER_SUCCESS, payload:data.jwt})
        console.log("Register Success", data)
    } catch (error) {
        dispatch({type:REGISTER_FAILURE, payload:error})
        console.log("error", error)
    }
}

export const Login_user = (reqData) => async(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    try {
        const {data} = await axios.post(`${API_URL}/auth/signing`, {
            email: reqData.userData.email,
            password: reqData.userData.password
        })
        if (data.jwt)localStorage.setItem("jwt", data.jwt)
        if(data.role === "ROLE_RESTAURENT_OWNER"){
            reqData.navigate("/admin/restaurent")
        }
        else{
            reqData.navigate("/")
        }
        dispatch({type:LOGIN_SUCCESS, payload:data.jwt})
        console.log("Login success", data)
    } catch (error) {
        dispatch({type:LOGIN_FAILURE, payload:error.response?.data || error.message})
        console.log("error", error.response?.data || error.message)
    }
}

export const Get_user = (jwt) => async(dispatch)=>{
    dispatch({type:GET_USER_REQUEST})
    try {
        const {data} = await axios.get(`${API_URL}/api/users/profile`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({type:GET_USER_SUCCESS, payload:data})
        console.log("user profile", data)
    } catch (error) {
        dispatch({type:GET_USER_FAILURE, payload:error.response?.data || error.message})
        console.log("error", error)
    }
}

export const AddToFavorite = (jwt, restaurentId) => async(dispatch)=>{
    dispatch({type:ADD_TO_FAVORITE_REQUEST})
    try {
        const {data} = await api.get(`/auth/restaurent/${restaurentId}/add-to-favorite`, {
            headers:{
                Autorization: `Bearer ${jwt}`
            }
        })
        dispatch({type:ADD_TO_FAVORITE_SUCCESS, payload:data})
        console.log("Added to favorite", data)
    } catch (error) {
        dispatch({type:ADD_TO_FAVORITE_FAILURE, payload:error})
        console.log("error", error)
    }
}

export const LogOut = () => async(dispatch)=>{
    try {
       
        localStorage.clear()
        dispatch({type:LOGOUT})

        console.log("lOGOUT SUCCESSFUL")
        
    } catch (error) {
        console.log("error", error)
    }
}

