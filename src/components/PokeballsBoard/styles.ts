import {styled} from '../../styles';

export const Container = styled('div', {
  position: 'relative',
  display: 'grid',
  justifyItems: 'center',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gridTemplateRows: 'repeat(4, 1fr)',
  height: 'fit-content',
  width: '100%',
});