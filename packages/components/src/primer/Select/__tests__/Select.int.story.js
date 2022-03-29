import { action } from '@storybook/addon-actions'
import { withTests } from '@storybook/addon-jest'
import { selectState } from '../Select.prop'
import results from '../../../../../../.jest-test-results.json'

const Select =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').primer.Select.Select
    : require('../../../../build').primer.Select.Select

export default {
  title: 'Primer/Atom/Select',
  component: Select,
  decorators: [withTests({ results })],
  parameters: { jest: ['Select.int.test.js'] },
  excludeStories: ['selectedText', 'items', 'custom'],
}

export const selectedText = 'Select'

export const items = [
  { text: 'Select Item 1', isSelected: true },
  { text: 'Select Item 2', isSelected: false },
  { text: 'Select Item 3', isSelected: false },
  { text: 'Select Item 4', isSelected: false },
]

export function custom(onChange) {
  return <Select selectedText={selectedText} items={items} onChange={onChange} />
}

export function regular() {
  return <Select selectedText={selectedText} items={items} onChange={action('onChange')} />
}

export function inactive() {
  return <Select selectedText={selectedText} items={items} onChange={action('onChange')} state={selectState.inactive} />
}
