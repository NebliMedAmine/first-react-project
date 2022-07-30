
import './App.css';
import React from 'react';
import {  Col, Form,  FormGroup, Label, Input, Button } from 'reactstrap'; 
import Myimage from "./React-icon.svg.png"




function App() {
  return (
    <div className="App">

    <Form className="form">  
        <Col>  
          <FormGroup row>  
            <Label for="name" sm={2}>Name</Label>  
            <Col sm={10}>  
              <Input type="text" id="name" placeholder="Enter a name" />  
            </Col>  
          </FormGroup>  
          <FormGroup row>  
            <Label for="address" sm={2}>Address</Label>  
            <Col sm={10}>  
              <Input type="text" id="Address" placeholder="Enter Addrress" />  
            </Col>  
          </FormGroup>  
          <FormGroup row>  
            <Label for="Password" sm={2}>Password</Label>  
            <Col sm={10}>  
              <Input type="Password" id="Password" placeholder="Enter Password" />  
            </Col>  
          </FormGroup>  
        </Col>  
        <Col>  
          <FormGroup row>  
            <Col sm={5}>  
            </Col>  
            <Col sm={1}>  
              <Button color="success">Save</Button>{' '}  
            </Col>  
            <Col sm={1}>  
              <Button color="success">Cancel</Button>{' '}  
            </Col>  
            <Col sm={5}>  
            </Col>  
          </FormGroup>  
        </Col>  
      </Form>  
      <img src={Myimage} alt="the nest"/>
    </div>
  );
}

export default App;
