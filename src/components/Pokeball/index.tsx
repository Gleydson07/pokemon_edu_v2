import React from 'react';

import {
  Container
} from './styles';

interface PokeballProps {

}

export const Pokeball:React.FC<PokeballProps> = ({}) => {
  return (
    <Container>
      <div className="sparkle"></div>
      <div className="shadow"></div>
      <div className="pokeball-inner">
          <div className="button">
            <div className="button-outer">
              <div className="button-inner"></div>
            </div>
          </div>
      </div>
    </Container>
  )
}
