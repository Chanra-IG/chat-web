import React from 'react';
import { RoomContext } from '../../common/context';

export const ChatDetail = () => {
    const currentUser = localStorage.getItem('currentUser');

  return (
    <RoomContext.Consumer>
        {({room, histories}) => (
        <div className="flex flex-col space-y-1">
            {histories?.get(room?.id)?.map(({from, content}, index) => {
                return currentUser === from ? 
                (
                    <div key={index} className="bg-blue-300 text-right py-1 px-3">
                        <p className="font-thin text-sm">You</p>
                        <p className="font-bold text-black-300">{content}</p>
                    </div>
                ) : (
                    <div key={index} className="bg-blue-100 text-left py-1 px-3">
                        <p className="font-thin text-sm">{from}</p>
                        <p className="font-bold text-black-300">{content}</p>
                    </div>
                );
            })}
        </div>
        )}
    </RoomContext.Consumer>
  );
};
