import { MemoryRouter } from 'react-router-dom'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'

export function getStorybookPreviewSetup({ parameters: { a11y, decorators, docs } }) {
  let parameters = {}

  if (a11y) {
    parameters = {
      ...parameters,
      a11y: {
        ...{
          // optional selector which element to inspect
          // element: '#root',
          // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
          config: {},
          // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
          options: {},
          // optional flag to prevent the automatic check
          // manual: true,
        },
      },
    }
  }

  if (decorators) {
    parameters = {
      ...parameters,
      decorators: [
        ...[
          (Story) => (
            <MemoryRouter>
              <Story />
            </MemoryRouter>
          ),
        ],
      ],
    }
  }

  if (docs) {
    parameters = {
      ...parameters,
      docs: {
        ...{ container: DocsContainer, page: DocsPage },
      },
    }
  }

  return { parameters }
}
