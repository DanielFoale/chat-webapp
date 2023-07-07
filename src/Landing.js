import { useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

function Landing() {
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const handleSubmit = e => {
        e.preventDefault(); 
        navigate(`/room?name=${name}`);
    }
    return (
        <div className="Landing">
            <header className="Landing-header">
                <p>enter chatroom code</p>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    onKeyDown={e => {
                        if (e.key === 'Enter') {
                            handleSubmit(e)
                        }
                    }}
                />
            </header>
        </div>
    );
}

export default Landing;