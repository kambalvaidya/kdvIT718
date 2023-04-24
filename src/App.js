import logo from './logo.svg';
import './App.css';
import { Amplify } from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import config from './aws-exports';
import React, { useState } from 'react';
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



function App({ signOut }) {
  const [movie, setMovie] = useState('');

  function getMovie(){
    API.get(myAPI,path+"/")
    .then(response => {
      setMovie(response.title); // update state with the movie title
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
