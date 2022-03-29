# Input

> Style individual form input controls and utilize common layouts.

# Variants

> - Default, Inactive

## Default

```jsx
<Input
  placeholder={placeholder}
  ariaAttr={ariaAttr}
  onChange={action('onChange')}
  onKeyUp={action('onKeyUp')}
  onFocus={action('onFocus')}
  onBlur={action('onBlur')}
/>
```

## Inactive

```jsx
<Input
  placeholder={placeholder}
  ariaAttr={ariaAttr}
  onChange={action('onChange')}
  onKeyUp={action('onKeyUp')}
  onFocus={action('onFocus')}
  onBlur={action('onBlur')}
  state={inputState.inactive}
/>
```
