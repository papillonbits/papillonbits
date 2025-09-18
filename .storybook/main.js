import path from 'path'
// import { getStorybookMainSetup } from '@papillonbits/setup/storybook/mainSetup'
import { getStorybookMainSetup } from '../packages/setup/src/storybook/mainSetup'

const storiesBasePath = path.resolve(__dirname, '../../papillonbits/packages/components/src/primer/**/__tests__/*.int.story.@(js|mdx)')
const includeBasePath = path.resolve(__dirname, '../packages/components/src/primer/**/__tests__/*')
const modulesBasePath = path.resolve(__dirname, '../packages')

export default getStorybookMainSetup({ storiesBasePath, includeBasePath, modulesBasePath, rootAttributesDefaults: true })
