import React from 'react'
import { LContainer } from '../GlobalElements'

import {
  LearningObjective,
  Image
} from './resElements';

const Resolution = ({objective}) => {
  return (
    <>
      <LContainer>
        <LearningObjective>
          {objective}
        </LearningObjective>
        <Image></Image>

      </LContainer>
    
    </>
  )
}

export default Resolution