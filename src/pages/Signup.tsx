import React from 'react';
import {BtnSubmit, FormContainer, Input, Title } from "../components";
import Header from '../components/header.tsx';


function Signup() {
  return (
    <div className="container-sm">
      <Header title="Vision Solution"/>
    <FormContainer>
    
      <Title> Sign UP </Title>
          <Input type="email" required placeholder="Name"
           minLength={5} />
          <Input type="email" required placeholder="Lastname"
           minLength={5}/>
          <Input type="email" required placeholder="E-mail"
           minLength={5}/>
          <Input type="password" placeholder="password:" required></Input>
          <BtnSubmit typeof='submit' >Register</BtnSubmit>
    </FormContainer>
</div>
  )
}

export default Signup;