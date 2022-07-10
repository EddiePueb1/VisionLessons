import React, { useRef, useEffect, useState, createContext } from 'react'
import { LContainer, Sliders, Slider } from '../GlobalElements'
import{
  StopSign,
  ImgContainer,
  ImgCanvas,
  PreviewContainer,
  TextContainer,
  PreviewCanvas
} from './L2_Elements';

import stop from '../../img/Stop_sign.png'
import userEvent from '@testing-library/user-event';


const Lesson2 = () => {

  
  const [slider1, slide1] = useState(0);
  const [slider2, slide2] = useState(0);
  const [slider3, slide3] = useState(0);


  const [rgb_out, rgb_in] = useState("rgb(0,0,0)");

  const canvasRef = useRef(null);
  const imgRef = useRef(null)
  const contextRef = useRef(null);
  var x = null;
  var y = null;

  var data = null;
  var imgData = null;
  var red = null,
      green = null,
      blue = null,
      alpha = null;

  const preview1 = (e) => {
    slide1(e.target.value);
  }
  const preview2 = (e) => {
    slide2(e.target.value);
  }
  const preview3 = (e) => {
    slide3(e.target.value);
  }

  // const Mouse = () => {
  //   useMouse(data)
  // }
  const useMouse = ({nativeEvent}) => {
    const {offsetX, offsetY} = nativeEvent;
    contextRef.current.moveTo(offsetX,offsetY);
    x = offsetX;
    y = offsetY;

    var r_val = slider1,
        g_val = slider2,
        b_val = slider3;
    



    

    // let test = Math.floor(((y*data.width) + x) * 4)
 
    // console.log(data.width);/
    // console.log(data.width*data.height*4);
    red = imgData[((data.width * y) + x) * 4];
    green = imgData[((data.width * y) + x) * 4 + 1];
    blue = imgData[((data.width * y) + x) * 4 + 2];
    alpha = imgData[((data.width * y) + x) * 4 + 3];



    console.log(red);
    console.log(green);
    console.log(blue);
    console.log(alpha);

    // var color = GetPixelColour(x,y)
    // console.log(color);
    // for(let n = 0; n < data.width*data.height*4; n++) {
    //   if ( n === test) {
    //     for (let i = 0; i < 20; i++) {
    //       for (let j = 0; j < 20; j++){
    //         data.data[test + ((j*4) + 0) + data.width*4*i] = pix1;
    //         // console.log(pix1);
    //         // console.log(data.data[test + ((j*4) + 0) + data.width*4*i])
    //         // console.log(test + ((j*4) + 0) + data.width*4*i)
    //         // console.log(data.width);
    //         data.data[test + ((j*4) + 1 ) + data.width*4*i + 1] = pix2;
    //         // console.log(pix1);
    //         data.data[test + ((j*4) + 2 ) + data.width*4*i + 2] = pix3;
    //         // console.log(pix2);

    //       }
    //     }
    //     console.log("indisde the f statemnt");
    //   }
    // }
  }


  useEffect(() => {
    const canvas = canvasRef.current;
    const img = imgRef.current;
    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;
    // canvas.style.width = `${window.innerWidth}px`;
    // canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext("2d")
    context.drawImage(img,1,1);
    data = context.getImageData(0,0, canvas.width, canvas.height);
    imgData = data.data;
    contextRef.current = context;
    // console.log(data);
    // console.log(imgData)

    for(var i = 0, n = imgData.length; i < n; i+=4){
      // red = imgData[i];
      // green = imgData[i+1];
      // blue = imgData[i+2];
      // alpha = imgData[i+3];

      // imgData[i] = imgData[i] ^ 255;
    } 


    context.putImageData(data, 0,0 );
    RGB();

  }, [ useMouse, slider1, slider2, slider3]);

  const RGB = () => {
    var rgb = "rgb(" + slider1 + "," + slider2 + "," + slider3 + ")";
    rgb_in(rgb);
  }



  return (
    <LContainer id='L2'>
      <ImgContainer>
      <StopSign src={stop} ref={imgRef} alt={'Stop Sign'}/>
        <ImgCanvas ref={canvasRef} onMouseDown={useMouse} width={800} height={900}></ImgCanvas>
      </ImgContainer>

      <PreviewContainer>
        <TextContainer>
          Preview Color
        </TextContainer>
        <PreviewCanvas  backgroundColor={rgb_out} width={50} height={50}></PreviewCanvas>
      </PreviewContainer>

      <Sliders>
        <TextContainer>Red Value</TextContainer>
        <Slider type={"range"} onInput={preview1} min={0} max={255} value={slider1} ></Slider>
        <TextContainer>Green Value</TextContainer>
        <Slider type={"range"} onInput={preview2} min={0} max={255} value={slider2}></Slider>
        <TextContainer>Blue Value</TextContainer>
        <Slider type={"range"} onInput={preview3} min={0} max={255} value={slider3}></Slider>
      </Sliders>
    </LContainer>
  )
}

export default Lesson2