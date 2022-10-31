module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  root: true,
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'unused-imports', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // '@typescript-eslint/no-shadow': ['error'],
        // 'no-shadow': 'off',
        // 'no-undef': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'no-console': 'warn',
    /** Auto remove unused inports [eslint-plugin-unused-imports] */
    '@typescript-eslint/no-unused-vars': 'off',
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
      },
    ],
    'unused-imports/no-unused-imports': 'off',
    /** End - Auto remove unused inports */
    camelcase: 'error',
    'react/react-in-jsx-scope': 'off',
    'no-duplicate-imports': 'error',
    'spaced-comment': 'error',
    'max-len': ['error', { code: 100, ignoreUrls: true }],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/require-await': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
      { usePrettierrc: true },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
      },
    ],
  },
};
