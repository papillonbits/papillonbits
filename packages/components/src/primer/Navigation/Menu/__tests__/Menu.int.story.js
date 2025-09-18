import { action } from 'storybook/actions'
import { withTests } from '@storybook/addon-jest'
import { iconName } from '../../../Icon/Icon.prop'
import results from '../../../../../../../.jest-test-results.json'

const Menu =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Navigation.Menu
    : require('../../../../../build').primer.Navigation.Menu

export default {
  title: 'Primer/Molecule/Navigation/Menu',
  component: Menu,
  decorators: [withTests({ results })],
  parameters: { jest: ['Menu.int.test.js'] },
  excludeStories: ['heading', 'ariaAttr', 'defaultItems', 'iconItems', 'custom'],
}

export const heading = 'Menu heading'

export const ariaAttr = {
  label: 'Person settings',
  labelledBy: 'menu-heading',
  current: 'page',
}

export const defaultItems = [
  { href: '#url', text: 'Account', isSelected: true },
  { href: '#url', text: 'Profile', isSelected: false },
  { href: '#url', text: 'Emails', isSelected: false },
  { href: '#url', text: 'Notifications', isSelected: false },
]

export const iconItems = [
  { href: '#url', icon: iconName.Tools16, text: 'Account', isSelected: true },
  { href: '#url', icon: iconName.Person16, text: 'Profile', isSelected: false },
  { href: '#url', icon: iconName.Mail16, text: 'Emails', isSelected: false },
  { href: '#url', icon: iconName.Broadcast16, text: 'Notifications', isSelected: false },
]

export function custom(onClick) {
  return <Menu ariaAttr={ariaAttr} items={defaultItems} onClick={onClick} />
}

export function regular() {
  return <Menu ariaAttr={ariaAttr} items={defaultItems} onClick={action('onClick')} />
}

export function withIcons() {
  return <Menu ariaAttr={ariaAttr} items={iconItems} onClick={action('onClick')} />
}

export function withHeading() {
  return <Menu heading={heading} ariaAttr={ariaAttr} items={defaultItems} onClick={action('onClick')} />
}
