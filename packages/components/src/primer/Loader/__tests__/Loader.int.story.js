import { withTests } from '@storybook/addon-jest'
import { loaderVariant } from '../Loader.prop'
import results from '../../../../../../.jest-test-results.json'

const Loader =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').primer.Loader.Loader
    : require('../../../../build').primer.Loader.Loader

export default {
  title: 'Primer/Atom/Loader',
  component: Loader,
  decorators: [withTests({ results })],
  parameters: { jest: ['Loader.int.test.js'] },
  excludeStories: ['textValue', 'custom'],
}

const textValue = 'Loading'

export function heading() {
  return <Loader variant={loaderVariant.heading} text={textValue} />
}

export function text() {
  return <Loader variant={loaderVariant.text} text={textValue} />
}

export function label() {
  return <Loader variant={loaderVariant.label} text={textValue} />
}

export function button() {
  return <Loader variant={loaderVariant.button} text={textValue} />
}
