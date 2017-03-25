const colors = {
  black: '#1d495f',
  red: '#dc662e',
  green: '#008eab',
  yellow: '#feaf3c',
  blue: '#265b63',
  magenta: '#78dcf4',
  cyan: '#60b2c2',
  white: '#e5c49e',
  lightBlack: '#545e65',
  lightRed: '#dd9a8a',
  lightGreen: '#749ea9',
  lightYellow: '#fedaae',
  lightBlue: '#0cc7e4',
  lightMagenta: '#c7e8f2',
  lightCyan: '#98b9c1',
  lightWhite: '#ffe9d7'
};

exports.decorateConfig = (config) => {
    const configObj = Object.assign({}, config, {
        foregroundColor: '#e5c49e',
        borderColor: '#1e4963',
        backgroundColor: `rgba(7, 26, 36, ${ config.backgroundOpacity || '1' })`,
        cursorColor: `${ config.cursorColor || '#feaf3c'}`,
        theme: `${ config.theme || '' }`,
        colors
    });
    return configObj;
};