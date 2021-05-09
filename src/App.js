import './App.css';
import {Button, Input} from '@material-ui/core'
import {useState} from 'react';
function App() {
  const [username, setUsername] = useState('');
  function myfun(){
// now check if username is empty
    // alert(username);

    if(username===""){
        alert('please fill the username');
    }
    else{
      alert(username);
    }
  }
  return (
  <div className="App">
    <h1>Start with React.js</h1>

    <Input onChange={e => setUsername(e.target.value)}/>
    <br/><br/>
<Button onClick={myfun} variant="contained">Get value</Button>
  </div>

  );
}

export default App;
