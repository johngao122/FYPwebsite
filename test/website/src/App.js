import logo from './logo.svg';
import './App.css';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports'
import Spinner from 'react-bootstrap/Spinner'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import 'bootstrap/dist/css/bootstrap.min.css';
Amplify.configure(awsconfig);

function App() {
  
  var API_KEY = "";

  var divStyle = {
    background: "#eee",
    padding: "20px",
    margin: "20px"
  };

  function fetchTodoList() {
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


  return (
    <div style={{
      position: 'absolute', left: '50%', top: '50%',
      transform: 'translate(-50%, -50%)'
  }}>  
      
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}

export default withAuthenticator(App);
