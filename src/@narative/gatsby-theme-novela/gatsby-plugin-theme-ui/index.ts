import "@fontsource/karla";
import "@fontsource/spectral";
import merge from 'lodash/merge';
import colors from './colors';
import tags from './tags';

const breakpoints = [
  ['phone_small', 320],
  ['phone', 376],
  ['phablet', 540],
  ['tablet', 735],
  ['desktop', 1070],
  ['desktop_medium', 1280],
  ['desktop_large', 1440],
];

const fonts = {
  serif: "'Spectral', serif",
  sansSerif: "'Karla', 'Roboto', sans-serif",
  monospace: `"Karla", Consolas, monospace`,
};

const colorModeTransition =
  'background 0.25s var(--ease-in-out-quad), color 0.25s var(--ease-in-out-quad)';

export default merge({
  initialColorMode: 'light',
  useCustomProperties: true,
  colorModeTransition,
  colors,
  fonts,
  breakpoints,
  tags,
});
