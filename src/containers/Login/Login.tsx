import React, { useState } from 'react';
import { useHistory } from 'react-router';

export default function Login() {
    const [name, setName] = useState('');
    const history = useHistory();

    function login(name: string) {
        localStorage.setItem('currentUser', name);
        history.push('/chat');
    }

    return (
        <div className="justify-center">
            <div className="flex flex-row space-x-2">
                <input
                    className="py-2 pl-10 bg-gray-100 outline-none focus:text-gray-700"
                    type="text"
                    placeholder="Your name"
                    required
                    value={name}
                    onChange={({target}) => setName(target.value)}
                />
                <button
                    type="button"
                    className="bg-blue-500 px-3 text-white"
                    onClick={() => login(name)}
                >
                    Login
                </button>
            </div>
        </div>
    );
}