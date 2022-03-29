import { action } from '@storybook/addon-actions'
import { withTests } from '@storybook/addon-jest'
import { sortDefault } from '@papillonbits/library/sort'
import { flexGridSelection, flexGridState } from '../FlexGrid.prop'
import { filesObjects } from './FlexGrid.int.data'
import results from '../../../../../../../.jest-test-results.json'

const FlexGrid =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Grid.FlexGrid
    : require('../../../../../build').primer.Grid.FlexGrid

export default {
  title: 'Primer/Molecule/Grid/FlexGrid',
  component: FlexGrid,
  decorators: [withTests({ results })],
  parameters: { jest: ['FlexGrid.int.test.js'] },
  excludeStories: ['ariaAttr', 'text', 'custom'],
}

const radioItemsWithSelection = filesObjects.map((filesObject) =>
  (({ contents, path, id, isSelected, ...otherProperties }) => ({
    names: Object.keys({ id, isSelected, ...otherProperties }),
    values: Object.values({ id, isSelected, ...otherProperties }),
  }))(filesObject),
)

const radioItemsWithoutSelection = filesObjects.map((filesObject) =>
  (({ contents, path, id, isSelected, ...otherProperties }) => ({
    names: Object.keys({ id, ...otherProperties }),
    values: Object.values({ id, ...otherProperties }),
  }))(filesObject),
)

const checkboxItemsWithSelection = filesObjects.map((filesObject) =>
  (({ contents, path, id, isSelected, ...otherProperties }) => ({
    names: Object.keys({ id, isSelected, ...otherProperties }),
    values: Object.values({ id, isSelected, ...otherProperties }),
  }))(filesObject),
)

const checkboxItemsWithoutSelection = filesObjects.map((filesObject) =>
  (({ contents, path, id, isSelected, ...otherProperties }) => ({
    names: Object.keys({ id, ...otherProperties }),
    values: Object.values({ id, ...otherProperties }),
  }))(filesObject),
)

export function radioWithSelection() {
  return (
    <FlexGrid
      items={radioItemsWithSelection}
      idIndex={0}
      isSelectedIndex={1}
      selection={flexGridSelection.radio}
      sort={sortDefault}
      onChange={action('onChange')}
      onDoubleClick={action('onDoubleClick')}
    />
  )
}

export function radioWithSelectionInactive() {
  return (
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
  )
}

export function radioWithoutSelection() {
  return <FlexGrid idIndex={0} items={radioItemsWithoutSelection} sort={sortDefault} onChange={action('onChange')} />
}

export function radioWithoutSelectionInactive() {
  return (
    <FlexGrid
      idIndex={0}
      items={radioItemsWithoutSelection}
      sort={sortDefault}
      onChange={action('onChange')}
      state={flexGridState.inactive}
    />
  )
}

export function checkboxWithSelection() {
  return (
    <FlexGrid
      items={checkboxItemsWithSelection}
      idIndex={0}
      isSelectedIndex={1}
      selection={flexGridSelection.checkbox}
      sort={sortDefault}
      onChange={action('onChange')}
      onDoubleClick={action('onDoubleClick')}
    />
  )
}

export function checkboxWithSelectionInactive() {
  return (
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
  )
}

export function checkboxWithoutSelection() {
  return (
    <FlexGrid
      idIndex={0}
      items={checkboxItemsWithoutSelection}
      sort={sortDefault}
      onChange={action('onChange')}
      onDoubleClick={action('onDoubleClick')}
    />
  )
}

export function checkboxWithoutSelectionInactive() {
  return (
    <FlexGrid
      idIndex={0}
      items={checkboxItemsWithoutSelection}
      sort={sortDefault}
      onChange={action('onChange')}
      onDoubleClick={action('onDoubleClick')}
      state={flexGridState.inactive}
    />
  )
}
