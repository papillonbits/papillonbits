import { getCurrentIndex, getIndexItems, getRange } from '../array'

export const paginationActionTypes = {
  onChange: 'onChange',
  onBackwards: 'onBackwards',
  onForward: 'onForward',
}

export function getPagination({ searchObjects, regularObjects, pagination, resetPageNumber }) {
  let newPageCount
  let newPageNumber

  if (searchObjects) {
    newPageCount = Math.ceil(searchObjects.length / pagination.pageSize)
    newPageNumber = 1
  } else {
    newPageCount = Math.ceil(regularObjects.length / pagination.pageSize)
    if (resetPageNumber) {
      newPageNumber = 1
    }
    newPageNumber = pagination.pageNumber > newPageCount && newPageCount > 0 ? newPageCount : pagination.pageNumber
  }

  const items = getRange({
    range: newPageCount,
  }).map((_, index) => ({
    isCurrent: index === newPageNumber - 1,
  }))

  return {
    ...pagination,
    pageNumber: newPageNumber,
    currentPage: {
      indexItems: getIndexItems(items),
      currentIndex: getCurrentIndex(getIndexItems(items)),
      canMoveBackwards: getCurrentIndex(getIndexItems(items)) > 0,
      canMoveForward: getCurrentIndex(getIndexItems(items)) < getIndexItems(items).length - 1,
    },
  }
}

export function paginate({ array, pageSize, pageNumber }) {
  return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize)
}

export function setNewIndexItemsOnMove({ onBackwards, onForward, currentPage }) {
  const { indexItems, currentIndex, canMoveBackwards, canMoveForward } = currentPage

  return indexItems.map(({ isCurrent, index }) => {
    let newIsCurrent

    if (((onBackwards && canMoveBackwards) || (onForward && canMoveForward)) && index === currentIndex) {
      newIsCurrent = false
    } else if (onBackwards && canMoveBackwards && index === currentIndex - 1) {
      newIsCurrent = true
    } else if (onForward && canMoveForward && index === currentIndex + 1) {
      newIsCurrent = true
    } else {
      newIsCurrent = isCurrent
    }

    return {
      isCurrent: newIsCurrent,
      index,
    }
  })
}
