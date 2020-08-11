import React from 'react'
import Chat from "./Chat"

function Chats() {
    return (
        <div>
            <Chat
                name = "Sarah"
                message = "Yo!! What is up??"
                timestamp = "5 minutes ago"
                profilePicture = "https://cdn.psychologytoday.com/sites/default/files/styles/image-article_inline_full/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=ji6Xj8tv"
            />

            <Chat
                name = "Martha"
                message = "Yo!! What is up??"
                timestamp = "5 minutes ago"
                //profilePicture = "https://cdn.psychologytoday.com/sites/default/files/styles/image-article_inline_full/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=ji6Xj8tv"
            />

            <Chat
                name = "Alexi"
                message = "Yo!! What is up??"
                timestamp = "5 minutes ago"
                profilePicture = "https://cdn.psychologytoday.com/sites/default/files/styles/image-article_inline_full/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=ji6Xj8tv"
            />

            <Chat
                name = "Jane"
                message = "Yo!! What is up??"
                timestamp = "5 minutes ago"
                //profilePicture = "https://cdn.psychologytoday.com/sites/default/files/styles/image-article_inline_full/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=ji6Xj8tv"
            />
        </div>
    )
}

export default Chats
