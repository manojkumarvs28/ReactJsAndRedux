import * as actionTypes from './actionsTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type:actionTypes.AUTH_START
    }
}

export const authSuccess = (token,userId) => {
    return {
        type:actionTypes.AUTH_SUCCESS,
        token: token,
        userId:userId
    }
}

export const authFailure = (error) => {
    return {
        type:actionTypes.AUTH_FAILURE,
        error:error
    }
}

export const logOut = () => {
    return {
        type:actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeOut = (expirationtime) => {
    return dispatch => {
         setTimeout(()=> {
            dispatch(logOut());
         },expirationtime*1000);
    }
}

export const auth= (email,password, isSignUp) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email:email,
            password:password,
            returnSecureToken: true
        }
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCHzyrdESfC-vQ7rZDZDDAbbz7_6ZOkFMw';
        if(!isSignUp) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCHzyrdESfC-vQ7rZDZDDAbbz7_6ZOkFMw';
        }
        axios.post(url, authData)
        .then (response => {
            console.log(response);
            dispatch(authSuccess(response.data.idToken,response.data.localId));
            dispatch(checkAuthTimeOut(response.data.expiresIn));
        })
        .catch(err => {
            console.log(err);
            dispatch(authFailure(err.response.data.error));
        })
    }
}