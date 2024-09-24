import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'

export const parameters = {
  a11y: {
    // optional selector which element to inspect
    // element: '#root',
    // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
    config: {},
    // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
    options: {},
    // optional flag to prevent the automatic check
    // manual: true,
  },
  docs: { container: DocsContainer, page: DocsPage },
  // https://primer.style/foundations/primitives/getting-started
  // https://storybook.js.org/addons/storybook-addon-root-attributes
  rootAttributesTooltip: true,
  rootAttributes: [
    {
      root: 'body',
      attribute: 'data-color-mode',
      defaultState: {
        name: 'Light',
        value: 'light',
      },
      states: [
        {
          name: 'Light',
          value: 'light',
        },
        {
          name: 'Dark',
          value: 'dark',
        },
      ],
    },
    {
      root: 'body',
      attribute: 'data-light-theme',
      defaultState: {
        name: 'Light',
        value: 'light',
      },
      states: [
        {
          name: 'Light',
          value: 'light',
        },
      ],
    },
    {
      root: 'body',
      attribute: 'data-dark-theme',
      defaultState: {
        name: 'Dark',
        value: 'dark',
      },
      states: [
        {
          name: 'Dark',
          value: 'dark',
        },
      ],
    },
  ],
}

export const tags = ['autodocs']

localStorage.clear()
