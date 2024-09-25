import { getStorybookPreviewSetup } from '@papillonbits/setup/storybook/previewSetup'

const storybookPreviewSetup = getStorybookPreviewSetup({
  parameters: {
    a11y: true,
    decorators: false,
    docs: true,
    rootAttributesDefaults: true,
  },
  tagsDefaults: true,
})

export default {
  parameters: storybookPreviewSetup.parameters,
  tags: storybookPreviewSetup.tags,
}

storybookPreviewSetup.clearLocalStorage()
