export const sortOrder = {
  ascending: 'ascending',
  descending: 'descending',
}

export const sortDefault = {
  index: 0,
  value: 'id',
  order: sortOrder.ascending,
}

export function getSort({ currentSort, newSort }) {
  return {
    index: newSort.index,
    value: newSort.value,
    order: (() => {
      if (currentSort === sortDefault) {
        return sortDefault.order
      }
      if (currentSort.index === newSort.index) {
        return currentSort.order === sortOrder.ascending ? sortOrder.descending : sortOrder.ascending
      }
      return sortDefault.order
    })(),
  }
}

export function sortObjects({ sort, objects }) {
  if (!objects) {
    return objects
  }

  if (sort.order === sortOrder.ascending) {
    return objects.sort((a, b) => {
      switch (typeof a?.[sort.value]) {
        case 'object':
          if (a?.[sort.value] instanceof Object && a?.[sort.value] instanceof Date) {
            return a?.[sort.value] > b?.[sort.value] ? 1 : -1
          }
          if (a?.[sort.value] instanceof Object && a?.[sort.value] instanceof Array) {
            return a?.[sort.value]?.find((item) => item.isSelected === true)?.text?.toLowerCase() >
              b?.[sort.value]?.find((item) => item.isSelected === true)?.text?.toLowerCase()
              ? 1
              : -1
          }
          return a?.[sort.value]?.value?.toLowerCase() > b?.[sort.value]?.value?.toLowerCase() ? 1 : -1
        case 'string':
          return a?.[sort.value]?.toLowerCase() > b?.[sort.value]?.toLowerCase() ? 1 : -1
        case 'number':
          return a?.[sort.value] > b?.[sort.value] ? 1 : -1
        default:
          return -1
      }
    })
  }

  return objects.sort((a, b) => {
    switch (typeof a?.[sort.value]) {
      case 'object':
        if (a?.[sort.value] instanceof Object && a?.[sort.value] instanceof Date) {
          return a?.[sort.value] < b?.[sort.value] ? 1 : -1
        }
        if (a?.[sort.value] instanceof Object && a?.[sort.value] instanceof Array) {
          return a?.[sort.value]?.find((item) => item.isSelected === true)?.text?.toLowerCase() <
            b?.[sort.value]?.find((item) => item.isSelected === true)?.text?.toLowerCase()
            ? 1
            : -1
        }
        return a?.[sort.value]?.value?.toLowerCase() < b?.[sort.value]?.value?.toLowerCase() ? 1 : -1
      case 'string':
        return a?.[sort.value]?.toLowerCase() < b?.[sort.value]?.toLowerCase() ? 1 : -1
      case 'number':
        return a?.[sort.value] < b?.[sort.value] ? 1 : -1
      default:
        return -1
    }
  })
}
