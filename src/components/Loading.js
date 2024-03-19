import React from 'react';
import Loader from 'react-spinners/ClipLoader';

const Loading = () => {
  return (
    <div className="loading-container">
      <Loader color={'#fff'} size={100} />
      <p>Scheduling...</p>
    </div>
  );
};

export default Loading;
