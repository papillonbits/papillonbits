# Progress

> Use progress components to visualize task completion. The Progress class adds a background color and aligns its children horizontally with flexbox. The children (Progress-item) should be individually colored with background utilities and sized with inline width styles in percentages. Overflow is hidden, so children that overflow will be clipped.

# Variants

> - Normal, Large, Small

## Normal

> Normal progress bars have default height.

```jsx
<Progress variant={progressVariant.normal} percentage={50} />
```

## Large

> Large progress bars are slightly taller than the default.

```jsx
<Progress variant={progressVariant.large} percentage={50} />
```

## Small

> Small progress bars are shorter than the default.

```jsx
<Progress variant={progressVariant.small} percentage={50} />
```
