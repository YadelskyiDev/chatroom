import React, { Component } from 'react'
import { Button } from '../Button'
import { ChatArea } from '../ChatArea'

type Message = {
    email: string;
    text: string;
}

interface IState {
    text: string;
}

export class Chatroom extends Component {

    state = {
        text: '',
    }

    getMessage = (e: React.ChangeEvent<HTMLInputElement> ) => {
        this.setState({
            text: e.target.value
        })
    }

    sendMessage = () => {
        const { text } = this.state
        const email = localStorage.getItem("email") || ''
        const message: Message = {
            email,
            text
        }
        fetch('https://react-chatroom-33b7d.firebaseio.com/.json', {
            method: 'POST',
            body: JSON.stringify({ ...message }),
        })
    }

    render() {
        const {text} = this.state

        return(
            <div>
                <h1>Chatroom</h1>
                <ChatArea/>
                <input onChange={this.getMessage} value={text}/>
                <Button onClick={this.sendMessage}>Send</Button>
            </div>
        )
    }
}