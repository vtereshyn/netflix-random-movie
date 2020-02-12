const baseRules = require('eslint-config-airbnb-base/rules/style');
const [_, ...restricted] = baseRules.rules['no-restricted-syntax'];

module.exports = {
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint'
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    'babel',
    'import',
    'react',
    'jsx-a11y',
    'compat',
    'promise',
    'unicorn',
    'prettier',
    'react-hooks',
    '@typescript-eslint'
  ],
  env: {
    node: false,
    browser: true
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    jsx: true
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.9'
    },
    'import/resolver': {
      node: {
        paths: ['.'],
        extensions: ['.js', '.ts', '.tsx']
      }
    }
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],

    curly: [2, 'all'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': 0,
    'no-underscore-dangle': 0,
    'comma-dangle': ['error', 'never'],
    'no-use-before-define': 'error',
    'no-console': 'error',
    'no-plusplus': 0,
    'no-minusminus': 0,
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsFor: ['result', 'res'] }
    ],
    'no-unused-expressions': 0,
    'no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'object-curly-newline': 0,
    'function-paren-newline': 0,
    'no-return-await': 0,
    'unicorn/no-abusive-eslint-disable': 0,
    'max-params': ['error', 5],
    'max-depth': ['error', 3],

    '@typescript-eslint/no-non-null-assertion': 0, // temp

    // required for nest js
    'no-useless-constructor': 0,
    'import/prefer-default-export': 0,
    'class-methods-use-this': 0,

    'promise/always-return': 'error',
    'promise/catch-or-return': 'error',
    'promise/param-names': 'error',
    'promise/no-return-wrap': 'error',

    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to', 'hrefLeft', 'hrefRight'],
        aspects: ['noHref', 'invalidHref', 'preferButton']
      }
    ],
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/label-has-associated-control': 0,

    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true }
    ],

    'prettier/prettier': ['error'],

    'react/prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'react/state-in-constructor': 'off',
    'react/jsx-curly-newline': 'off',
    'react/jsx-curly-brace-presence': 'off' // TODO: temp (https://github.com/yannickcr/eslint-plugin-react/pull/2448)
  }
};
