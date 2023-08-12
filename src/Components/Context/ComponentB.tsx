import React from 'react';

interface ComponentBProps {
  onClick: () => void;
}

const ComponentB: React.FC<ComponentBProps> = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick}>Click</button>
    </div>
  );
};

export default ComponentB;
