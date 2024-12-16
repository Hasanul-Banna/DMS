import React from 'react';

const ProgressBar = () => {
  return (
    <div className="w-full h-1.5 bg-gray-300 rounded-sm overflow-hidden relative shadow-2xl">
      <div className="absolute top-0 left-0 h-full w-[15%] bg-gray-700 rounded-full animate-bounce-progress"></div>
      <style>
        {`
          @keyframes bounce-progress {
            0%, 100% {
              left: 0;
            }
            50% {
              left: 90%;
            }
          }
          .animate-bounce-progress {
            animation: bounce-progress 2.2s infinite ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default ProgressBar;
