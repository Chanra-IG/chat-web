import React, { useState } from 'react';
import { RoomContext } from '../../common/context';
import { IconSend } from '../../components/Icon';

export const ChatMessage = () => {
    const [content, setContent] = useState('');
    const currentUser = localStorage.getItem('currentUser') || '';

    return (
        <RoomContext.Consumer>
            {({room, sendMessage}) => {                
                return (
                    <div className="flex-none">
                        <div className="flex flex-row items-center p-4">
                            <div className="relative flex-grow">
                                <input
                                    className="w-full py-2 pl-10 bg-gray-100 outline-none cursor-pointer rounded-2xl focus:text-gray-700"
                                    type="text"
                                    placeholder="Aa"
                                    value={content}
                                    onChange={({target}) => setContent(target.value)}
                                />
                            </div>
                            <button
                                type="button"
                                className="flex flex-shrink-0 w-6 h-6 mx-2 text-blue-600 focus:outline-none hover:text-blue-700"
                                onClick={() => {
                                    sendMessage({content, to: room?.id, from: currentUser});
                                    setContent('');
                                }}
                            >
                                <IconSend />
                            </button>
                        </div>
                    </div>
                );
            }}
        </RoomContext.Consumer>
    );
  
};
