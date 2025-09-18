import { action } from 'storybook/actions'
import { withTests } from '@storybook/addon-jest'
import { buttonElement, buttonVariant, buttonSize, buttonState, iconAlignment } from '../Button.prop'
import { iconName } from '../../Icon/Icon.prop'
import results from '../../../../../../.jest-test-results.json'

const Button =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').primer.Button.Button
    : require('../../../../build').primer.Button.Button

const plusIconLeftAligned = { name: iconName.Plus16, alignment: iconAlignment.left }
const plusIconRightAligned = { name: iconName.Plus16, alignment: iconAlignment.right }

export default {
  title: 'Primer/Atom/Button',
  component: Button,
  decorators: [withTests({ results })],
  parameters: { jest: ['Button.int.test.js'] },
  excludeStories: ['custom'],
}

export function custom(element, onClick) {
  return <Button text="Custom button" element={element} onClick={onClick} />
}

export function defaultNormal() {
  return <Button text="Default normal button" onClick={action('onClick')} />
}

export function defaultSmall() {
  return <Button text="Default small button" size={buttonSize.small} onClick={action('onClick')} />
}

export function defaultLarge() {
  return <Button text="Default large button" size={buttonSize.large} onClick={action('onClick')} />
}

export function defaultInactive() {
  return <Button text="Default inactive button" state={buttonState.inactive} onClick={action('onClick')} />
}

export function defaultIconLeftAligned() {
  return <Button text="Default icon button" icon={plusIconLeftAligned} onClick={action('onClick')} />
}

export function defaultIconRightAligned() {
  return <Button text="Default icon button" icon={plusIconRightAligned} onClick={action('onClick')} />
}

export function defaultLink() {
  return <Button element={buttonElement.a} href="#url" text="Default link button" onClick={action('onClick')} />
}

export function primary() {
  return <Button text="Primary button" variant={buttonVariant.primary} onClick={action('onClick')} />
}

export function primarySmall() {
  return <Button text="Primary small button" variant={buttonVariant.primary} size={buttonSize.small} onClick={action('onClick')} />
}

export function primaryLarge() {
  return <Button text="Primary large button" variant={buttonVariant.primary} size={buttonSize.large} onClick={action('onClick')} />
}

export function primaryInactive() {
  return <Button text="Primary inactive button" variant={buttonVariant.primary} state={buttonState.inactive} onClick={action('onClick')} />
}

export function primaryIconLeftAligned() {
  return <Button text="Primary icon button" variant={buttonVariant.primary} icon={plusIconLeftAligned} onClick={action('onClick')} />
}

export function primaryIconRightAligned() {
  return <Button text="Primary icon button" variant={buttonVariant.primary} icon={plusIconRightAligned} onClick={action('onClick')} />
}

export function danger() {
  return <Button text="Danger button" variant={buttonVariant.danger} onClick={action('onClick')} />
}

export function dangerSmall() {
  return <Button text="Danger small button" variant={buttonVariant.danger} size={buttonSize.small} onClick={action('onClick')} />
}

export function dangerLarge() {
  return <Button text="Danger large button" variant={buttonVariant.danger} size={buttonSize.large} onClick={action('onClick')} />
}

export function dangerInactive() {
  return <Button text="Danger inactive button" variant={buttonVariant.danger} state={buttonState.inactive} onClick={action('onClick')} />
}

export function dangerIconLeftAligned() {
  return <Button text="Danger icon button" variant={buttonVariant.danger} icon={plusIconLeftAligned} onClick={action('onClick')} />
}

export function dangerIconRightAligned() {
  return <Button text="Danger icon button" variant={buttonVariant.danger} icon={plusIconRightAligned} onClick={action('onClick')} />
}

export function outline() {
  return <Button text="Outline button" variant={buttonVariant.outline} onClick={action('onClick')} />
}

export function outlineSmall() {
  return <Button text="Outline small button" variant={buttonVariant.outline} size={buttonSize.small} onClick={action('onClick')} />
}

export function outlineLarge() {
  return <Button text="Outline large button" variant={buttonVariant.outline} size={buttonSize.large} onClick={action('onClick')} />
}

export function outlineInactive() {
  return <Button text="Outline inactive button" variant={buttonVariant.outline} state={buttonState.inactive} onClick={action('onClick')} />
}

export function outlineIconLeftAligned() {
  return <Button text="Outline icon button" variant={buttonVariant.outline} icon={plusIconLeftAligned} onClick={action('onClick')} />
}

export function outlineIconRightAligned() {
  return <Button text="Outline icon button" variant={buttonVariant.outline} icon={plusIconRightAligned} onClick={action('onClick')} />
}

export function blue() {
  return <Button text="Blue button" variant={buttonVariant.blue} onClick={action('onClick')} />
}

export function blueSmall() {
  return <Button text="Blue small button" variant={buttonVariant.blue} size={buttonSize.small} onClick={action('onClick')} />
}

export function blueLarge() {
  return <Button text="Blue large button" variant={buttonVariant.blue} size={buttonSize.large} onClick={action('onClick')} />
}

export function blueInactive() {
  return <Button text="Blue inactive button" variant={buttonVariant.blue} state={buttonState.inactive} onClick={action('onClick')} />
}

export function blueIconLeftAligned() {
  return <Button text="Blue icon button" variant={buttonVariant.blue} icon={plusIconLeftAligned} onClick={action('onClick')} />
}

export function blueIconRightAligned() {
  return <Button text="Blue icon button" variant={buttonVariant.blue} icon={plusIconRightAligned} onClick={action('onClick')} />
}

export function orange() {
  return <Button text="Orange button" variant={buttonVariant.orange} onClick={action('onClick')} />
}

export function orangeSmall() {
  return <Button text="Orange small button" variant={buttonVariant.orange} size={buttonSize.small} onClick={action('onClick')} />
}

export function orangeLarge() {
  return <Button text="Orange large button" variant={buttonVariant.orange} size={buttonSize.large} onClick={action('onClick')} />
}

export function orangeInactive() {
  return <Button text="Orange inactive button" variant={buttonVariant.orange} state={buttonState.inactive} onClick={action('onClick')} />
}

export function orangeIconLeftAligned() {
  return <Button text="Orange icon button" variant={buttonVariant.orange} icon={plusIconLeftAligned} onClick={action('onClick')} />
}

export function orangeIconRightAligned() {
  return <Button text="Orange icon button" variant={buttonVariant.orange} icon={plusIconRightAligned} onClick={action('onClick')} />
}
