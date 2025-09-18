import { action } from 'storybook/actions'
import { withTests } from '@storybook/addon-jest'
import { previousNextState } from '../PreviousNext.prop'
import results from '../../../../../../../.jest-test-results.json'

const PreviousNext =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Pagination.PreviousNext
    : require('../../../../../build').primer.Pagination.PreviousNext

export default {
  title: 'Primer/Atom/Pagination/PreviousNext',
  component: PreviousNext,
  decorators: [withTests({ results })],
  parameters: { jest: ['PreviousNext.int.test.js'] },
  excludeStories: ['ariaAttr', 'currentPage', 'custom'],
}

export const ariaAttr = {
  label: 'Pagination',
}

export const currentPage = {
  indexItems: [
    { isCurrent: false, index: 0 },
    { isCurrent: false, index: 1 },
    { isCurrent: true, index: 2 },
    { isCurrent: false, index: 3 },
    { isCurrent: false, index: 4 },
    { isCurrent: false, index: 5 },
    { isCurrent: false, index: 6 },
  ],
  currentIndex: 2,
  canMoveBackwards: true,
  canMoveForward: true,
}

export function custom(onClick) {
  return <PreviousNext ariaAttr={ariaAttr} currentPage={currentPage} onClick={onClick} />
}

export function regular() {
  return <PreviousNext ariaAttr={ariaAttr} currentPage={currentPage} onClick={action('onClick')} />
}

export function inactive() {
  return <PreviousNext ariaAttr={ariaAttr} currentPage={currentPage} onClick={action('onClick')} state={previousNextState.inactive} />
}
