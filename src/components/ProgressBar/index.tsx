import React from 'react';

import {
  Container,
  Progress
} from './styles';

interface ProgressBarProps {
  progress: Number;
}

export const ProgressBar:React.FC<ProgressBarProps> = ({progress = 20}) => {

  return (
    <Container>
      <Progress css={{ width: `${progress}%`}}>
        <span className='progress-bar-width'><span></span></span>
      </Progress>
    </Container>
  )
}
