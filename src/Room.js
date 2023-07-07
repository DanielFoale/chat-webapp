import React from 'react';
import './Room.css';

function Room() {
    let text = window.location.href;
    const array = text.split("=");
    let roomName = array[1];
    return (
        <div className="Room">
            <header className="Room-header">
                <p>room: {roomName}</p>
            </header>
        </div>
    );
}

export default Room;