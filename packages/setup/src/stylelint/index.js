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
    // https://stylelint.io/user-guide/rules/no-descending-specificity/ — "This rule is only
    // appropriate for CSS. You should not turn it on for CSS-like languages, such as SCSS or
    // Less." SCSS's `&Foo` concatenation compiles to flat, equal-specificity classes, which
    // this rule miscounts as compound-selector specificity per nesting level.
    'no-descending-specificity': null,
    'declaration-empty-line-before': null,
    'keyframes-name-pattern': null,
    'prettier/prettier': true,
    'rule-empty-line-before': null,
    'selector-class-pattern': null,
    'annotation-no-unknown': null,
    'import-notation': 'string',
  },
}
