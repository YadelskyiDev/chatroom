import React, { Component } from 'react'
import { Button } from '../Button'

interface IState {
    email: string;
    password: string;
}

export class Authorization extends Component<{}, IState> {
    
    state = {
        email: '',
        password: '',
    }

    sendData = (event: React.MouseEvent<HTMLFormElement>)  => {
        event.preventDefault()

       fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDNhISjEoQL3YrTn1ubR4iMrMo2UojuyeE', {
            method: 'POST',
            body: JSON.stringify({ returnSecureToken: true, ...this.state}),
        }).then( (response: any) =>{
            if (response.ok) {
                this.setState(response)
            }
            else {
                fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDNhISjEoQL3YrTn1ubR4iMrMo2UojuyeE', {
                    method: 'POST',
                    body: JSON.stringify({ returnSecureToken: true, ...this.state }),
                }).then((response: any) =>{
                    if(response.ok){
                        this.setState(response)
                    }
                }
            )}
        })
    }

    inputEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({email: e.target.value})
    }

    inputPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ password: e.target.value })
    }


    render(){
        console.log(this.state)
        return (
            <form onSubmit={this.sendData}>
                <input type='email' value={this.state.email} onChange={this.inputEmailHandler} required/>
                <input type='password' onChange={this.inputPasswordHandler} value={this.state.password} required/>
                <Button type='submit'>Submit</Button>
            </form>
        )
    }
}
   
