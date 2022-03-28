# Blankslate

> Blankslates are for when there is a lack of content within a page or section. Use them as placeholders to tell users why something isn't there. Be sure to provide an action to add content as well.

# Variants

> - Default
> - Narrow, Capped, Spacious
> - Large, No background

## Default

> Wrap some content in the outer .blankslate wrapper to give it the blankslate appearance.

```jsx
<Blankslate variant={blankslateVariant.default} heading={heading} text={text} />
```

## Narrow

> Narrows the blankslate container to not occupy the entire available width.

```jsx
<Blankslate variant={blankslateVariant.narrow} heading={heading} text={text} />
```

## Capped

> Removes the border-radius on the top corners.

```jsx
<Blankslate variant={blankslateVariant.capped} heading={heading} text={text} />
```

## Spacious

> Significantly increases the vertical padding.

```jsx
<Blankslate variant={blankslateVariant.spacious} heading={heading} text={text} />
```

## Large

> Increases the size of the text in the blankslate

```jsx
<Blankslate variant={blankslateVariant.large} heading={heading} text={text} />
```

## No background

> Removes the background-color and border.

```jsx
<Blankslate hasCleanBackground={true} heading={heading} text={text} />
```
