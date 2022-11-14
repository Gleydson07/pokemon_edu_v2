import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    margin: 0, 
    padding: 0 
  },

  'body': {
    fontFamily: "$Roboto",
    backgroundImage: `linear-gradient(
      to left,
      $yellow300 0,
      $yellow300 25%,
      $blue300 25%,
      $blue300 50%,
      $orange300 50%,
      $orange300 75%,
      $green300 75%,
      $green300 100%
    )`,
  },
});