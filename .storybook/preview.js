// import { getStorybookPreviewSetup } from '@papillonbits/setup/storybook/previewSetup'
import { getStorybookPreviewSetup } from '../packages/setup/src/storybook/previewSetup'

const storybookPreviewSetup = getStorybookPreviewSetup({ parameters: { a11y: true, decorators: false, docs: true } })

export const parameters = storybookPreviewSetup.parameters
export const tags = ['autodocs']

localStorage.clear()
