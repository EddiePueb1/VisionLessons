import React from 'react'
import { LContainer, Sliders, Slider } from '../GlobalElements'

import berry from '../../img/Strawberry.jpeg';

import {
  Images, 
  Row,
  Img,
  Color,
  TextContainer
} from './L3_Elements';

const Lesson3 = () => {
  return (
    <LContainer>
      <Images>
        <Row><Img src={berry}/></Row>
      </Images>
      <Sliders>
        <Color>
          <TextContainer>Red Average</TextContainer>
          <TextContainer>Red Range</TextContainer>
          <Slider type={"range"}></Slider>
          <Slider></Slider>
        </Color>
        <Color>
          <TextContainer>Green Average</TextContainer>
          <TextContainer>Green Range</TextContainer>
          <Slider></Slider>
          <Slider></Slider>
        </Color>
        <Color>
          <TextContainer>Blue Average</TextContainer>
          <TextContainer>Blue Range</TextContainer>
          <Slider></Slider>
          <Slider></Slider>
        </Color>

      </Sliders>

    </LContainer>
  )
}

export default Lesson3