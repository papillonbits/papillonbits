import { action } from '@storybook/addon-actions'
import { withTests } from '@storybook/addon-jest'
import { popoverVariant, popoverSize } from '../Popover.prop'
import results from '../../../../../../.jest-test-results.json'

const Popover =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').primer.Popover.Popover
    : require('../../../../build').primer.Popover.Popover

export default {
  title: 'Primer/Molecule/Popover',
  component: Popover,
  decorators: [withTests({ results })],
  parameters: { jest: ['Popover.int.test.js'] },
  excludeStories: ['custom'],
}

const intro = 'UI'
const heading = 'Popover heading'
const message = 'Message about this particular piece of UI.'
const acknowledge = 'Got it!'

export function custom(introOnClick, acknowledgeOnClick) {
  return (
    <Popover
      intro={intro}
      heading={heading}
      message={message}
      acknowledge={acknowledge}
      introOnClick={introOnClick}
      acknowledgeOnClick={acknowledgeOnClick}
    />
  )
}

export function regular() {
  return (
    <Popover
      intro={intro}
      heading={heading}
      message={message}
      acknowledge={acknowledge}
      introOnClick={action('introOnClick')}
      acknowledgeOnClick={action('acknowledgeOnClick')}
    />
  )
}

export function regularLarge() {
  return (
    <Popover
      intro={intro}
      heading={heading}
      message={message}
      acknowledge={acknowledge}
      size={popoverSize.large}
      introOnClick={action('introOnClick')}
      acknowledgeOnClick={action('acknowledgeOnClick')}
    />
  )
}

export function bottom() {
  return (
    <Popover
      intro={intro}
      heading={heading}
      message={message}
      acknowledge={acknowledge}
      variant={popoverVariant.bottom}
      introOnClick={action('introOnClick')}
      acknowledgeOnClick={action('acknowledgeOnClick')}
    />
  )
}

export function bottomRight() {
  return (
    <Popover
      intro={intro}
      heading={heading}
      message={message}
      acknowledge={acknowledge}
      variant={popoverVariant.bottomRight}
      introOnClick={action('introOnClick')}
      acknowledgeOnClick={action('acknowledgeOnClick')}
    />
  )
}

export function bottomLeft() {
  return (
    <Popover
      intro={intro}
      heading={heading}
      message={message}
      acknowledge={acknowledge}
      variant={popoverVariant.bottomLeft}
      introOnClick={action('introOnClick')}
      acknowledgeOnClick={action('acknowledgeOnClick')}
    />
  )
}

export function left() {
  return (
    <Popover
      intro={intro}
      heading={heading}
      message={message}
      acknowledge={acknowledge}
      variant={popoverVariant.left}
      introOnClick={action('introOnClick')}
      acknowledgeOnClick={action('acknowledgeOnClick')}
    />
  )
}

export function leftBottom() {
  return (
    <Popover
      intro={intro}
      heading={heading}
      message={message}
      acknowledge={acknowledge}
      variant={popoverVariant.leftBottom}
      introOnClick={action('introOnClick')}
      acknowledgeOnClick={action('acknowledgeOnClick')}
    />
  )
}

export function leftTop() {
  return (
    <Popover
      intro={intro}
      heading={heading}
      message={message}
      acknowledge={acknowledge}
      variant={popoverVariant.leftTop}
      introOnClick={action('introOnClick')}
      acknowledgeOnClick={action('acknowledgeOnClick')}
    />
  )
}

export function right() {
  return (
    <Popover
      intro={intro}
      heading={heading}
      message={message}
      acknowledge={acknowledge}
      variant={popoverVariant.right}
      introOnClick={action('introOnClick')}
      acknowledgeOnClick={action('acknowledgeOnClick')}
    />
  )
}

export function rightBottom() {
  return (
    <Popover
      intro={intro}
      heading={heading}
      message={message}
      acknowledge={acknowledge}
      variant={popoverVariant.rightBottom}
      introOnClick={action('introOnClick')}
      acknowledgeOnClick={action('acknowledgeOnClick')}
    />
  )
}

export function rightTop() {
  return (
    <Popover
      intro={intro}
      heading={heading}
      message={message}
      acknowledge={acknowledge}
      variant={popoverVariant.rightTop}
      introOnClick={action('introOnClick')}
      acknowledgeOnClick={action('acknowledgeOnClick')}
    />
  )
}

export function topLeft() {
  return (
    <Popover
      intro={intro}
      heading={heading}
      message={message}
      acknowledge={acknowledge}
      variant={popoverVariant.topLeft}
      introOnClick={action('introOnClick')}
      acknowledgeOnClick={action('acknowledgeOnClick')}
    />
  )
}

export function topRight() {
  return (
    <Popover
      intro={intro}
      heading={heading}
      message={message}
      acknowledge={acknowledge}
      variant={popoverVariant.topright}
      introOnClick={action('introOnClick')}
      acknowledgeOnClick={action('acknowledgeOnClick')}
    />
  )
}
