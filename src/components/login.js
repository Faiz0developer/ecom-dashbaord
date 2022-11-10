import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();
  useEffect(()=>{
    if(localStorage.getItem('use-info')){
      navigate('/add')
    }
  },[])
  let login = async () =>{
    let data = {email,password}
    let result = await fetch('https://reqres.in/api/login', {
      method:'Post',
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    });
    let resp = await result.json();
    localStorage.setItem('use-info', JSON.stringify(resp));
    navigate('/add')
  }
  return(
    <div>
      <Header />
      <div className="col-sm-3  offset-sm-4">
        <h1>Login</h1>
        <input type='text' className="form-control" placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)}
        />
        <br/>
        <input type='password' className="form-control" placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
        />
        <br/>
        <button className="btn btn-primary" onClick={login}>Login</button>
      </div>
    </div>
  );
}
export default Login;