import React, { useState } from 'react';

interface ComponentAProps {
  value: string;
  onChange: (newValue: string) => void;
}

const ComponentA: React.FC<ComponentAProps> = ({ value, onChange }) => {
  return (
    <div>
      <p>Value in Component A: {value}</p>
    </div>
  );
};

export default ComponentA;
