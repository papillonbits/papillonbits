import { action } from '@storybook/addon-actions'
import { withTests } from '@storybook/addon-jest'
import { dropdownState } from '../Dropdown.prop'
import results from '../../../../../../.jest-test-results.json'

const Dropdown =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').primer.Dropdown.Dropdown
    : require('../../../../build').primer.Dropdown.Dropdown

export default {
  title: 'Primer/Atom/Dropdown',
  component: Dropdown,
  decorators: [withTests({ results })],
  parameters: { jest: ['Dropdown.int.test.js'] },
  excludeStories: ['summary', 'ariaAttr', 'items', 'custom'],
}

export const summary = 'Dropdown'

export const ariaAttr = {
  haspopup: true,
  current: 'page',
}

export const items = [
  { href: '#url', text: 'Dropdown Item 1', isSelected: true },
  { href: '#url', text: 'Dropdown Item 2', isSelected: false },
  { href: '#url', text: 'Dropdown Item 3', isSelected: false },
  { href: '#url', text: 'Dropdown Item 4', isSelected: false },
]

export function custom(onClick) {
  return <Dropdown summary={summary} ariaAttr={ariaAttr} items={items} onClick={onClick} />
}

export function regular() {
  return <Dropdown summary={summary} ariaAttr={ariaAttr} items={items} onClick={action('onClick')} />
}

export function inactive() {
  return <Dropdown summary={summary} ariaAttr={ariaAttr} items={items} onClick={action('onClick')} state={dropdownState.inactive} />
}
