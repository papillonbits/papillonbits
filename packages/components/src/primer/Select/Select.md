# Select

> Selects are lightweight context menus for housing navigation and actions. They're great for instances where you don't need the full power (and code) of the select menu.

# Variants

> - Regular, Inactive

## Regular

```jsx
<Select selectedText={selectedText} items={items} onChange={action('onChange')} />
```

## Inactive

```jsx
<Select selectedText={selectedText} items={items} onChange={action('onChange')} state={selectState.inactive} />
```
