//import logo from './logo.svg';
import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route } 
from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  'pk_test_51JKhIKJG7nMoH53nr0xwQsVolXx2nCIF9fyDolQR7fOM0nlsqrLNB41M7gHDiLWPTXSBdcy1GNXSUIVXyd3asRcR00A9OhUOWD'
  );

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
     //  console.log('the user is ===>>', authUser);

      if(authUser){
        dispatch({
          type:'SET_USER',
          user: authUser
        })
      }else{
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path='/payment'>
          <Header />
          <Elements stripe={promise}>
            <Payment />
            </Elements>
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
