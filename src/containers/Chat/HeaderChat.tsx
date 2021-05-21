import React from 'react';
import { Image } from '../../components/Image';
import kid from '../../assets/kid.jpg';
import { RoomContext } from '../../common/context';

export const HeaderChat = () => {
  return (
      <RoomContext.Consumer>
          {({room}) => {
              return (
                <div className="flex flex-row items-center justify-between flex-none px-6 py-4 shadow chat-header">
                    <div className="flex">
                        <div className="relative flex flex-shrink-0 w-12 h-12 mr-4">
                            <Image image={kid} />
                        </div>
                        <div className="text-sm">
                            <p className="text-gray-400 font-bold">{room?.name}</p>
                            <p className="text-gray-300 font-normal">You are {localStorage.getItem('currentUser')} </p>
                        </div>
                    </div>
                </div>
              );
          }}
      </RoomContext.Consumer>
    
  );
};
