import './App.css';
import {Button, input, Container} from 'react-bootstrap';
import {useState} from 'react';
function App() {
  const [value, setValue] = useState();


  function myfun(){
    var p = new RegExp(/^[0-9\b]+$/);
    if(value==""){
      alert('please fill the value');
    }
    else if(!p.test(value)){
      alert('please enter only numbers');
    }
    else if(value.length!=10){
      alert('please enter 10 digit contact number');
    }
    else{
      alert(value);
    }
  }
return (
 <>
 <Container>
  
   <input onChange={e => setValue(e.target.value)}/>
   <Button onClick={myfun}>Click</Button>
   </Container>
 </>

  );
}

export default App;
