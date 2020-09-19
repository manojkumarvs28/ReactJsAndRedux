import React, { Component } from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

const asycnCheckout = asyncComponent(() => {
  return import('./containers/Checkout/Checkout');
})

const asycnOrders = asyncComponent(() => {
  return import('./containers/Orders/Orders');
})

const asycnAuth = asyncComponent(() => {
  return import('./containers/Auth/Auth');
})

class App extends Component {

  componentDidMount(){
    this.props.onTryAutoSignUp();
  }
  
  render () {
    let routes = (
      <Switch>
      <Route path="/auth"  component={asycnAuth}/>
      <Route path="/" exact component={BurgerBuilder}/>
      <Redirect to="/"/>
      </Switch>
    );
    if(this.props.isAuthenticated){
       routes = (
          <Switch>
          <Route path="/checkout" component={asycnCheckout}/>
          <Route path="/orders" component={asycnOrders}/>
          <Route path="/logout"  component={Logout}/>
          <Route path="/auth"  component={asycnAuth}/>
          <Route path="/" exact component={BurgerBuilder}/>
          <Redirect to='/' />
          </Switch>
       )
    }
    return (
      <div>
        <Layout>
          <Switch>
            {routes}
          </Switch>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
} 

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
