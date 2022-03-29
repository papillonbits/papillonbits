import { withTests } from '@storybook/addon-jest'
import { iconNameKeys, iconNameKeysDefault, iconSizeKeys, iconSizeKeysDefault } from '../Icon.prop'
import results from '../../../../../../.jest-test-results.json'

const Icon =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').primer.Icon.Icon
    : require('../../../../build').primer.Icon.Icon

export default {
  title: 'Primer/Atom/Icon',
  component: Icon,
  decorators: [withTests({ results })],
  parameters: { jest: ['Icon.int.test.js'] },
  argTypes: {
    className: {
      control: { type: 'text' },
      defaultValue: '',
    },
    icon: {
      control: {
        type: 'select',
        options: iconNameKeys,
      },
      defaultValue: iconNameKeysDefault,
    },
    size: {
      control: {
        type: 'select',
        options: iconSizeKeys,
      },
      defaultValue: iconSizeKeysDefault,
    },
  },
  excludeStories: ['custom'],
}

export function regular({ className = '', icon = iconNameKeysDefault, size = iconSizeKeysDefault, ...rest }) {
  return <Icon className={className} icon={icon} size={size} {...rest} />
}

export function allIcons() {
  return (
    <div
      style={{
        columns: '4',
        width: '800px',
      }}
    >
      {iconNameKeys.map((icon) => (
        <div key={icon} style={{ padding: '4px', fontSize: '14px', lineHeight: '21px' }}>
          <Icon icon={icon} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
          <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>{icon}</span>
        </div>
      ))}
    </div>
  )
}
