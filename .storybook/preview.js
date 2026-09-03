import { getStorybookPreviewSetup } from '@papillonbits/setup/storybook/previewSetup'

const storybookPreviewSetup = getStorybookPreviewSetup({ parameters: { a11y: true, decorators: false, docs: true } })

export const parameters = storybookPreviewSetup.parameters
export const tags = ['autodocs']

localStorage.clear()
