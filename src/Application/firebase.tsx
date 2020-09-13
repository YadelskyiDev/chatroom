import React from 'react'
import firebase from 'firebase'

export const firebaseInit: any = (WrappedComponent: React.ComponentType<any>)  => (props: any)=> {
    const firebaseConfig = {
        apiKey: "AIzaSyDNhISjEoQL3YrTn1ubR4iMrMo2UojuyeE",
        authDomain: "react-chatroom-33b7d.firebaseapp.com",
        databaseURL: "https://react-chatroom-33b7d.firebaseio.com",
        projectId: "react-chatroom-33b7d",
        storageBucket: "react-chatroom-33b7d.appspot.com",
        messagingSenderId: "892080681598",
        appId: "1:892080681598:web:01efdfa30418c0dd371e2f",
        measurementId: "G-15HBP1QLSW"
    };
    firebase.initializeApp(firebaseConfig);

    return <WrappedComponent {...props} />
}
    
