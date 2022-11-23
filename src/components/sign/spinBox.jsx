import React,{useState} from 'react';
import bolt from '../../media/bolt.jpg';
import cloud from '../../media/cloud.jpg';
import rain from '../../media/rain.jpg';
import snow from '../../media/snow.jpg';
import sun from '../../media/sun.jpg';
import recycle from '../../media/recycle.jpg';
import Card from './Card.jsx'
import logo from '../../media/logo-no-background.png';

function SpinBox() {
    const images = [bolt,cloud,rain,snow,sun,recycle]
    const [stop,setStop]=useState(`running`)
    let radius = 360;

  return (
    <div id='dragBox' style={{flex:'1.6'}}>
    <div id='spinBox' style={{animationPlayState:`${stop}`}}>
    {/* <image src={recycle} alt='recycle'/> */}
     {images.map((image,index)=>{
      const rotateY = `rotateY(${index*(360/images.length)}deg) translateZ(${radius}px)`
      const transition = `transform 1s`;
      const transitionDelay = `${(images.length-index)/4}s`;

        return (
          <>
          <Card
            key={index}
            index={index}
            image={image}
            rotateY={rotateY}
            transition={transition}
            transitionDelay={transitionDelay}
            setStop={setStop}

           />
          </>
        )
     })}
      <div id='focusBox' style={{backgroundImage:`url(${logo})`}}>
        {/* <img src={logo} id='focus' style={{padding:'20px'}}/> */}
      </div>
    </div>
    </div>
  );
}

export default SpinBox;