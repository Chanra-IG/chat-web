import React from 'react';

export const Wrapper: React.FC = (props) => {
  return (
    <div className="flex w-full h-screen overflow-hidden text-black ">
      <div className="flex flex-col flex-1">
        <div className="flex flex-row flex-grow min-h-0">{props.children}</div>
      </div>
    </div>
  );
};
