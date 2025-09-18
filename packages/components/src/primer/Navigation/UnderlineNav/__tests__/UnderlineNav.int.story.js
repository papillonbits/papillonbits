import { Fragment } from 'react'
import { v1 as uuidv1 } from 'uuid'
import { action } from 'storybook/actions'
import { withTests } from '@storybook/addon-jest'
import buttonStyles from '../../../Button/Button.scss'
import counterStyles from '../../../Label/counters.scss'
import { underlineNavItemType, underlineNavAlignmentType } from '../UnderlineNav.prop'
import { iconName } from '../../../Icon/Icon.prop'
import results from '../../../../../../../.jest-test-results.json'

const UnderlineNav =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Navigation.UnderlineNav
    : require('../../../../../build').primer.Navigation.UnderlineNav

export default {
  title: 'Primer/Molecule/Navigation/UnderlineNav',
  component: UnderlineNav,
  decorators: [withTests({ results })],
  parameters: { jest: ['UnderlineNav.int.test.js'] },
  excludeStories: ['ariaAttr', 'buttonItems', 'anchorItems', 'iconItems', 'fullContainerItems', 'custom'],
}

export const ariaAttr = {
  label: 'Foo bar',
  selected: 'true',
  current: 'page',
}

export const buttonItems = [
  { text: 'Item 1', isSelected: true },
  { text: 'Item 2', isSelected: false },
  { text: 'Item 3', isSelected: false },
  { text: 'Item 4', isSelected: false },
]

export const anchorItems = [
  { href: '#url', text: 'Item 1', isSelected: true },
  { href: '#url', text: 'Item 2', isSelected: false },
  { href: '#url', text: 'Item 3', isSelected: false },
  { href: '#url', text: 'Item 4', isSelected: false },
]

export const iconItems = [
  { href: '#url', icon: iconName.Tools16, html: <span>Item 1</span>, isSelected: true },
  {
    href: '#url',
    icon: iconName.Tools16,
    html: (
      <Fragment>
        <span>Item 2</span>
        <span className={counterStyles.Counter}>10</span>
      </Fragment>
    ),
    isSelected: false,
  },
  { href: '#url', icon: iconName.Tools16, html: <span>Item 3</span>, isSelected: false },
  { href: '#url', icon: iconName.Tools16, html: <span>Item 4</span>, isSelected: false },
]

export const fullContainerItems = [
  { href: '#url', icon: iconName.Tools16, html: <span>Item 1</span>, isSelected: true },
  {
    href: '#url',
    icon: iconName.Tools16,
    html: (
      <Fragment>
        <span>Item 2</span>
        <span className={counterStyles.Counter}>10</span>
      </Fragment>
    ),
    isSelected: false,
  },
  { href: '#url', icon: iconName.Tools16, html: <span>Item 3</span>, isSelected: false },
  { href: '#url', icon: iconName.Tools16, html: <span>Item 4</span>, isSelected: false },
]

const actionButton = (
  <a key={uuidv1()} href="#url" className={buttonStyles.btn}>
    Button
  </a>
)

const actions = [actionButton]

export function custom(items, itemType, onClick) {
  return <UnderlineNav ariaAttr={ariaAttr} items={items} itemType={itemType} onClick={onClick} />
}

export function regular() {
  return <UnderlineNav ariaAttr={ariaAttr} items={buttonItems} itemType={underlineNavItemType.button} onClick={action('onClick')} />
}

export function withActions() {
  return (
    <UnderlineNav ariaAttr={ariaAttr} items={anchorItems} itemType={underlineNavItemType.a} actions={actions} onClick={action('onClick')} />
  )
}

export function rightAligned() {
  return (
    <UnderlineNav
      ariaAttr={ariaAttr}
      items={anchorItems}
      itemType={underlineNavItemType.a}
      align={underlineNavAlignmentType.right}
      onClick={action('onClick')}
    />
  )
}

export function rightAlignedWithActions() {
  return (
    <UnderlineNav
      ariaAttr={ariaAttr}
      items={anchorItems}
      itemType={underlineNavItemType.a}
      align={underlineNavAlignmentType.right}
      actions={actions}
      onClick={action('onClick')}
    />
  )
}

export function withIcons() {
  return <UnderlineNav ariaAttr={ariaAttr} items={iconItems} itemType={underlineNavItemType.a} onClick={action('onClick')} />
}

export function fullContainer() {
  return (
    <UnderlineNav
      ariaAttr={ariaAttr}
      items={fullContainerItems}
      itemType={underlineNavItemType.a}
      actions={actions}
      fullContainer
      onClick={action('onClick')}
    />
  )
}
