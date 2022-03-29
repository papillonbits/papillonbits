import { action } from '@storybook/addon-actions'
import { withTests } from '@storybook/addon-jest'
import { breadcrumbState } from '../Breadcrumb.prop'
import results from '../../../../../../.jest-test-results.json'

const Breadcrumb =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').primer.Breadcrumb.Breadcrumb
    : require('../../../../build').primer.Breadcrumb.Breadcrumb

export default {
  title: 'Primer/Atom/Breadcrumb',
  component: Breadcrumb,
  decorators: [withTests({ results })],
  parameters: { jest: ['Breadcrumb.int.test.js'] },
  excludeStories: ['ariaAttr', 'items', 'custom'],
}

export const ariaAttr = {
  label: 'Breadcrumb',
  current: 'page',
}

export const items = [
  { href: '/fantastic-folder', text: 'Fantastic Folder', isSelected: false },
  { href: '/fantastic-folder/another-fantastic-folder', text: 'Another Fantastic folder', isSelected: false },
  { href: '', text: 'One More Fantastic Folder', isSelected: true },
]

export function custom(onClick) {
  return <Breadcrumb ariaAttr={ariaAttr} items={items} onClick={onClick} />
}

export function regular() {
  return <Breadcrumb ariaAttr={ariaAttr} items={items} onClick={action('onClick')} />
}

export function inactive() {
  return <Breadcrumb ariaAttr={ariaAttr} items={items} onClick={action('onClick')} state={breadcrumbState.inactive} />
}
