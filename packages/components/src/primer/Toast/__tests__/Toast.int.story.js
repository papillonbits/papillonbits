import { action } from '@storybook/addon-actions'
import { withTests } from '@storybook/addon-jest'
import { toastVariant } from '../Toast.prop'
import results from '../../../../../../.jest-test-results.json'

const text = {
  custom: 'Toast message goes here',
  info: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Aenean massa. Cum sociis natoquepenatibus et ma',
  success: 'Success message goes here',
  warning: 'Warning message goes here',
  error: 'Error message goes here',
  dismissable: 'This toast is dismissable.',
}

const Toast =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').primer.Toast.Toast
    : require('../../../../build').primer.Toast.Toast

export default {
  title: 'Primer/Molecule/Toast',
  component: Toast,
  decorators: [withTests({ results })],
  parameters: { jest: ['Toast.int.test.js'] },
  excludeStories: ['custom'],
}

export function custom(onClick) {
  return <Toast text={text.custom} isDismissable={true} onClick={onClick} />
}

export function info() {
  return <Toast variant={toastVariant.info} text={text.info} />
}

export function success() {
  return <Toast variant={toastVariant.success} text={text.success} />
}

export function warning() {
  return <Toast variant={toastVariant.warning} text={text.warning} />
}

export function error() {
  return <Toast variant={toastVariant.error} text={text.error} />
}

export function dismissable() {
  return <Toast variant={toastVariant.info} text={text.dismissable} isDismissable={true} onClick={action('onClick')} />
}
