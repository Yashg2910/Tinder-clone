import React, { useState, useEffect } from 'react'
import "./ChatScreen.css"
import Avatar from '@material-ui/core/Avatar';

function ChatScreen() {

    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([
        {
            name: "Ellen",
            image: "https://cdn.psychologytoday.com/sites/default/files/styles/image-article_inline_full/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=ji6Xj8tv",
            message: "What's up?"
        },
        {
            name: "Ellen",
            image:"https://cdn.psychologytoday.com/sites/default/files/styles/image-article_inline_full/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=ji6Xj8tv",
            message: "How's it going?"
        },
        {
            message: "What's up?"
        }        
    ])

    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, {message:input}]);
        setInput('');
    }

    const pathArray = window.location.pathname.split('/');
    var matchName = pathArray[2];
    return (
        <div className="chatScreen">
            <p>You matched with {matchName} on 31/02/2020</p>
            {messages.map(message => (

                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar className="chatScreen__image" alt={message.name} src={message.image}/>
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                )
                : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                ) 
            ))}

            <form className="chatScreen__input">
                <input 
                    value = {input}
                    onChange = { (e)=> setInput(e.target.value)}
                    className="chatScreen__inputField"
                    placeholder="Type a message...." 
                >
                </input>
                <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
            </form>

        </div>
    )
}

export default ChatScreen
