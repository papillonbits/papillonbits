# TabNav

> When you need to toggle between different views, consider using a tabnav. It'll give you a left-aligned horizontal row of tabs.

# Variants

> - Default
> - WithButtonActions, WithTextActions, WithLinkActions
> - WithNavigation, WithMixedEnabledVisibleItems
> - Inactive

## Default

```jsx
<TabNav ariaAttr={ariaAttr} items={defaultItems} onClick={action('onClick')} />
```

## WithButtonActions

```jsx
<TabNav ariaAttr={ariaAttr} items={defaultItems} actions={buttonActions} onClick={action('onClick')} />
```

## WithTextActions

```jsx
<TabNav ariaAttr={ariaAttr} items={defaultItems} actions={textActions} onClick={action('onClick')} />
```

## WithLinkActions

```jsx
<TabNav ariaAttr={ariaAttr} items={defaultItems} actions={linkActions} onClick={action('onClick')} />
```

## WithNavigation

```jsx
<BrowserRouter>
  <TabNav ariaAttr={ariaAttr} items={navigationItems} onClick={action('onClick')} />
</BrowserRouter>
```

## WithMixedEnabledVisibleItems

```jsx
<BrowserRouter>
  <TabNav ariaAttr={ariaAttr} items={mixedEnabledVisibleItems} onClick={action('onClick')} />
</BrowserRouter>
```

## Inactive

```jsx
<TabNav ariaAttr={ariaAttr} items={defaultItems} onClick={action('onClick')} state={tabNavState.inactive} />
```
