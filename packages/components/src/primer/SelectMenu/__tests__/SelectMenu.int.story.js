import { action } from 'storybook/actions'
import { withTests } from '@storybook/addon-jest'
import { iconName } from '../../Icon/Icon.prop'
import results from '../../../../../../.jest-test-results.json'

const SelectMenu =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').primer.SelectMenu
    : require('../../../../build').primer.SelectMenu

export default {
  title: 'Primer/Molecule/SelectMenu',
  component: SelectMenu,
  decorators: [withTests({ results })],
  parameters: { jest: ['SelectMenu.int.test.js'] },
  excludeStories: ['summary', 'title', 'ariaAttr', 'items', 'custom'],
}

export const summary = 'Choose an item'

export const title = 'Title'

export const ariaAttr = {
  haspopup: true,
  current: 'page',
}

export const items = [
  { text: 'Item 1', isSelected: true },
  { text: 'Item 2', isSelected: false },
  { text: 'Item 3', isSelected: false },
  { text: 'Item 4', isSelected: false },
]

export function custom(onClick) {
  return <SelectMenu summary={summary} icon={iconName.ChevronDown16} title={title} ariaAttr={ariaAttr} items={items} onClick={onClick} />
}

export function regular() {
  return (
    <SelectMenu
      summary={summary}
      icon={iconName.ChevronDown16}
      title={title}
      ariaAttr={ariaAttr}
      items={items}
      onClick={action('onClick')}
    />
  )
}
