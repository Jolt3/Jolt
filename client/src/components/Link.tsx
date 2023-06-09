import React, { useEffect, useContext } from "react";
import { usePlaidLink } from "react-plaid-link";
import Button from "plaid-threads/Button";
import Context from "./Context";
import { Products } from "plaid";
import axios from 'axios'
import { useMutation } from "@apollo/client";
import { UPDATE_USER } from "../utils/mutations";
import auth from "../utils/auth";
const bank = require('../assets/img/icons8-bank-account-96.png');

const Link = () => {
  const { linkToken, isPaymentInitiation, dispatch } = useContext(Context);
  const [set_access_token, {data}] = useMutation(UPDATE_USER)

  const getTransactions = async () => {
    const getTransactions = await fetch("/api/transactions", {
      method: 'GET'
    });
    const data = await getTransactions.json();
    console.log(data)
  }

  const getAccount = async () => {
    const getAccount = await fetch("api/accounts", {
      method: 'GET'
    });
    const data = await getAccount.json()
    console.log(data)
  }

  const getBalance = async () => {
    const getBalance = await fetch("api/balance", {
      method: 'GET'
    });
    const data = await getBalance.json()
    console.log(data)
  }
  
  const onSuccess = React.useCallback(
    (public_token: string) => {
      // If the access_token is needed, send public_token to server
      console.log(`Step 4, grab the ${public_token}`)

      const exchangePublicTokenForAccessToken = async () => {
        console.log('step 5, sends to server for access token')
        const response = await fetch("/api/set_access_token", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          },
          body: `public_token=${public_token}`,
        });
        if (!response.ok) {
          dispatch({
            type: "SET_STATE",
            state: {
              itemId: `no item_id retrieved`,
              accessToken: `no access_token retrieved`,
              isItemAccess: false,
            },
          });
          return;
        }
        const data = await response.json();
        dispatch({
          type: "SET_STATE",
          state: {
            itemId: data.item_id,
            accessToken: data.access_token,
            isItemAccess: true,
          },
        });

        //Assigns Access Token to DB
        const accessToken = data.access_token;

        const _setAccessToken = async (accessToken:any) => {
          const {data} = await set_access_token({
            variables:{
              access_token: accessToken
            },
          });
        }
        _setAccessToken(accessToken);
      };

      // 'payment_initiation' products do not require the public_token to be exchanged for an access_token.
      if (isPaymentInitiation){
        dispatch({ type: "SET_STATE", state: { isItemAccess: false } });
      } else {
        exchangePublicTokenForAccessToken();
      }

      dispatch({ type: "SET_STATE", state: { linkSuccess: true } });
      window.history.pushState("", "", "/");
    },
    [dispatch]
  );

  let isOauth = false;
  const config: Parameters<typeof usePlaidLink>[0] = {
    token: linkToken!,
    onSuccess,
  };

  if (window.location.href.includes("?oauth_state_id=")) {
    // TODO: figure out how to delete this ts-ignore
    // @ts-ignore
    config.receivedRedirectUri = window.location.href;
    isOauth = true;
  }

  console.log('Step 3, opens the link with the generated token')
  const { open, ready } = usePlaidLink(config);

  useEffect(() => {
    if (isOauth && ready) {
      open();
    }
  }, [ready, open, isOauth]);

  return (
    <>
      <a onClick={() => open()}><img src={bank} alt="Bank" /></a>
      <span className='nav-text'>Link Account</span>
    </>
  );
};

Link.displayName = "Link";

export default Link;
