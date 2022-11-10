import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
let Protected = (props) => {
  let Cmp = props.Cmp
  let navigate = useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem('use-info')){
      navigate('/register')
    }
  },[])
  return(
    <div><Cmp /></div>

  );
}
export default Protected;