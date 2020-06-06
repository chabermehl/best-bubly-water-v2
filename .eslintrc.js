module.exports = {
  extends: [
    'eslint-config-airbnb',
    'plugin:prettier/recommended',
    'plugin:lodash/recommended',
  ],
  plugins: ['graphql', 'react', 'react-hooks', 'import', 'prettier', 'lodash'],
  env: {
    browser: true,
    node: true,
    mocha: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    // TODO: Warnings which would require large-scale changes to make into
    // errors, but should be made into errors so that the build fails
    // or so that the codebase consistently follows the rule
    'import/namespace': 1,
    'import/no-unresolved': 1,
    'react/no-multi-comp': 1,
    'max-classes-per-file': 1,
    'react/no-unused-state': 1, // sometimes, commented use is fine
    'react/no-access-state-in-setstate': 1,
    'react/prefer-stateless-function': 1,
    'react/forbid-prop-types': 1, // warn when you're using unkind prop types
    'comma-dangle': 0, // not sure why airbnb turned this on. gross!
    'no-else-return': 0, // really cramps my functional style
    indent: [0, 2, {SwitchCase: 1}], // this is not shown because prettier handles it
    'no-console': ['error', {allow: ['warn', 'error']}],
    'no-debugger': 0,
    'no-alert': 0,
    'no-mixed-operators': 0,
    'no-underscore-dangle': 0,
    'no-plusplus': 0,
    'no-extra-boolean-cast': 0,
    'no-multi-spaces': 0,
    'no-bitwise': 0,
    'no-useless-concat': 0,
    'global-require': 0,
    'linebreak-style': 0,
    'object-curly-spacing': 0,
    'no-param-reassign': 1,
    'no-shadow': 1,
    'no-restricted-globals': 1,
    'no-case-declarations': 1,
    'no-fallthrough': 1,
    'no-use-before-define': 1,
    'no-return-assign': 1,
    'no-restricted-properties': 1,
    'no-restricted-syntax': 1,
    'no-prototype-builtins': 1,
    'object-property-newline': 1,
    'object-shorthand': 1,
    'prefer-template': 1,
    'prefer-promise-reject-errors': 1,
    quotes: 1,
    'consistent-return': 1,
    'comma-spacing': 1,
    'array-bracket-spacing': 1,
    'max-len': 1,
    'newline-per-chained-call': 1,
    'block-spacing': 1,
    'prefer-spread': 1,
    'prefer-rest-params': 1,
    'no-multi-assign': 1,
    'no-unexpected-multiline': 1,
    'class-methods-use-this': 1,
    'array-callback-return': 1,
    'no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
    camelcase: ['error', {allow: ['^UNSAFE_']}],
    'prettier/prettier': 'warn',
    // import
    'import/extensions': 0, // we specifically configured webpack to exclude ext
    'import/no-useless-path-segments': 0, // '../../../components/$CMP' is more descriptive
    'import/prefer-default-export': 0,
    'import/no-cycle': 1, // cyclic deps are sometimes ok, mostly in large index files
    'import/first': 1,
    'import/newline-after-import': 1,
    'import/no-mutable-exports': 1,
    'import/no-named-as-default': 2,
    'import/no-duplicates': 2,
    'import/named': 2,
    'import/default': 2,
    // jsx-a11y
    'jsx-a11y/alt-text': 0, // we don't need any accessibility features
    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'jsx-a11y/tabindex-no-positive': 1,
    'jsx-a11y/label-has-for': 1,
    'jsx-a11y/mouse-events-have-key-events': 1,
    'jsx-a11y/anchor-is-valid': 1,
    // react
    'react/destructuring-assignment': 0,
    'react/jsx-curly-newline': 0, // don't prefer <>
    'react/jsx-fragments': 0, // don't prefer <>
    'react/jsx-closing-bracket-location': 0,
    'react/jsx-one-expression-per-line': 0, // prettier conflict
    'react/jsx-filename-extension': 0,
    'react/jsx-indent': 1, // prettier conflict
    'react/jsx-indent-props': 1, // prettier conflict
    // next rule is an airbnb default that requires minor overriding for prettier
    'react/jsx-wrap-multilines': ['error', {declaration: false, assignment: false}],
    'react/require-default-props': 0, // change to warning when we add snapshot tests
    'react/button-has-type': 1,
    'react/default-props-match-prop-types': 1,
    'react/no-unused-prop-types': 1,
    'react/jsx-tag-spacing': 1,
    'react/prop-types': 1,
    'react/sort-comp': 1,
    'react/no-array-index-key': 1,
    'react/jsx-props-no-spreading': 1, // warn if using {...object}. Please ignore for {...props}
    'react/no-string-refs': 2,
    // react hooks
    'react-hooks/exhaustive-deps': 1,
    'react-hooks/rules-of-hooks': 2,
    // lodash
    // rules that are commented below should eventually be used. Many of these
    // rules are warnings because they'd be a pain to fix
    'lodash/import-scope': 0,
    'lodash/prefer-noop': 0,
    'lodash/matches-shorthand': 0,
    'lodash/matches-prop-shorthand': 0,
    'lodash/prop-shorthand': 0,
    'lodash/prefer-lodash-typecheck': 0,
    'lodash/collection-ordering': 0,
    'lodash/prefer-lodash-method': 1,
    // rules below this line should eventually be made errors instead of warnings
    'lodash/prefer-immutable-method': 1,
    'lodash/prefer-filter': 1,
    'lodash/prefer-get': 1,
    'lodash/prefer-is-nil': 1,
    'lodash/preferred-alias': 1,
    'lodash/chaining': 1,
    'lodash/prefer-invoke-map': 1,
    'lodash/prefer-flat-map': 1,
    'lodash/prefer-map': 1,
    'lodash/prefer-reject': 1,
    'lodash/prefer-constant': 1,
    'lodash/prefer-includes': 1,
    'lodash/collection-method-value': 1,
    'lodash/collection-return': 1,
    'lodash/prefer-compact': 1,
    'lodash/prefer-thru': 1,
    // graphql
    'graphql/template-strings': [
      'error',
      {
        env: 'apollo',
        validators: 'all',
      },
    ],
    'graphql/capitalized-type-name': ['warn'],
    'graphql/named-operations': ['error'],
    'graphql/required-fields': [
      'error',
      {
        env: 'apollo',
        requiredFields: ['id'],
      },
    ],
    'graphql/no-deprecated-fields': [
      'error',
      {
        env: 'apollo',
      },
    ],
  },
  settings: {
    // 'import/resolver': {
    //   alias: {
    //     map: [
    //       ['sui_components', './src/semantic/components'],
    //       ['sui_helpers', './src/semantic/helpers'],
    //       ['sui_styles', './src/semantic/styles'],
    //       ['sui_utils', './src/semantic/utils'],
    //       ['components', './src/components'],
    //       ['containers', './src/containers'],
    //       ['helpers', './src/helpers'],
    //       ['redux', './src/redux'],
    //       ['styles', './src/styles'],
    //       ['utils', './src/utils'],
    //       ['vendor', './src/vendor'],
    //       ['common', './src/common'],
    //     ],
    //     extensions: ['.json', '.mjs', '.js', '.jsx', '.ts', '.tsx'],
    //   },
    // },
    react: {
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
    },
  },
  globals: {
    __DEVELOPMENT__: true,
    __CLIENT__: true,
    __SERVER__: true,
    __DEVTOOLS__: true,
    socket: true,
    webpackIsomorphicTools: true,
  },
};
