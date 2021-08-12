import React from 'react';
import "./Loading.css";

/* loading effects of framed room data */
function Loading() {
  return (
    <div className='loading'>
      <h4>loading....</h4>
      <img src="./images/gif/loading-arrow.gif" alt="" />
    </div>
  );
}

export default Loading;