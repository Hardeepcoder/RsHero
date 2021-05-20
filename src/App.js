import './App.css';
import {Container, Button, Alert} from 'react-bootstrap'
import { useState } from 'react';
function App() {
 const [show, setShow] = useState();

  return (
 <>
    <Container>
      <h1>Bootstrap in reactjs</h1>
      <Alert variant="success" show={show}>
        <Alert.Heading>This is heading</Alert.Heading>
        <p>this is content</p>
      </Alert>
    <Button variant="danger"
    onClick={() => setShow(false)}>Close X</Button>
    </Container>
 </>

  );
}

export default App;
