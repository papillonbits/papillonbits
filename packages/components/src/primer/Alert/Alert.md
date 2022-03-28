# Alert

> Flash messages, or alerts, inform users of successful or pending actions. Use them sparingly. Don't show more than one at a time.

# Variants

> - Default,
> - Info, Warning, Error, Success
> - Consent, Consent with input

## Default

> Flash messages start off looking decently neutral—they're just light blue rounded rectangles.

```jsx
<Alert variant={alertVariant.info}>{children}</Alert>
```

## Default Multiple Paragraphs

> You can put multiple paragraphs of text in a flash message—the last paragraph's bottom margin will be automatically override.

```jsx
<Alert variant={alertVariant.default}>
  <p>
    This is a longer flash message in it&apos;s own paragraph. It ends up looking something like this. If we keep adding more text,
    it&apos;ll eventually wrap to a new line.
  </p>
  <p>And this is another paragraph.</p>
</Alert>
```

## Info

```jsx
<Alert variant={alertVariant.info}>{children}</Alert>
```

## Warning

```jsx
<Alert variant={alertVariant.warning}>{children}</Alert>
```

## Error

```jsx
<Alert variant={alertVariant.error}>{children}</Alert>
```

## Success

```jsx
<Alert variant={alertVariant.success}>{children}</Alert>
```

## Consent

```jsx
<Alert
  variant={alertVariant.consent}
  consent={{
    action: {
      approve: action('Approved'),
      cancel: action('Cancelled'),
    },
  }}
>
  {children}
</Alert>
```

## Consent with input

```jsx
<Alert
  variant={alertVariant.consent}
  consent={{
    action: {
      approve: action('Approved'),
      cancel: action('Cancelled'),
    },
    withInput: true,
  }}
>
  {children}
</Alert>
```
