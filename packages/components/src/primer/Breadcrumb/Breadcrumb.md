# Breadcrumb

> Breadcrumbs are used to show taxonomical context on pages that are many levels deep in a site’s hierarchy. Breadcrumbs show and link to parent, grandparent, and sometimes great-grandparent pages. Breadcrumbs are most appropriate on pages that:

- Are many levels deep on a site
- Do not have a section-level navigation
- May need the ability to quickly go back to the previous (parent) page

# Variants

> - Default, Inactive

## Default

```jsx
<Breadcrumb ariaAttr={ariaAttr} items={items} onClick={action('onClick')} />
```

## Inactive

```jsx
<Breadcrumb ariaAttr={ariaAttr} items={items} onClick={action('onClick')} state={breadcrumbState.inactive} />
```
