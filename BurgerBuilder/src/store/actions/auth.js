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
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
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
            const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
            localStorage.setItem('token', response.data.idToken);
            localStorage.setItem('expirationDate',expirationDate);
            localStorage.setItem('userId',response.data.localId);
            dispatch(authSuccess(response.data.idToken,response.data.localId));
            dispatch(checkAuthTimeOut(response.data.expiresIn));
        })
        .catch(err => {
            console.log(err);
            dispatch(authFailure(err.response.data.error));
        })
    }
}

export const setAuthRedirectPath = (path) => {
    return {
        type:actionTypes.SET_AUTH_REDIRECT_PATH,
        path:path
    } 
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if(!token)
            dispatch(logOut());
        else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            const userId = localStorage.getItem('userId');
            if (expirationDate <= new Date()){  
                dispatch(logOut());
            }
            else{
                dispatch(authSuccess(token,userId));
                dispatch(checkAuthTimeOut((expirationDate.getTime()-new Date().getTime())/1000))
            }
      }
    }
}