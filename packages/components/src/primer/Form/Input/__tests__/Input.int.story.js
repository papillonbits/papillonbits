import { action } from '@storybook/addon-actions'
import { withTests } from '@storybook/addon-jest'
import { inputState } from '../Input.prop'
import results from '../../../../../../../.jest-test-results.json'

const Input =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Form.Input.Input
    : require('../../../../../build').primer.Form.Input.Input

export default {
  title: 'Primer/Atom/Form/Input',
  component: Input,
  decorators: [withTests({ results })],
  parameters: { jest: ['Input.int.test.js'] },
  excludeStories: ['placeholder', 'ariaAttr', 'custom'],
}

const placeholder = 'Fantastic placeholder'

const ariaAttr = {
  label: 'Repository description',
}

export function custom(onChange, onKeyUp, onFocus, onBlur) {
  return <Input placeholder={placeholder} ariaAttr={ariaAttr} onChange={onChange} onKeyUp={onKeyUp} onFocus={onFocus} onBlur={onBlur} />
}

export function regular() {
  return (
    <Input
      placeholder={placeholder}
      ariaAttr={ariaAttr}
      onChange={action('onChange')}
      onKeyUp={action('onKeyUp')}
      onFocus={action('onFocus')}
      onBlur={action('onBlur')}
    />
  )
}

export function inactive() {
  return (
    <Input
      placeholder={placeholder}
      ariaAttr={ariaAttr}
      onChange={action('onChange')}
      onKeyUp={action('onKeyUp')}
      onFocus={action('onFocus')}
      onBlur={action('onBlur')}
      state={inputState.inactive}
    />
  )
}
