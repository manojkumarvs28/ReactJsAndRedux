import React, {useState, useEffect} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const withErrorhandler = (WrappedComponent, axios) => {
    return props => {
        const [error,setError] = useState(null);
        
           const requestInterceptor = axios.interceptors.request.use(request => {
                setError(null);
                return request;
            });
            const responseInterceptor = axios.interceptors.response.use(response => response, err => {
                setError(err);
            });
        

            useEffect(() => {
                return () => {
                    axios.interceptors.request.eject(requestInterceptor);
                    axios.interceptors.response.eject(responseInterceptor);
                }
            },[requestInterceptor,responseInterceptor])

        const errorClosehandler=() => {
            setError(null);
        } 

            return (
                <Aux>
                <Modal 
                show = {error} 
                modalClosed={errorClosehandler}>
                    {error?error.message: null}
                 </Modal>   
                <WrappedComponent {...props}/>
               </Aux>
            )
        
    }
}

export default withErrorhandler;