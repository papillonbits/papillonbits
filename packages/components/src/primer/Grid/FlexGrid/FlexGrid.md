# FlexGrid

> You can use flex utilities on the container and columns to create a flexbox grid.
> This can be useful for keeping columns the same height, justifying content and vertically aligning items. The flexbox grid is also great for working with responsive layouts.

# Variants

> - RadioWithSelection, RadioWithSelectionInactive
> - RadioWithoutSelection, RadioWithoutSelectionInactive
> - CheckboxWithSelection, CheckboxWithSelectionInactive
> - CheckboxWithoutSelection, CheckboxWithoutSelectionInactive

## RadioWithSelection

```jsx
<FlexGrid
  items={radioItemsWithSelection}
  idIndex={0}
  isSelectedIndex={1}
  selection={flexGridSelection.radio}
  sort={sortDefault}
  onChange={action('onChange')}
  onDoubleClick={action('onDoubleClick')}
/>
```

## RadioWithSelectionInactive

```jsx
<FlexGrid
  items={radioItemsWithSelection}
  idIndex={0}
  isSelectedIndex={1}
  selection={flexGridSelection.radio}
  sort={sortDefault}
  onChange={action('onChange')}
  onDoubleClick={action('onDoubleClick')}
  state={flexGridState.inactive}
/>
```

## RadioWithoutSelection

```jsx
<FlexGrid idIndex={0} items={radioItemsWithoutSelection} sort={sortDefault} onChange={action('onChange')} />
```

## RadioWithoutSelectionInactive

```jsx
<FlexGrid idIndex={0} items={radioItemsWithoutSelection} sort={sortDefault} onChange={action('onChange')} state={flexGridState.inactive} />
```

## CheckboxWithSelection

```jsx
<FlexGrid
  items={checkboxItemsWithSelection}
  idIndex={0}
  isSelectedIndex={1}
  selection={flexGridSelection.checkbox}
  sort={sortDefault}
  onChange={action('onChange')}
  onDoubleClick={action('onDoubleClick')}
/>
```

## CheckboxWithSelectionInactive

```jsx
<FlexGrid
  items={checkboxItemsWithSelection}
  idIndex={0}
  isSelectedIndex={1}
  selection={flexGridSelection.checkbox}
  sort={sortDefault}
  onChange={action('onChange')}
  onDoubleClick={action('onDoubleClick')}
  state={flexGridState.inactive}
/>
```

## CheckboxWithoutSelection

```jsx
<FlexGrid
  idIndex={0}
  items={checkboxItemsWithoutSelection}
  sort={sortDefault}
  onChange={action('onChange')}
  onDoubleClick={action('onDoubleClick')}
/>
```

## CheckboxWithoutSelectionInactive

```jsx
<FlexGrid
  idIndex={0}
  items={checkboxItemsWithoutSelection}
  sort={sortDefault}
  onChange={action('onChange')}
  onDoubleClick={action('onDoubleClick')}
  state={flexGridState.inactive}
/>
```
