import React,{useEffect,useState} from 'react';
import API from '../axios/Api';

export default function Login() {
    const [data,setData] = useState([]);
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const handlerEmail = (e) =>{
        e.preventDefault();
        setEmail(e.target.value)
    };

    const handlerPassword = (e) =>{
        e.preventDefault();
        setPassword(e.target.value)
    };
    
    useEffect (() => {
        API.get("auth/viewauth.php")
        .then(response => {
            console.log("Getting from :",response.data)
            setData(response.data)
        })
        .catch(error => console.log(error))
    },[]);

    const handlerLogin = (data,email,password) =>{
        for(let i in data){
            if(data[i].email === email && data[i].password === password){
                console.log("data sama");
                window.location = '/product';
            }else{
                console.log("data tidak ada");
            }
        }
    }

    return (
        <>
                <div className='bg-sky-500 flex justify-center h-full'>
                    <form onSubmit={handlerLogin(data,email,password)} className='w-[20%]  border-2 border-[#252525] p-4'>
                        <div className='mt-2'>
                            <label for="email"><b>Email</b></label>
                            <br></br>
                            <input onChange={handlerEmail} value={email} type="email" name="email" required className='w-full'/>
                        </div>
                        <div className='mt-2'>
                            <label for="password" ><b>Password</b></label>
                            <br></br>
                            <input onChange={handlerPassword} value={password} type="password" name="password" required className='w-full'/>
                        </div>
                        <div className='flex justify-between'>
                            <a href='/'>Forgot Password?</a>
                            <a href='/register'>Register</a>
                        </div>
                        <input type='submit' value="login" className='mt-4 py-2 px-4 bg-red-200'/>
                    </form>
                </div>
                
            </>
    )
}
