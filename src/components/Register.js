import Header from './Header';
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
let Register = () => {
  useEffect(()=>{
    if(localStorage.getItem('use-info')){
      navigate('/add')
    }
  },[])
  let [email, setEmail] = useState("") 
  let [fName, setFName] = useState("") 
  let [lName, setLName] = useState("") 
  let [password, setPassword] = useState("") 
  let navigate = useNavigate();

  let fetchItem = async () => {
    let item = {email, fName, lName, password}
    let result= await fetch("https://reqres.in/api/users?page=2", {
      method:'Post',
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body:JSON.stringify(item)
    });
    let resp = await result.json();
    localStorage.setItem("use-info", JSON.stringify(resp));
    navigate('/add');
  }
   return (
    <>
    <div className='col-sm-11'><Header /></div>
    <div className="col-sm-4 offset-sm-4">
      <h1>Sign Up</h1>
      <br />
      <input type="email" className="form-control"
       onChange={(e)=>setEmail(e.target.value)}
       value={email}
       placeholder="Email"
      />
      <br />
      <input type="text" className="form-control"
       onChange={(e)=>setFName(e.target.value)}
       value={fName}
       placeholder="First Name"
      />
      <br />
      <input type="text" className="form-control"
       onChange={(e)=>setLName(e.target.value)}
       value={lName}
       placeholder="Last Name"
       />
       <br/>
      <input type="text" className="form-control"
       onChange={(e)=>setPassword(e.target.value)}
       value={password}
       placeholder="Password"
      />
      <br />
      <button className= "btn btn-primary"
       onClick={fetchItem}
      >Sign Up</button>
    </div>
    </>
  );
}
export default Register;