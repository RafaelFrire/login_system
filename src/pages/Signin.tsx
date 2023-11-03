import React from 'react';
import {BtnSubmit, FormContainer, Input, Title } from "../components";
import Header from '../components/header.tsx';
import useFetch from '../hooks/useFetch.tsx';

function Signin() {
  const [email, setEmail] = React.useState('starlink@com.br');
  const [pwd, setPwd] = React.useState('123456');

  
const user = useFetch({email, pwd});


React.useEffect(()=>{
  
  },[user])

  function handleClick(event: React.FormEvent){
    event.preventDefault()
    
  }


  return (
    <div className="container-sm">
      <Header title="Vision Solution"/>
    <FormContainer>
      <Title> Login </Title>
          <Input type="email" required placeholder="user@email.com"
          onChange={(e)=> setEmail(e.target.value)} minLength={5}/>
          <Input type="password" placeholder="password:" required onChange={(e)=> setPwd(e.target.value)}></Input>
          <BtnSubmit typeof='submit' onClick={handleClick}>Entrar</BtnSubmit>
    </FormContainer>
  </div>
  
  )
}

export default Signin;