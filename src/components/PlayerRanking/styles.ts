import { styled } from '../../styles';

export const Container = styled('ul', {
});

export const HeaderList = styled('div', {
  display: 'grid',
  gridTemplateColumns: '32px 155px 53px',
  backgroundColor: '$gray100',
  marginBottom: '2px',

  '> strong': {
    display: 'block',
    textAlign: 'center',
    alignItems: 'center',
    padding: '4px 8px',
    margin: 'auto 0',
    fontWeight: 500,
    fontSize: '12px',
    color: '$gray700',
  },

  '> strong:nth-child(2)': {
    textAlign: 'left',
  },

  '> strong:not(:last-child)': {
    borderRight: '1px solid',
    borderColor: '$gray400',
  },
});

export const BodyList = styled('div', {
  height: 'calc(100vh - 390px)',
  overflow: 'auto',
});
