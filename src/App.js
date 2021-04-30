import React from "react";
import{Switch ,Redirect,Route} from "react-router-dom"
import Layout from "./components/layout/Layout"
import Shopping from "./containers/shopping/Shopping";
import Checkout from "./components/Checkout/Checkout";
import Login from "./containers/Account/Login";
import Counter from "./counter_redux/Counter";
import User from './components/Checkout/User/User'
import Notfound from "./components/Notfound/Notfound"
import {useSelector} from "react-redux";

import "./App.css";




function App() {
    const counterreducer = useSelector(state => state.counterreducer)
    return (
    <>
    <br/>
    <br/>
    <Layout/>
      <Switch>
        <Route path="/" exact component={Shopping} />
        <Route path="/check"  component={Checkout}/>
        <Route path='/account' component={Login} />
        <Route path='/counter' component={Counter} />
        <Route path='/user/:id/:name/:email/:company' component={User} />
        <Route path='/not-found' component={Notfound} />
        <Redirect to='/not-found' />
      </Switch>
      </>
    );
  }


export default App;
