import js from '@eslint/js'
import globals from 'globals'
import importPlugin from 'eslint-plugin-import'
import n from 'eslint-plugin-n'
import promise from 'eslint-plugin-promise'

const nodeRecommended = n.configs['flat/recommended-module']

export default [
  { ignores: ['dist', 'node_modules'] },
  js.configs.recommended,
  {
    files: ['src/**/*.{js,cjs,mjs}'],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      import: importPlugin,
      n,
      promise,
    },
    settings: {
      node: {
        version: '>=20.0.0',
      },
    },
    rules: {
      ...importPlugin.configs.recommended.rules,
      ...promise.configs['flat/recommended'].rules,
      ...nodeRecommended.rules,
      'import/no-default-export': 'off',
      'n/no-unsupported-features/node-builtins': 'off',
    },
  },
]
