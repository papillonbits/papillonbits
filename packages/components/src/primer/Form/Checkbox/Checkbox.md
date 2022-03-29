# Checkbox

> Style individual form checkbox controls and utilize common layouts.

# Variants

> - IsChecked, IsCheckedInactive
> - IsNotChecked, IsNotCheckedInactive

## IsChecked

```jsx
<Checkbox ariaAttr={ariaAttr} isChecked={true} onChange={action('onChange')} text={text.isChecked} />
```

## IsCheckedInactive

```jsx
<Checkbox ariaAttr={ariaAttr} isChecked={true} onChange={action('onChange')} text={text.isChecked} state={checkboxState.inactive} />
```

## IsNotChecked

```jsx
<Checkbox ariaAttr={ariaAttr} isChecked={false} onChange={action('onChange')} text={text.isNotChecked} />
```

## IsNotCheckedInactive

```jsx
<Checkbox ariaAttr={ariaAttr} isChecked={false} onChange={action('onChange')} text={text.isNotChecked} state={checkboxState.inactive} />
```
