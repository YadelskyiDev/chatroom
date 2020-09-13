import React, { Component } from 'react'
import * as firebase from 'firebase/app'
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

    setEmail = () => {
        localStorage.setItem('email', this.state.email)
        document.dispatchEvent(new Event('setEmail'))
    }
    
    registerHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const { email, password } = this.state
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((response: any) => {
            console.log(response)
            this.setEmail()
        })
    }

    loginHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const { email, password } = this.state
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((response: any) => {
            this.setEmail()
         })
    }

    inputEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({email: e.target.value})
    }

    inputPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ password: e.target.value })
    }

    render(){
        return (
            <div>
                <input type='email' value={this.state.email} onChange={this.inputEmailHandler}  required/>
                <input type='password' onChange={this.inputPasswordHandler} value={this.state.password} required/>
                <Button onClick={this.loginHandler}>Login</Button>
                <Button onClick={this.registerHandler}>Register</Button>
            </div>
        )
    }
}
   
