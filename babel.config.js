// babel issue with scss
require.extensions['.scss'] = () => {
  return;
};
require.extensions['.css'] = () => {
  return;
};
//*****************************************************

module.exports = {
  presets: ['@babel/preset-env','@babel/preset-react'],
  plugins: ['@babel/plugin-proposal-class-properties'],
};