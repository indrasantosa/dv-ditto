module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'prettier/prettier',
    'plugin:storybook/recommended',
  ],
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin'],
  ignorePatterns: ['/node_modules/**', '/build/**'],
  rules: {
    // '@typescript-eslint/explicit-function-return-type': 'off',
    // '@typescript-eslint/no-non-null-assertion': 'off',
    // '@typescript-eslint/no-inferrable-types': 'off',
    // '@typescript-eslint/ban-ts-ignore': 'off',
    // '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': ['error'],
    // 'react/display-name': 'off',
    // 'react/prop-types': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
