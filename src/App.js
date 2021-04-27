import './App.css';
import {Button} from '@material-ui/core'
function App() {
  function myfun(){
    alert('hello sholay');
  }
  return (
  <div className="App">
    <h1>Sholay</h1>
    <Button variant="contained"
    onClick={myfun}>Click</Button>
  </div>

  );
}

export default App;
