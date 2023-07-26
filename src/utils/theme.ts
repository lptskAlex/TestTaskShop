const palette = {
  bg1: '#FFF',
  bg2: '#F1F1F1',
  black: '#000',
  text1: '#000000',
  text2: '#FFF',
  textBuy: 'green',
};

const sizes = {
  xxs: 2,
  xs: 8,
  smx: 10,
  sm: 12,
  md: 14,
  base: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 32,
  '4xl': 48,
  '5xl': 60,
};

export interface ThemeInterface {
  palette: any;
  sizes: typeof sizes;
}

export function createTheme({isDark = false, scale = 1}): ThemeInterface {
  return {
    palette,
    sizes: Object.entries(sizes).reduce((acc: any, [name, size]) => {
      acc[name] = size * scale;
      return acc;
    }, {}),
  };
}
