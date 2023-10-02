import Message from "./message"
import ListGroup from "./components/ListGroup";
//import { Fragment } from "react";
import Alert from "./components/alert";
import Button from "./components/button";
function App() {
  const items = [
    'paku',
    'salak',
    'nagor',
    'noman',
    'manis'
];
let cities=[
  'chennai',
  'trichy',
  'madurai'
];

  return (
    <>
      <ListGroup items={items} heading="names"/>
      <Message />
      <ListGroup items={cities} heading="cities"/>
      <Alert>
        DHANUSHHH <h1>DHANUSHHH</h1>
        </Alert>  
      <Button children="helo" onclik={() => window.alert("button is clicked")} colour="primary"/>
    </>

  );
}



export default App;