import { action } from 'storybook/actions'
import { withTests } from '@storybook/addon-jest'
import { checkboxState } from '../Checkbox.prop'
import results from '../../../../../../../.jest-test-results.json'

const Checkbox =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Form.Checkbox.Checkbox
    : require('../../../../../build').primer.Form.Checkbox.Checkbox

export default {
  title: 'Primer/Atom/Form/Checkbox',
  component: Checkbox,
  decorators: [withTests({ results })],
  parameters: { jest: ['Checkbox.int.test.js'] },
  excludeStories: ['ariaAttr', 'text', 'custom'],
}

const ariaAttr = {
  describedBy: 'help-text-for-checkbox',
}

export const text = {
  isChecked: 'is checked',
  isNotChecked: 'is not checked',
}

export function custom(onChange) {
  return <Checkbox ariaAttr={ariaAttr} isChecked={true} onChange={onChange} text="is checked" />
}

export function isChecked() {
  return <Checkbox ariaAttr={ariaAttr} isChecked={true} onChange={action('onChange')} text={text.isChecked} />
}

export function isCheckedInactive() {
  return (
    <Checkbox ariaAttr={ariaAttr} isChecked={true} onChange={action('onChange')} text={text.isChecked} state={checkboxState.inactive} />
  )
}

export function isNotChecked() {
  return <Checkbox ariaAttr={ariaAttr} isChecked={false} onChange={action('onChange')} text={text.isNotChecked} />
}

export function isNotCheckedInactive() {
  return (
    <Checkbox ariaAttr={ariaAttr} isChecked={false} onChange={action('onChange')} text={text.isNotChecked} state={checkboxState.inactive} />
  )
}
