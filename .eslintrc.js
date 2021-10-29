module.exports = {
  extends: ['next', 'airbnb-base', 'plugin:react/recommended', 'prettier', 'prettier/prettier'],
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    // NextJs specific fix: suppress errors for missing 'import React' in files for nextjs
    'react/react-in-jsx-scope': 'off',
    // NextJs specific fix: allow jsx syntax in js files
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-indent-props': 'off',
    'react/jsx-uses-vars': 'error',
    // 'react/prop-types': [2, { ignore: ['children'] }],
    'react/prop-types': 'off',
    'no-unused-vars': 'warn',
    'prettier/prettier': ['error'],
    'class-methods-use-this': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@components', './components/'],
          ['@data', './data/'],
          ['@pages', './pages/'],
          ['@public', './public/'],
          ['@styles', './styles/'],
          ['@utilities', './utilities/'],
          ['@utils', './utils/'],
        ],
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
