import React from 'react';
import { RoomProvider } from '../../common/context';
import Sidebar from '../../components/Layout/Sidebar';
import { Wrapper } from '../../components/Wrapper';
import ChatRoom from './ChatRoom';

export default function Chat() {
    return (
        <Wrapper>
            <RoomProvider>
                <Sidebar />
                <ChatRoom />
            </RoomProvider>
        </Wrapper>  
    );
}