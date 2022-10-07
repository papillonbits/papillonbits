const path = require('path')
const getStorybookMainSetup = require('../packages/library/src/storybook').getStorybookMainSetup

const storiesBasePath = path.resolve(__dirname, '../../papillonbits/packages/components/src/primer/**/__tests__/*.int.story.@(js|mdx)')
const includeBasePath = path.resolve(__dirname, '../packages/components/src/primer/**/__tests__/*')
const modulesBasePath = path.resolve(__dirname, '../packages')

module.exports = getStorybookMainSetup({ storiesBasePath, includeBasePath, modulesBasePath })
