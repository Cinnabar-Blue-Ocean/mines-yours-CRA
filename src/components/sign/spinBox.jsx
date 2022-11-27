import React,{useState} from 'react';
import ad from '../../media/ad.mov';
import ad2 from '../../media/ad2.mov';
import ad3 from '../../media/ad3.mov';
import ad4 from '../../media/ad4.mov';
import trade from '../../media/trade.png';
import trade2 from '../../media/trade2.jpeg';
import trade3 from '../../media/trade3.png';
import trade4 from '../../media/trade4.png';
import Card from './Card.jsx'
import logo from '../../media/logo-no-background.png';

function SpinBox() {
    const images = [ad,trade,ad2,trade2,ad3,trade3,ad4,trade4]
    const [stop,setStop]=useState(`running`)
    let radius = 450;


  return (
    <div id='dragBox' style={{flex:'2'}}>
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
      {/* <video  src={ad} autoplay loop controls muted>
      </video> */}
      {/* <video id='my-video' muted autoplay={'autoplay'} loop={true}>
      <source src={ad}  type="video/mp4"></source>
      </video> */}
      <div id='focusBox' style={{backgroundImage:`url(${logo})`}}>
      {/* Platform Allows Users to Swap Used items */}
        {/* <p id='focus'>Mines Yours</p> */}
      </div>
      <div id='ground' style={{transform: `translate(-50%,-50%) rotateX('90deg')`}}></div>
    </div>
    </div>
  );
}

export default SpinBox;