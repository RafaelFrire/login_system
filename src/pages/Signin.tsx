import React from 'react';
import  { Input, FormContainer, Title, BtnSubmit } from "../components/Styled-componts/Components.tsx";
import Header from '../components/header/header.tsx';
import useFetch from '../hooks/useFetch.tsx';

function Signin() {
  const [email, setEmail] = React.useState('rafael@teste.com');
  const [pwd, setPwd] = React.useState('123456');
  const [mensage, setMensage] = React.useState(false);


// autenticator
  React.useEffect(()=>{
    useFetch({email, pwd})
    

  },[])
  return (
    <div className="container-sm">
      <Header title="Vision Solution"/>
    <FormContainer>
    
      <Title> Login </Title>
          <Input type="email" required placeholder="user@email.com"
          onChange={(e)=> setEmail(e.target.value)} minLength={5}/>
          
          {mensage ? <p>E-mail incorreto</p> : '' }

          <Input type="password" placeholder="password:" required onChange={(e)=> setPwd(e.target.value)}></Input>
          <BtnSubmit >Entrar</BtnSubmit>
    </FormContainer>
</div>
  
  )
}

export default Signin;