import React from 'react';
import  { Input, FormContainer, Title, BtnSubmit } from'../Styled-componts/Components.tsx';


function Login_component() {
// create states
  const [email, setEmail] = React.useState('');
  const [pwd, setPwd] = React.useState('');
  const [mensage, setMensage] = React.useState(true);



  function Authenticator(){
      if(email.length < 5){
        setMensage(false);
      }
      else{
        setMensage(true);
      }
    }


// autenticator
  React.useEffect(()=>{
    Authenticator()
    

  },[email, pwd])



  return (
    <div className="container-sm">
   
      <FormContainer>
        <Title> Login </Title>
            <Input type="email" required placeholder="user@email.com"
            onChange={(e)=> setEmail(e.target.value)} minLength={5}/>
            
            {mensage ? '' : <p>E-mail incorreto</p> }

            <Input type="password" placeholder="password:" required onChange={(e)=> setPwd(e.target.value)}></Input>
            <BtnSubmit>Entrar</BtnSubmit>
      </FormContainer>
  </div>
  )
}

export default Login_component