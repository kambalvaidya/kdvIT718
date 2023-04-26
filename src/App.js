import logo from './logo.svg';
import './App.css';
import { API,Amplify,Auth } from 'aws-amplify'
import "@aws-amplify/ui-react/styles.css";
import config from './aws-exports';
import React, { useState } from 'react'
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
  Text
} from "@aws-amplify/ui-react";
Amplify.configure(config);

const myAPI = "api12906dcf" 
const path = '/movie';
const myInit = {
  headers:{
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*"
  }


}



function App({ signOut }) {
  const [movie, setMovie] = useState('');

  async function callApi() {
    const user = await Auth.currentAuthenticatedUser()
    const token = user.signInUserSession.idToken.jwtToken
    const requestData = {
      headers: {
        Authorization: token
      }
    }

    const data = await API.get('api12906dcf', '/movie', requestData)
    setMovie(data); // update state with the movie title
    console.log("data: ", data)
  
  }

  
  return (
    <View className="App">
      <Button onClick={callApi}>Pick a movie!</Button>
      <Text style={{ fontSize: 20, marginVertical: 10 }}>{`Movie Title: ${movie}`}</Text>
    
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);
