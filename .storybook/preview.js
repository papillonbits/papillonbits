const getStorybookPreviewSetup = require('@papillonbits/setup/storybook').getStorybookPreviewSetup

const storybookPreviewSetup = getStorybookPreviewSetup({
  parameters: {
    a11y: true,
    decorators: false,
    docs: true,
    rootAttributesDefaults: true,
  },
  tagsDefaults: true,
})

export const parameters = storybookPreviewSetup.parameters
export const tags = storybookPreviewSetup.tags

storybookPreviewSetup.clearLocalStorage()
