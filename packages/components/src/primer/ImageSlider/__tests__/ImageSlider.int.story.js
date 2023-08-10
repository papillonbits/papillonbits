import { withTests } from '@storybook/addon-jest'
import results from '../../../../../../.jest-test-results.json'

const ImageSlider =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').primer.ImageSlider
    : require('../../../../build').primer.ImageSlider

export default {
  title: 'Primer/Molecule/ImageSlider',
  component: ImageSlider,
  decorators: [withTests({ results })],
  parameters: { jest: ['ImageSlider.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <ImageSlider />
}
