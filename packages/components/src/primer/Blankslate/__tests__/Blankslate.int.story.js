import { withTests } from '@storybook/addon-jest'
import { blankslateVariant } from '../Blankslate.prop'
import results from '../../../../../../.jest-test-results.json'

const Blankslate =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').primer.Blankslate.Blankslate
    : require('../../../../build').primer.Blankslate.Blankslate

const heading = 'This is a blank slate'
const text = 'Use it to provide information when no dynamic content exists.'

export default {
  title: 'Primer/Atom/Blankslate',
  component: Blankslate,
  decorators: [withTests({ results })],
  parameters: { jest: ['Blankslate.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <Blankslate variant={blankslateVariant.default} heading={heading} text={text} />
}

export function narrow() {
  return <Blankslate variant={blankslateVariant.narrow} heading={heading} text={text} />
}

export function capped() {
  return <Blankslate variant={blankslateVariant.capped} heading={heading} text={text} />
}

export function spacious() {
  return <Blankslate variant={blankslateVariant.spacious} heading={heading} text={text} />
}

export function large() {
  return <Blankslate variant={blankslateVariant.large} heading={heading} text={text} />
}

export function cleanBackground() {
  return <Blankslate hasCleanBackground={true} heading={heading} text={text} />
}
