import React,{useState} from "react";
import './style.css'

const Login =()=>{
    const [username,setUsername]= useState('')
    console.log({username});
    const [password,setPassword]= useState('')
    console.log({password});
    const handleSubmit=async(f)=>{
        f.preventDefault();
        const data={
            username:username,
            password:password,
        }
        try{
            const response=await fetch('https://dummyjson.com/auth/login',{
                method: "POST",
                headers:{
                    "content-Type":"application/json"
                },
                body:JSON.stringify(data)
            })
            const result=await response.json();
            console.log({result});
        }
        catch(error){
            console.log(error.message);
        }
    }
    return(
    <div>
        <form className="form" onSubmit={handleSubmit}>
             <h1>Login</h1>
             <input placeholder="Enter Username" type="text"
             onChange={(f)=>{setUsername(f.target.value)}}/>
            <br/>
            <br/>
            <input placeholder="Enter Password" type="text"
            onChange={(f)=>{setPassword(f.target.value)}}/>
            <br/>
            <br/>
            <br/>
            <br/>
            <button type="Submit">Login</button>
          </form>
        </div>
    )
};
export default Login;