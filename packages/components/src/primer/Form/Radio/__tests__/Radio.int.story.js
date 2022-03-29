import { Fragment } from 'react'
import { action } from '@storybook/addon-actions'
import { withTests } from '@storybook/addon-jest'
import { radioState } from '../Radio.prop'
import results from '../../../../../../../.jest-test-results.json'

const Radio =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Form.Radio.Radio
    : require('../../../../../build').primer.Form.Radio.Radio

export default {
  title: 'Primer/Atom/Form/Radio',
  component: Radio,
  decorators: [withTests({ results })],
  parameters: { jest: ['Radio.int.test.js'] },
  excludeStories: ['name', 'custom'],
}

const name = 'fantastic-name'

export function custom(onChange) {
  return <Radio name={name} onChange={onChange} text="White" />
}

export function regular() {
  return (
    <Fragment>
      <Radio name={name} onChange={action('onChange-white')} text="White" />
      <Radio name={name} isChecked={true} onChange={action('onChange-black')} text="Black" />
    </Fragment>
  )
}

export function inactive() {
  return (
    <Fragment>
      <Radio name={name} onChange={action('onChange-white')} text="White" state={radioState.inactive} />
      <Radio name={name} isChecked={true} onChange={action('onChange-black')} text="Black" state={radioState.inactive} />
    </Fragment>
  )
}
