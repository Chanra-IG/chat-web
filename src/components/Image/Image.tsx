import React from 'react';

export const Image: React.FC<{ image: string }> = (props) => {
  return (
    <img
      className="object-cover w-full h-full rounded-full "
      src={props.image}
      alt=""
    />
  );
};
