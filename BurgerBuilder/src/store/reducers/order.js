import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

const initialState = {
    orders:[],
    loading:false,
    purchased: false
}

const purchaseBurgerSucess = (state, action) => {
    const newOrder = updateObject(action.orderData, {id:action.orderId});
    return updateObject(state,{
          loading:false,
          purchased:true,
          orders:state.orders.concat(newOrder)
    })
}

const purchaseBurgerFailure = (state, action) => {
    return updateObject(state,{
        loading:false
    });
}

const purchaseBurgerStart = (state, action) => {
    return updateObject(state,{
        loading:true
    })
}

const purchaseBurgerInit = (state, action) => {
    return updateObject(state,{
        ...state,
        purchased:false
    })  
}

const fetchOrderSuccess = (state, action) => {
    return updateObject(state,{
        orders:action.orders,
        loading:false
    })  
}

const fetchOrderFail = (state, action) => {
    return updateObject(state,{
        ...state,
        loading:false
    }) 
}

const fetchOrderStart = (state, action) => {
    return updateObject(state,{
        ...state,
        loading:true
    })     
}

const orderReducer = (state=initialState, action) => {
  switch(action.type) {
      case (actionTypes.PURCHASE_BURGER_SUCCESS): return purchaseBurgerSucess(state,action);
      
      case  actionTypes.PURCHASE_BURGER_FAILURE: return purchaseBurgerFailure(state,action);
      
      case actionTypes.PURCHASE_BURGER_START: return purchaseBurgerStart(state,action);
         
      case actionTypes.PURCHASE_INIT: return purchaseBurgerInit(state,action);
            
      case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrderSuccess(state,action);
          
      case actionTypes.FETCH_ORDERS_FAIL: return fetchOrderFail(state,action);
            
       case actionTypes.FETCH_ORDERS_START: return fetchOrderStart(state,action);
                 
      default: return state;
  }
}

export default orderReducer;

