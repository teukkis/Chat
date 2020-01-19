import {useState, useEffect, useRef} from 'react';
import socketIOClient from 'socket.io-client';


const UseChat = (props) => {

    const user = props

    const [messages, setMessages] = useState([]);
    const socketRef = useRef();

    useEffect(() => {
        socketRef.current = socketIOClient('http://localhost:2999/');

        socketRef.current.on('newChatMessage', ({message}) => {
            setMessages(messages => [...messages, message])
            
        })

        

        return () => {
            socketRef.current.disconnect();
        }
    }, []);

    const sendMessage = ({message}) => {

        socketRef.current.emit('newChatMessage', {message, user})
        
    }

    return {messages, sendMessage}

}

export default UseChat;