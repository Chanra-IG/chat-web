import React, { FC, createContext, useEffect, useContext, useState } from 'react';
import { Channel, Socket } from 'phoenix';
import {v4} from 'uuid';


export const SocketContext = createContext<Socket>({} as Socket);
export const useSocket = () => useContext(SocketContext);

export const SocketProvider: FC = ({children}) => {
    const socket = new Socket("ws://localhost:8080/socket", {params: {userToken: v4()}});
        

    useEffect(() => { 
        socket.connect();
    }, []);
    
    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
    
};