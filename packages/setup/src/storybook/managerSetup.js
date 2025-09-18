import { addons } from 'storybook/manager-api'
import { create } from 'storybook/theming'

export function setStorybookManagerSetup({ panelPosition, theme }) {
  addons.setConfig({
    panelPosition,
    theme: create(theme),
  })
}
