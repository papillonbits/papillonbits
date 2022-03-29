# UnderlineNav

> Use UnderlineNav to style navigation with a minimal underlined selected state, typically used for navigation placed at the top of the page. This component comes with variations to accommodate icons, containers and other content.

# Variants

> - Default
> - WithActions, RightAligned, RightAlignedWithActions
> - WithIcons, FullContainer

## Default

```jsx
<UnderlineNav ariaAttr={ariaAttr} items={buttonItems} itemType={underlineNavItemType.button} onClick={action('onClick')} />
```

## WithActions

```jsx
<UnderlineNav ariaAttr={ariaAttr} items={anchorItems} itemType={underlineNavItemType.a} actions={actions} onClick={action('onClick')} />
```

## RightAligned

```jsx
<UnderlineNav
  ariaAttr={ariaAttr}
  items={anchorItems}
  itemType={underlineNavItemType.a}
  align={underlineNavAlignmentType.right}
  onClick={action('onClick')}
/>
```

## RightAlignedWithActions

```jsx
<UnderlineNav
  ariaAttr={ariaAttr}
  items={anchorItems}
  itemType={underlineNavItemType.a}
  align={underlineNavAlignmentType.right}
  actions={actions}
  onClick={action('onClick')}
/>
```

## WithIcons

```jsx
<UnderlineNav ariaAttr={ariaAttr} items={iconItems} itemType={underlineNavItemType.a} onClick={action('onClick')} />
```

## FullContainer

```jsx
<UnderlineNav
  ariaAttr={ariaAttr}
  items={fullContainerItems}
  itemType={underlineNavItemType.a}
  actions={actions}
  fullContainer
  onClick={action('onClick')}
/>
```
