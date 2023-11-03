import Axios from 'axios';
import React from 'react';


function useFetch({email, pwd}:any){
  interface User{
      email: string,
      password: string;
  }

  const [user, setUser] = React.useState([]);
  const [auth, setAuth] = React.useState(false);
  const baseURL : string = "http://localhost:3000/user/";  
    
  React.useEffect(()=>{
    Axios({
      method: "get",
      url: baseURL
    })
    .then((response) =>{
        setUser(response.data)  
    })
  },[])


  React.useEffect(()=>{
      
      if(Array.isArray(user)){
        user.map((event: User)=>{
          if(event.email === email && event.password === pwd){
            console.log("ACESSO PERMITIDO");
            
          }
          else{
            console.log("DADOS INCORRETO!!!");
          }
        })
      }
    
   // console.log(email)

  },[user])


    return (
    user
  )
}


export default useFetch