module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-order', 'stylelint-prettier', 'stylelint-scss'],
  rules: {
    'alpha-value-notation': null,
    'at-rule-no-unknown': null,
    // SCSS at-rules (e.g. `@mixin Foo($arg: '')`) aren't real CSS at-rules, so this rule's
    // CSS-grammar prelude validation rejects valid SCSS syntax.
    'at-rule-prelude-no-invalid': null,
    'color-function-notation': null,
    'declaration-empty-line-before': null,
    'keyframes-name-pattern': null,
    'prettier/prettier': true,
    'rule-empty-line-before': null,
    'selector-class-pattern': null,
    'annotation-no-unknown': null,
    'import-notation': 'string',
  },
}
