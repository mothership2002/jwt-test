import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [ message, setMessage ] = useState();
  const [ token, setToken ] = useState();

  useEffect(() => {
    const url = `http://localhost:8080/`;
  
    fetch(url).then( (resp) => {
      return resp.json();
    }).then( (resJson) => {
      setMessage(resJson.message);
      setToken(resJson.token);
      const payload = JSON.parse(atob(resJson.token.split('.')[1]));
      console.log(payload);
      if ( payload.exp < Math.floor( new Date().getTime() / 1000 ) ) {
        console.log('유효시간 만료');
      }
      else {
        console.log('허용');
      }
    });
  },[]);

  return (
    <div className="App">
      <div>{message}</div>

      <div style={{display:'none'}}>{token}</div>
    </div>
  );
}

export default App;