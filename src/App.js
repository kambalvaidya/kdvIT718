import logo from './logo.svg';
import './App.css';
import { API,Amplify } from 'aws-amplify'
import "@aws-amplify/ui-react/styles.css";
import config from './aws-exports';
import React, { useEffect, useState } from 'react'
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
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

  function getMovie(){
    console.log("here1")
    API.get(myAPI,path+"/",myInit)
    .then(response => {
      console.log("here")
      setMovie(response.body); // update state with the movie title
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <View className="App">
      <Button onClick={getMovie}>Pick a movie!</Button>
      {movie && <p>{movie}</p>} {/* render the movie title if it exists */}
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);
