import React from 'react';

export function MessageList(props) {
    return (
        <ul>
            <MessageItem message="Hello world" />
            <MessageItem message="Goodbye!" />
            <MessageItem message="Are we there yet?" isLoud={true} />
        </ul>
    )
}

//props is an object!! {}
function MessageItem(props) {
    const message = props.message;
    const isLoud = props.isLoud;

    let toShow = message;
    if(isLoud) {
        toShow = message.toUpperCase();
    }

    return (
        <li>{toShow}</li>
    )
}
