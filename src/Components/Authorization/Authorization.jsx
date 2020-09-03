import React, { Component } from 'react'
import { Button } from '../Button'

export class Authorization extends Component {
    
    state = {
        email: '',
        password: '',
    }

    sendData = event => {
        event.preventDefault()

       fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDNhISjEoQL3YrTn1ubR4iMrMo2UojuyeE', {
            method: 'POST',
            body: JSON.stringify({ returnSecureToken: true, ...this.state}),
        }).then( response =>{
            if (response.ok) {
                this.setState(response)
            }
            else {
                
                fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDNhISjEoQL3YrTn1ubR4iMrMo2UojuyeE', {
                        method: 'POST',
                        body: JSON.stringify({ returnSecureToken: true, ...this.state }),
                }).then(response =>{
                    if(response.ok){
                        this.setState(response)
                    }
                    
                }
                )}
        })
    }

    inputHandler = e => {
        this.setState({[e.target.type]: e.target.value})
    }

    render(){
        return (
            <form onSubmit={this.sendData}>
                <input type="email" value={this.state.email} onChange={this.inputHandler} required/>
                <input type="password" onChange={this.inputHandler} value={this.state.password} required/>
                <Button type="submit">Submit</Button>
            </form>
        )
    }
}
   
