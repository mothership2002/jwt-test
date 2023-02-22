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
      const temp = resJson.token;
      setToken(temp);

      const payload = JSON.parse(atob(resJson.token.split('.')[1]));
      console.log(payload);
      if ( payload.exp < Math.floor( new Date().getTime() / 1000 ) ) {
        localStorage.removeItem('user-login-session');
        console.log('유효시간 만료');
        return;
      }
      else {
        localStorage.setItem('user-login-session', temp);
        console.log('허용');
      }
    });
  },[]);

  const tempFunction = () => {
    const sessionToken = localStorage.getItem('user-login-session');
    console.log(sessionToken);
    const temp = sessionToken;

    const url = `http://localhost:8080/test/session/`
    

    // bearer (jwt type) 이건 뭘까
    const options = {
      method : 'get',
      mode : 'cors',
      cache : 'no-cache',
      headers: {
        'Content-Type' : 'application/json',
        'Authorization' : "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uIjoiYXNkZiIsImV4cCI6MTY3Njk2NDg3MCwiaWF0IjoxNjc2OTY0ODEwfQ.CA1jWMdDe_H9yctLPgFpwzVP45a6pgmgUQnfC3oFLcE"
      }

    }

    fetch(url, options).then((resp) => {
      return resp.json();
    }).then( (resJson) => {
      console.log(resJson.message);
    })

  }

  return (
    <div className="App">
      <div>{message}</div>
      <div style={{display:'none'}}>{token}</div>
      <button onClick={() => {
        tempFunction();
      }}>button</button>
    </div>
  );
}

export default App;
