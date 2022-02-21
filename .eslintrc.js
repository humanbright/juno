module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:jest/recommended',
    'airbnb-typescript',
    'plugin:prettier/recommended',
    'prettier',
    'plugin:security/recommended',
    'plugin:storybook/recommended',
  ],
  plugins: [
    'react-hooks',
    'eslint-plugin-import',
    '@typescript-eslint',
    'jest',
    'security',
  ],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    'react/no-unused-prop-types': 'off',
    '@typescript-eslint/no-unused-expressions': 'warn',
    'react/require-default-props': 'off',
    '@typescript-eslint/no-shadow': 'warn',
    '@typescript-eslint/dot-notation': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-useless-constructor': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'import/named': 'off',
    'import/export': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': [
      0,
      {
        caseSensitive: false,
      },
    ],
    'import/no-extraneous-dependencies': 'off',
    'import/order': 'off',
    'import/first': 'error',
    'import/no-cycle': 'off',
    'no-param-reassign': 'off',
    'no-dupe-class-members': 'off',
    'no-new': 'off',
    'no-underscore-dangle': 'off',
    'no-plusplus': 'off',
    'no-shadow': 'off',
    'no-undef': 'off',
    'no-unneeded-ternary': 'off',
    'no-restricted-syntax': 'off',
    'no-return-await': 'off',
    'no-useless-constructor': 'off',
    'no-debugger': process.env.NODE_ENV === 'development' ? 'off' : 'error',
    'no-alert': process.env.NODE_ENV === 'development' ? 'off' : 'error',
    'no-console': process.env.NODE_ENV === 'development' ? 'off' : 'error',
    'no-useless-return': 'off',
    'no-bitwise': 'off',
    'security/detect-unsafe-regex': 'error',
    'no-return-assign': 'off',
    'no-empty-function': 'off',
    'no-nested-ternary': 'off',
    'no-unused-expressions': 'off',
    'lines-between-class-members': 'off',
    'dot-notation': 'off',
    'prefer-destructuring': 'off',
    'prefer-spread': 'off',
    'consistent-return': 'off',
    'array-callback-return': 'off',
    'no-async-promise-executor': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'react/sort-comp': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-indent': 'off',
    'react/destructuring-assignment': 'off',
    'jsx-a11y/mouse-events-have-key-events': 'off',
    'class-methods-use-this': 'off',
    'operator-assignment': 'off',
    'operator-linebreak': 'off',
    'no-unexpected-multiline': 'off',
    'require-await': 'warn',
    'max-len': [
      'off',
      {
        code: 80,
      },
    ],
    'implicit-arrow-linebreak': 'off',
    'func-names': 'off',
    'max-classes-per-file': 'off',
    'prefer-object-spread': 'off',
    'react/static-property-placement': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/state-in-constructor': 'off',
    'react/jsx-fragments': 'off',
    'react/prop-types': 'off',
    'react/no-this-in-sfc': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        jsxSingleQuote: false,
        trailingComma: 'all',
      },
    ],
    'react-hooks/rules-of-hooks': 'warn',
    // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn',
    // Checks effect dependencies
    'import/dynamic-import-chunkname': 'warn',
    'security/detect-object-injection': 'off',
    'react/jsx-no-duplicate-props': [
      2,
      {
        ignoreCase: false,
      },
    ],
    'security/detect-non-literal-fs-filename': 'off',
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['**/__tests__/**/*', '**/__mocks__/**/*', '**/__stories__/**/*'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'warn',
        'no-console': 'off',
        'jest/no-disabled-tests': 'off',
        'global-require': 'off',
        'import/no-dynamic-require': 'off',
        'jest/valid-expect': 'error',
        'jest/valid-expect-in-promise': 'error',
        'jest/no-identical-title': 'warn',
        'jsx-a11y/accessible-emoji': 'warn',
        'react/button-has-type': 'off',
        'jsx-a11y/label-has-associated-control': 'warn',
        'no-alert': 'warn',
        'react/no-children-prop': 'warn',
        'react/prefer-stateless-function': 'warn',
        'react/no-access-state-in-setstate': 'warn',
        'jsx-a11y/no-noninteractive-element-interactions': 'warn',
      },
    },
    {
      files: ['packages/juno-framer/**/*'],
      rules: {
        'react/react-in-jsx-scope': 'off',
      },
    },
    {
      files: ['**/package.json'],
      parser: 'esprima',
      plugins: ['json-files'],
      rules: {
        'json-files/require-engines': 'error',
        'json-files/sort-package-json': 'error',
      },
    },
  ],
};
