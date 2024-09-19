
import React from 'react';

interface HistoryProps {
    history: string[]
}

const History: React.FC<HistoryProps> = ({history}) => {
  return (
    <div
    className="history history-panel text-xs md:text-xm lg:text-base
    w-1/3 md:w-1/4 lg:w-1/5"
  >
    {history.map((entry, index) => (
      <div key={index} className="whitespace-pre-wrap">
        {entry}
      </div>
    ))}
  </div>
  )
}

export default History