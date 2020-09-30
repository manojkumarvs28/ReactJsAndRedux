import React, { useEffect, useState , useCallback} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as burgerBuilderActions from '../../store/actions/index';

const burgerBuilder = (props) => {
    const [purchasing, setPurchasing]=useState(false);

    const dispatch = useDispatch();

    const ings = useSelector((state) => {
        return state.burgerBuilder.ingredients
    })
    const price = useSelector((state) => {
        return state.burgerBuilder.totalPrice
    })
    const error = useSelector((state) => {
        return state.burgerBuilder.error
    })
    const isAuthenticated = useSelector((state) => {
        return state.auth.token !== null
    })
    const onIngredientAdded = (ingreName) => dispatch(burgerBuilderActions.addIngredients(ingreName));
    const onIngredientRemoved = (ingreName) => dispatch(burgerBuilderActions.removeIngredients(ingreName));
    const onInitIngredients= useCallback(() =>
        dispatch(burgerBuilderActions.initIngredients()),
        [dispatch]
     );
   const onInitPurchase=() => dispatch(burgerBuilderActions.purchaseInit());
    const onSetAuthRedirectPath=(path) => dispatch(burgerBuilderActions.setAuthRedirectPath(path));

    useEffect(()=> {
        onInitIngredients()
    },[onInitIngredients])

    const updatePurchaseState =(ingredients) =>{
        const sum = Object.keys( ingredients )
            .map( igKey => {
                return ingredients[igKey];
            } )
            .reduce( ( sum, el ) => {
                return sum + el;
            }, 0 );
         return sum > 0 ;
    }

    const purchaseHandler = () => {
        if(isAuthenticated)
            setPurchasing(true);
        else {
            onSetAuthRedirectPath('/checkout');
            props.history.push('/auth');   
        }
    }

    const purchaseCancelHandler = () => {
        setPurchasing(false);
    }

    const purchaseContinueHandler = () => {
        onInitPurchase();
        props.history.push('/checkout');
    }

        const disabledInfo = {
            ...ings
        };
        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary = null;
        let burger =error? <p>Ingredients cant be loaded</p> :<Spinner/>
        if(ings ) {
            burger = (
                    <Aux>
                        <Burger ingredients={ings} />
                        <BuildControls
                        ingredientAdded={onIngredientAdded}
                        ingredientRemoved={onIngredientRemoved}
                        disabled={disabledInfo}
                        purchasable={updatePurchaseState(ings)}
                        ordered={purchaseHandler}
                        isAuth={isAuthenticated}
                        price={price} /> 
                    </Aux>
                   );

                   orderSummary =  <OrderSummary 
                    ingredients={ings}
                    price={price}
                    purchaseCancelled={purchaseCancelHandler}
                    purchaseContinued={purchaseContinueHandler} /> ;
        }        

        return (
            <Aux>
                <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
                    {orderSummary} />
                </Modal>
                {burger}
            </Aux>
        );
    
}

export default withErrorHandler(burgerBuilder, axios);