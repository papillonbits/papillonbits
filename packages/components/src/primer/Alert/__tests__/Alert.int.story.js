import { action } from 'storybook/actions'
import { withTests } from '@storybook/addon-jest'
import { alertVariant } from '../Alert.prop'
import results from '../../../../../../.jest-test-results.json'

const children = 'Flash message goes here.'

const Alert =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').primer.Alert.Alert
    : require('../../../../build').primer.Alert.Alert

export default {
  title: 'Primer/Molecule/Alert',
  component: Alert,
  decorators: [withTests({ results })],
  parameters: { jest: ['Alert.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <Alert variant={alertVariant.default}>{children}</Alert>
}

export function regularMultipleParagraphs() {
  return (
    <Alert variant={alertVariant.default}>
      <p>
        This is a longer flash message in it&apos;s own paragraph. It ends up looking something like this. If we keep adding more text,
        it&apos;ll eventually wrap to a new line.
      </p>
      <p>And this is another paragraph.</p>
    </Alert>
  )
}

export function info() {
  return <Alert variant={alertVariant.info}>{children}</Alert>
}

export function warning() {
  return <Alert variant={alertVariant.warning}>{children}</Alert>
}

export function error() {
  return <Alert variant={alertVariant.error}>{children}</Alert>
}

export function success() {
  return <Alert variant={alertVariant.success}>{children}</Alert>
}

export function consent() {
  return (
    <Alert
      variant={alertVariant.consent}
      consent={{
        action: {
          approve: action('Approved'),
          cancel: action('Cancelled'),
        },
      }}
    >
      {children}
    </Alert>
  )
}

export function consentWithInput() {
  return (
    <Alert
      variant={alertVariant.consent}
      consent={{
        action: {
          approve: action('Approved'),
          cancel: action('Cancelled'),
        },
        withInput: true,
      }}
    >
      {children}
    </Alert>
  )
}
