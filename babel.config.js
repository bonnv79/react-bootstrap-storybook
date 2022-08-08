module.exports = function (api) {
  api.cache(true);

  const presets = ["@babel/preset-env", "@babel/preset-react"];
  const plugins = ["macros"];
  const ignore = [
    'node_modules',
    'build',
    'src/index.js',
    '**/__test__',
    '**/__tests__',
    '**/__mocks__',
    '**/__fixtures__',
    '**/__snapshots__',
    '**/*.stories.js',
    '**/devMode'
  ];

  return {
    presets,
    plugins,
    ignore
  };
}