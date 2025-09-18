import cx from 'classnames'
import { v1 as uuidv1 } from 'uuid'
import { action } from 'storybook/actions'
import { withTests } from '@storybook/addon-jest'
import { BrowserRouter, Link } from 'react-router-dom'
import layoutStyles from '@papillonbits/css/build/primer/utilities/layout.scss'
import tabNavStyles from '../TabNav.scss'
import buttonStyles from '../../../Button/Button.scss'
import { tabNavState } from '../TabNav.prop'
import results from '../../../../../../../.jest-test-results.json'

const TabNav =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Navigation.TabNav
    : require('../../../../../build').primer.Navigation.TabNav

export default {
  title: 'Primer/Molecule/Navigation/TabNav',
  component: TabNav,
  decorators: [withTests({ results })],
  parameters: { jest: ['TabNav.int.test.js'] },
  excludeStories: ['ariaAttr', 'defaultItems', 'navigationItems', 'mixedEnabledVisibleItems', 'custom'],
}

export const ariaAttr = {
  label: 'Foo bar',
  current: 'page',
}

export const defaultItems = [
  {
    href: '#url',
    text: 'Foo tab',
    isSelected: true,
    enabled: true,
    visible: true,
  },
  { href: '#url', text: 'Bar tab', isSelected: false, enabled: true, visible: true },
]

export const navigationItems = [
  {
    link: {
      component: Link,
      props: { ...{ to: '/foo' } },
      children: 'Foo link',
    },
    isSelected: true,
    enabled: true,
    visible: true,
  },
  {
    link: {
      component: Link,
      props: { ...{ to: '/bar' } },
      children: 'Bar link',
    },
    isSelected: false,
    enabled: true,
    visible: true,
  },
]

export const mixedEnabledVisibleItems = [
  {
    link: {
      component: Link,
      props: { ...{ to: '/foo' } },
      children: 'Foo link',
    },
    isSelected: true,
    enabled: true,
    visible: true,
  },
  {
    link: {
      component: Link,
      props: { ...{ to: '/bar' } },
      children: 'Bar link',
    },
    isSelected: false,
    enabled: false,
    visible: true,
  },
  {
    link: {
      component: Link,
      props: { ...{ to: '/disco' } },
      children: 'Disco link',
    },
    isSelected: false,
    enabled: false,
    visible: false,
  },
]

const actionButton = (
  <a key={uuidv1()} className={cx(buttonStyles.btn, buttonStyles['btn-sm'], layoutStyles['float-right'])} href="#url" role="button">
    Button
  </a>
)

const buttonActions = [actionButton]

const actionText = (
  <div key={uuidv1()} className={cx(tabNavStyles['tabnav-extra'], layoutStyles['float-right'])}>
    Tabnav widget text here.
  </div>
)

const textActions = [actionText]

const actionLink = (
  <div key={uuidv1()} className={layoutStyles['float-right']}>
    <a className={tabNavStyles['tabnav-extra']} href="#url">
      Tabnav extra link
    </a>
    <a className={tabNavStyles['tabnav-extra']} href="#url">
      Tabnav extra link
    </a>
  </div>
)

const linkActions = [actionLink]

export function custom(items, onClick) {
  return (
    <BrowserRouter>
      <TabNav ariaAttr={ariaAttr} items={items} onClick={onClick} />
    </BrowserRouter>
  )
}

export function regular() {
  return <TabNav ariaAttr={ariaAttr} items={defaultItems} onClick={action('onClick')} />
}

export function withButtonActions() {
  return <TabNav ariaAttr={ariaAttr} items={defaultItems} actions={buttonActions} onClick={action('onClick')} />
}

export function withTextActions() {
  return <TabNav ariaAttr={ariaAttr} items={defaultItems} actions={textActions} onClick={action('onClick')} />
}

export function withLinkActions() {
  return <TabNav ariaAttr={ariaAttr} items={defaultItems} actions={linkActions} onClick={action('onClick')} />
}

export function withNavigation() {
  return (
    <BrowserRouter>
      <TabNav ariaAttr={ariaAttr} items={navigationItems} onClick={action('onClick')} />
    </BrowserRouter>
  )
}

export function withMixedEnabledVisibleItems() {
  return (
    <BrowserRouter>
      <TabNav ariaAttr={ariaAttr} items={mixedEnabledVisibleItems} onClick={action('onClick')} />
    </BrowserRouter>
  )
}

export function inactive() {
  return <TabNav ariaAttr={ariaAttr} items={defaultItems} onClick={action('onClick')} state={tabNavState.inactive} />
}
