module.exports = [
  {
    plugins: ['react-hooks'],
    rules: {
      semi: 'error',
      'prefer-const': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': [
        'warn',
        {
          additionalHooks: '(useMyCustomHook|useMyOtherCustomHook)',
        },
      ],
    },
    extends: ['plugin:react-hooks/recommended'],
  },
];
