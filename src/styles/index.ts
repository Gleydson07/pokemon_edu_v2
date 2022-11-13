import { createStitches } from '@stitches/react';

export const {
  styled,
  getCssText,
  css,
  globalCss,
  keyframes,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      white: '#FFFFFF',
      whiteOpacity300: '#FFFFFF70',
      blackOpacity300: '#00000070',
      gray200: '#E3E3E3',
      gray700: '#2E2E2E',
      yellow300: '#F2E43B',
      yellow500: '#FFDF30',
      blue300: '#8EB2D2',
      blue600: '#3A6BBA',
      orange300: '#F58B35',
      green300: '#68BB5F'
    },

    fonts: {
      Roboto: 'Roboto, sans-serif',
      Pokemon: 'Pokemon Solid, sans-serif',
      ShadowIntoLight: 'Shadows Into Light, cursive',
    },

    media: {
      mobile: '(max-width: 478px)',
      tablet: '(max-width: 768px)',
      laptop: '(max-width: 1280px)',
      desktop: '(max-width: 1440px)',
    },
  },
  
  utils: {
    marginX: (value: string) => ({ marginLeft: value, marginRight: value }),
    marginY: (value: string) => ({ marginTop: value, marginBottom: value }),
    paddingX: (value: string) => ({ paddingLeft: value, paddingRight: value }),
    paddingY: (value: string) => ({ paddingTop: value, paddingBottom: value }),
  }
});