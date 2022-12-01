import React, { Component } from 'react';
import API from '../axios/Api';

export default class Register extends Component {
    date = new Date()

    state = {
        "email" : "",
        "password" : "",
        "phone_number" : "",
        "created_at" : this.date,
        "updated_at" : this.date,
    }

    handlerChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    handlerSubmit = async (event) => {
        event.preventDefault()
        await API.post('auth/addauth.php',this.state)
    }

  render() {
    return (
        <>
            <div className='bg-sky-500 flex justify-center h-full'>
                <form onSubmit={this.handlerSubmit} method="POST" className='w-[20%] border-2 border-[#252525] p-4'>
                    <div className='mt-2'>
                        <label for="email"><b>Email</b></label>
                        <br></br>
                        <input onChange={this.handlerChange} type="email" name="email" required className='w-full'/>
                    </div>
                    <div className='mt-2'>
                        <label for="password" ><b>Password</b></label>
                        <br></br>
                        <input onChange={this.handlerChange} type="password" name="password" required className='w-full'/>
                    </div>
                    <div className='mt-2'>
                        <label for="phone_number" ><b>Phone Number</b></label>
                        <br></br>
                        <input onChange={this.handlerChange} type="text" name="phone_number" required className='w-full'/>
                    </div>
                
                    <input type="submit" value="Register" className='mt-4 py-2 px-4 bg-red-200'/>
                </form>
            </div>
        </>
    )
  }
}

