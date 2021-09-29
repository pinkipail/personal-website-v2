module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-boolean-value': 0,
    'react/prop-types': 0,
    'react/no-array-index-key': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-param-reassign': ['error', { props: false }],
    'no-unused-vars': 1,
    'no-use-before-define': 0,
  },
};
