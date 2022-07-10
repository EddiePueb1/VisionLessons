import React, {useEffect, useState} from 'react'
import {LContainer, Slider , Output} from '../GlobalElements';
import {
  LessonInfo,
  LessonDescription,
  LessonWrapper,
  LessonName,
  LessonLabel,
  Oner
} from './L1_Elements';


const Lesson1 = ({id, title, description, task}) => {

  var [r_out, r_in] = useState(0),
      [g_out, g_in] = useState(0),
      [b_out, b_in] = useState(0),
      [hex_out, hex_in] = useState("#000000");

  var fc = true;

  const setColor = () => {
    var r_hex = parseInt(r_out, 10).toString(16),
      g_hex = parseInt(g_out, 10).toString(16),
      b_hex = parseInt(b_out, 10).toString(16),
      hex = "#" + pad(r_hex) + pad(g_hex) + pad(b_hex);
      hex_in(hex);
      
  
  }

  const pad = (n) => {
    return (n.length<2) ? "0"+n : n;
  }

  const r = (e) => {
    r_in(e.target.value);
  }

  const g = (e) => {
    g_in(e.target.value);
  }

  const b = (e) => {
    b_in(e.target.value);
  }

  console.log(r_out);

  if (g_out > 128) {
    fc = false;
    // console.log(fc);
  }

  console.log("The difference between 6 and 2 is " + (6-2));

  useEffect(() => {
    setColor()
    
  }, [r,g,b]);

  return (
    
    <>
      <LContainer id={id} >
        <LessonInfo>
          <LessonName> {title} </LessonName>
          <hr></hr>
          <br></br>
          <LessonDescription>
            {description}
          </LessonDescription>
          <br></br>
          <LessonDescription>
            {task}
          </LessonDescription>
          <br></br>

        </LessonInfo>
        <LessonWrapper backgroundColor={hex_out} fontColor={fc} >
                  
            <Oner >
              <LessonLabel > R </LessonLabel>
              <Slider type={"range"} onInput={r} min={0} max={255} step={1} value={r_out} ></Slider>
              <Output onChange={r}>{r_out}</Output>
            </Oner>
            <Oner >
              <LessonLabel>G</LessonLabel>
              <Slider type={"range"} onInput={g} min={0} max={255} step={1} value={g_out}></Slider>
              <Output  onChange={g}>{g_out}</Output>
            </Oner>
            <Oner >
              <LessonLabel>B</LessonLabel>
              <Slider type={"range"} onInput={b} min={0} max={255} step={1} value={b_out}></Slider>
              <Output onChange={b}>{b_out}</Output> 
            </Oner>

          <Output>{hex_out}</Output>


        </LessonWrapper>
      </LContainer>
    </>
  )
}

export default Lesson1
