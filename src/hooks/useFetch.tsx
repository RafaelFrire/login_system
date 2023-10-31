import Axios from 'axios';



function useFetch({email, pwd}:any) {

  const baseURL : string = "http://localhost:3000/user/";
  
    // Axios.post(baseURL, 
    //   {"email": email,
    //   "password": pwd
    // });

    Axios({
      method: "get",
      url: baseURL
    }).then((Response) =>{
      const data = Response.data;
      data.map((e:any) =>{
        if(e.email == email && e.password == pwd){
          console.log(e);
        }
      })
    })

    // validar se existe



    return (
    <div>useFetch</div>
  )
}

export default useFetch