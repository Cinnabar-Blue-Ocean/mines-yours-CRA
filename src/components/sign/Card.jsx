import React from 'react';

function Card({image,index,rotateY,transition,transitionDelay,setStop}) {


  return (
    <>
    {index%2===0?
      <video id='my-video' muted autoplay={'autoplay'} loop={true}
      style={{
        transform:`${rotateY}`,
        transition:`${transition}`,
        transitionDelay:`${transitionDelay}`,
        // width:'100%',
        // height:'100%'
      }}
        onMouseOver={(e)=>console.log(e.target)}
      >
      <source src={image}  type="video/mp4"></source>
      </video>
      :
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
      }

    </>
  );
}

export default Card;























