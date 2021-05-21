import React from 'react';
import { ChatDetail } from './ChatDetail';
import { ChatMessage } from './ChatMessage';
import { HeaderChat } from './HeaderChat';

const ChatRoom = () => {
    return (
        <section className="flex flex-col flex-auto border-gray-300 lg:border-l">
            <HeaderChat />
            <div className="flex-1 h-full p-4 overflow-y-auto">
                <ChatDetail />
            </div>
            <ChatMessage />
        </section>
    );
}

export default ChatRoom;