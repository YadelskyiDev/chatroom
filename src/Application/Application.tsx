import React, { Component } from 'react'
import { Authorization } from '../Components/Authorization'
import { Chatroom } from '../Components/Chatroom'
import {firebaseInit} from './firebase' 


interface IState {
    isLogin: boolean;

}
@firebaseInit
export class Application extends Component<{}, IState>{

    state = {
        isLogin: false,
    }

    setLogin = () => {
        this.setState({isLogin: true})
    }

    componentDidMount(){
        this.setState({isLogin: !!localStorage.getItem('email')})
        document.addEventListener('setEmail', this.setLogin)
    }

    componentWillUnmount() {
        document.removeEventListener('setEmail', this.setLogin)
    }
    
    render(){
        return(
            <div>
                <p>Application</p>
                {this.state.isLogin ? 
                    <Chatroom /> :
                    <Authorization />}
            </div>
        )
    }
}