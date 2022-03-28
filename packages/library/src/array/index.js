export function getCurrentIndex(indexItems) {
  return indexItems?.filter((indexItem) => indexItem.isCurrent)[0]?.index ?? -1
}

export function getIndexItems(items) {
  return (
    items?.map((item, index) => ({
      ...item,
      index,
    })) ?? []
  )
}

export function getIndexItemsWithSelected(indexItems, selectedItem) {
  return (
    indexItems?.map((indexItem) => ({
      ...indexItem,
      isSelected: indexItem.index === selectedItem.index,
    })) ?? []
  )
}

export function getRandomItemFromArray(array) {
  return array?.[Math.floor(Math.random() * array?.length)] // eslint-disable-line no-unsafe-optional-chaining
}

export function getRange({ range, indexSeed = 0, valueSeed = 0 }) {
  return Array(range)
    .fill()
    .map((_, index) => valueSeed + index + indexSeed)
}

export function getSelectedItem({ items }) {
  return items?.find(({ isSelected }) => isSelected === true)
}

export function getSelectedItemText({ items }) {
  return items?.find(({ isSelected }) => isSelected === true)?.text
}

export function getItemsDefaultSelected({ defaultItems, items }) {
  let result

  if (defaultItems && items) {
    result = [
      // eslint-disable-next-line no-unsafe-optional-chaining
      ...defaultItems?.map(({ id, name, ...rest }) => ({
        id,
        href: '#url',
        text: name,
        isSelected: name === defaultItems[0].name,
        ...rest,
      })),
      // eslint-disable-next-line no-unsafe-optional-chaining
      ...items?.map(({ id, name, ...rest }) => ({
        id,
        href: '#url',
        text: name,
        isSelected: name === items[0].name,
        ...rest,
      })),
    ]
  }

  if (defaultItems && !items) {
    result = null
  }

  if (!defaultItems && items) {
    result = items?.map(({ id, name, ...rest }) => ({
      id,
      href: '#url',
      text: name,
      isSelected: name === items[0].name,
      ...rest,
    }))
  }

  if (!defaultItems && !items) {
    result = null
  }

  return result
}

export function getItemsRandomSelected({ items }) {
  const randomItem = getRandomItemFromArray(items?.map(({ name }) => name))

  return items.map(({ id, name, ...rest }) => ({
    id,
    href: '#url',
    text: name,
    isSelected: name === randomItem,
    ...rest,
  }))
}
