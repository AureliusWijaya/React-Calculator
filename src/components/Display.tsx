import React from 'react';

interface DisplayProps {
    value: string;
    previousValue: string;
    operator: string | null;
}
const Display: React.FC<DisplayProps> = ({value,previousValue,operator}) => {
  return (
    <div className="flex-1 flex flex-col justify-between">
    <div className="text-2xl self-end">
      {previousValue !== '0' && previousValue} {operator !== "=" && operator}
    </div>
    <div className="text-2xl self-end">{value}</div>
  </div>
  )
}

export default Display