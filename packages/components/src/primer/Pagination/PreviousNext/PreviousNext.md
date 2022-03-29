# PreviousNext

> Use the pagination component to apply button styles to a connected set of links that go to related pages (for example, previous, next, or page numbers).
> You can make a very simple pagination container with just the Previous and Next buttons. Add the aria-disabled="true" attribute to the Previous button if there isn't a preceding page, or to the Next button if there isn't a succeeding page.

# Variants

> - Default, Inactive

## Default

```jsx
<PreviousNext ariaAttr={ariaAttr} currentPage={currentPage} onClick={action('onClick')} />
```

## Inactive

```jsx
<PreviousNext ariaAttr={ariaAttr} currentPage={currentPage} onClick={action('onClick')} state={previousNextState.inactive} />
```
