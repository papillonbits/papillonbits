import { withTests } from '@storybook/addon-jest'
import { filesObjects } from './DisplayTable.int.data'
import results from '../../../../../../../.jest-test-results.json'

const DisplayTable =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Grid.DisplayTable
    : require('../../../../../build').primer.Grid.DisplayTable

export default {
  title: 'Primer/Atom/Grid/DisplayTable',
  component: DisplayTable,
  decorators: [withTests({ results })],
  parameters: { jest: ['DisplayTable.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  const items = filesObjects.map((filesObject) =>
    (({ contents, path, id, isSelected, ...otherProperties }) => ({
      names: Object.keys({ id, isSelected, ...otherProperties }),
      values: Object.values({ id, isSelected, ...otherProperties }),
    }))(filesObject),
  )

  return <DisplayTable items={items} idIndex={0} isSelectedIndex={1} />
}
