import '../src/App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Navigation} from '../src/components/Navigation';
import {Header} from '../src/components/Header';
import Data from '../src/assets/data/mock-data.json';
// import {Login} from './components/Login-Spinner';
import {Dashboard} from './components/Dashboard';
// import {Goals} from './components/Goals';
import React, {useEffect, useContext, useCallback} from 'react';
import Context from './components/Context';
import GoalList from './components/Goal/GoalList';

function App() {
  const { linkSuccess, isItemAccess, isPaymentInitiation, dispatch } = useContext(Context);

  const getInfo = useCallback(async () => {
    const response = await fetch("/api/info", { method: "POST" });
    if (!response.ok) {
      dispatch({ type: "SET_STATE", state: { backend: false } });
      return { paymentInitiation: false };
    }
    const data = await response.json();
    const paymentInitiation: boolean = data.products.includes(
      "payment_initiation"
    );
    dispatch({
      type: "SET_STATE",
      state: {
        products: data.products,
        isPaymentInitiation: paymentInitiation,
      },
    });
    return { paymentInitiation };
  }, [dispatch]);

  const generateToken = useCallback(
    async (isPaymentInitiation) => {
      // Link tokens for 'payment_initiation' use a different creation flow in your backend.
      const path = isPaymentInitiation
        ? "/api/create_link_token_for_payment"
        : "/api/create_link_token";
      const response = await fetch(path, {
        method: "POST",
      });
      if (!response.ok) {
        dispatch({ type: "SET_STATE", state: { linkToken: null } });
        return;
      }
      console.log('step 2?? gets the link token')
      const data = await response.json();
      if (data) {
        if (data.error != null) {
          dispatch({
            type: "SET_STATE",
            state: {
              linkToken: null,
              linkTokenError: data.error,
            },
          });
          return;
        }
        dispatch({ type: "SET_STATE", state: { linkToken: data.link_token } })
      }
      // Save the link_token to be used later in the Oauth flow.
      localStorage.setItem("link_token", data.link_token);
    },
    [dispatch]
  );


  useEffect(() => {
    const init = async () => {
      const { paymentInitiation } = await getInfo(); // used to determine which path to take when generating token
      // do not generate a new token for OAuth redirect; instead
      // setLinkToken from localStorage
      if (window.location.href.includes("?oauth_state_id=")) {
        dispatch({
          type: "SET_STATE",
          state: {
            linkToken: localStorage.getItem("link_token"),
          },
        });
        return;
      }
      generateToken(paymentInitiation);
    };
    init();
  }, [dispatch, generateToken, getInfo]);

    return (
      <div className="App">
        <Navigation />
        <Header placeholder='Search Here' data={Data}/>
        {/* <Login /> */}
<<<<<<< HEAD
        {/* <Dashboard /> */}
        {/* <Goals /> */}
        <GoalList />
=======
        <Dashboard />
        {/* <Goals /> */}
>>>>>>> fa0f7cf918836571a5ef05739a9c816aae7883e1
      </div>
    );
  }
  
  export default App;
  
