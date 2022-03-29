# Toast

> Toasts are used to show live, time-sensitive feedback to users.

## Variants

> - Info, Success, Warning, Error
> - Dismissable

## Info

```jsx
<Toast variant={toastVariant.info} text={text.info} />
```

## Success

```jsx
<Toast variant={toastVariant.success} text={text.success} />
```

## Warning

```jsx
<Toast variant={toastVariant.warning} text={text.warning} />
```

## Error

```jsx
<Toast variant={toastVariant.error} text={text.error} />
```

## IsDismissable

```jsx
<Toast variant={toastVariant.info} text={text.dismissable} isDismissable={true} onClick={action('onClick')} />
```
