import './App.css';
import {Button, Input} from '@material-ui/core'
import {useState} from 'react';
function App() {
  const [username, setUsername] = useState('');
  function myfun(){
    var p = new RegExp(/^[0-9\b]+$/);
    if(username==="" ){
        alert('please fill the username');
    }
    else if(!p.test(username)){
      alert('not a number');
    }
    else if(username.length!=10){
      alert('phone number must be 10 digit');
    }
    else{
      alert(username);
    }
  }
  return (
  <div className="App">
    <h1>Number validation with React.js</h1>

    <Input 
    onChange={e => setUsername(e.target.value)}/>
    <br/><br/>
    <Button onClick={myfun} 
    variant="contained">Get value</Button>
  </div>

  );
}

export default App;
