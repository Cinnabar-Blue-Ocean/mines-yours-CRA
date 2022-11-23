import React from 'react';

function Card({image,index,rotateY,transition,transitionDelay,setStop}) {


  return (
    <img
    // onMouseOver={()=>setStop(`paused`)}
    // onMouseLeave={()=>setStop(`running`)}
    src={image}
    style={{
      transform:`${rotateY}`,
      transition:`${transition}`,
      transitionDelay:`${transitionDelay}`,
    }}
    alt=''/>
  );
}

export default Card;























