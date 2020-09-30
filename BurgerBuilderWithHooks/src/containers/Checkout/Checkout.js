    import React from 'react';
    import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
    import {Route,Redirect} from 'react-router-dom';
    import ContactData from './ContactData/ContactData';
    import {connect} from 'react-redux';
 
    const checkout = (props) =>{

        const checkoutCancelled = () => {
            props.history.goBack();
        }

        const checkoutContinued = () => {
            props.history.replace('/checkout/contact-data');
        }

            let summary = <Redirect to="/"/>
            if(props.ings) {
                const purchaseRedirect = props.purchased? <Redirect to="/"/> : null;
                summary = (
                    <div>
                        {purchaseRedirect}
                        <CheckoutSummary 
                        ingredients={props.ings} 
                        checkoutCancelled={checkoutCancelled}
                        checkoutContinued={checkoutContinued}></CheckoutSummary>
                        <Route 
                        path={props.match.path+"/contact-data"}
                        component={ContactData}></Route>
                    </div>
                )
            }
            return  summary;            
        
    }


    const mapStateToProps = state => {
        return {
            ings : state.burgerBuilder.ingredients,
            purchased: state.order.purchased
        }
    }

    export default connect(mapStateToProps)(checkout);