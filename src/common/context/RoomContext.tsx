import React, { createContext, FC, useContext, useEffect, useState } from 'react';
import { Channel } from 'phoenix';

import { Room } from '../../components/Layout';
import { useSocket } from '../socket';

export interface Message {
    from: string;
    to: number;
    content: string;
}

interface RoomData {
    currentUser: string;
    room: Room;
    roomClick: (room: Room) => void;
    sendMessage: (msg: Message) => void;
    message: Message;
    histories: Map<number, Message[]>;
}

export const RoomContext = createContext<RoomData>({} as RoomData);
export const useRoom = () => useContext(RoomContext);

export const RoomProvider: FC = (props) => {
    const [state, setState] = useState<RoomData>({
        histories: new Map<number, Message[]>()
    } as RoomData);
    const { room, message, histories } = state;
    const [channel, setChannel] = useState<Channel>({} as Channel);

    // handle socket
    const socket = useSocket();
    
    const roomClick = (room: Room) => {
        setState({...state, room});
    };

    useEffect(() => {
        setChannel(socket.channel(`room:${room?.id}`));

        if (room) {
            channel
            .join()
            .receive("ok", ({ messages }) => console.log("successfully joined channel", messages || ""))
            .receive("error", ({ reason }) => console.error("failed to join channel", reason));

            // subscribe
            channel.on('new_message', (payload: Message) => {
                const messages = histories.get(room.id) || [];
                messages?.push(payload)
                histories.set(room.id, messages);

                setState({...state, histories});
            });

            state.sendMessage = (payload: Message) => {
                channel.push('new_message', payload).receive('ok', (payload) => {console.log('success: ', payload)});
            };
        }

    }, [room]);

    return (
        <RoomContext.Provider value={{...state, roomClick}}>
            {props.children}
        </RoomContext.Provider>
    );
}
