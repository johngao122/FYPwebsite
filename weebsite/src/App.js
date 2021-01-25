import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import {connect} from 'react-redux'
import Spinner from 'react-bootstrap/Spinner'

const API_URL = "https://q9eilwyvza.execute-api.ap-southeast-1.amazonaws.com/default";
const API_KEY = "t7TaTTvPvt4Q7fA0kGZDB9iNVVd0YyvB4HkgMJD8"



Amplify.configure(awsconfig);


export function fetchTodoList() {
  var request = fetch('API-URL', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log('Error while fetching:', error));
  
}

function App() {
  return (
    <div className="App">
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}

export default withAuthenticator(App);
