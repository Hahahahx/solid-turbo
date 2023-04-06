module.exports = {
  extends: [
    '@unocss',
    'turbo',
    'prettier',
    '@antfu',
  ],
  rules: {
    'eslint-comments/no-unlimited-disable': 'off',
    'arrow-parens': [
      'error', 'always',
    ],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@next/next/no-html-link-for-pages': 'off',
    'semi': [
      'error', 'never',
    ],
    'no-lonely-if': 'error',
    'no-console': 'warn',
    'import/export': 'warn',
    'object-curly-newline': [
      'error',
      {
        consistent: true,
        multiline: true,
        minProperties: 2,
      },
    ],
    'array-bracket-newline': [
      'error',
      {
        multiline: true,
        minItems: 2,
      },
    ],
    'array-element-newline': [
      'error',
      {
        multiline: true,
        minItems: 3,
      },
    ],
  },
  settings: {
    'mdx/code-blocks': true,
    'mdx/language-mapper': {},
  },
  // .mdx files require eslint-mdx as parser, but using other parser
  overrides: [
    {
      files: [
        '*.mdx', '*.md',
      ],
      rules: { '@typescript-eslint/indent': 'off' },
      extends: 'plugin:mdx/recommended',
      parserOptions: { ecmaVersion: 'latest' },
    },
  ],
}
