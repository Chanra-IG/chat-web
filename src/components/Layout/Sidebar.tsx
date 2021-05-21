import React, { useEffect, useState } from 'react';
import { axiosRequest, useSocket } from '../../common';
import kid from '../../assets/kid.jpg';
import { Image } from '../Image';
import { RoomContext, useRoom } from '../../common/context';

export interface Room {
    id: number;
    name: string;
}

export interface RoomList {
    data: Room[];
}

const Sidebar = () => {
    const [rooms, setRooms] = useState<Room[]>([]);
        
    useEffect(() => {
        const fetchRooms = async () => {
            const { data } = await axiosRequest<RoomList>('/rooms', 'GET');
            setRooms(data);
        }
        
        fetchRooms();
    }, []);


    return (
        <RoomContext.Consumer>
            {(data) => {
                return (
                    <section className="flex-col flex-none hidden w-24 overflow-auto transition-all duration-300 ease-in-out hover:w-64 group lg:max-w-sm lg:block md:w-2/5">
                        <div className="flex-1 p-2 overflow-y-auto">
                            {rooms.map(({id, name}) => {
                                return (
                                    <div 
                                        key={id}
                                        onClick={() => data.roomClick({id, name})}
                                        className="relative flex items-center justify-between p-3 rounded-lg cursor-pointer hover:bg-blue-50">
                                        <div className="relative flex flex-shrink-0 w-16 h-16">
                                            <Image image={kid} />
                                        </div>
                                        <div className="flex-auto min-w-0 ml-4 mr-6 text-base font-bold">
                                            <p>{name}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </section>
                );
            } }
        </RoomContext.Consumer>
    )
}

export default Sidebar;