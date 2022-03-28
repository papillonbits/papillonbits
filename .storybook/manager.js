import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'

addons.setConfig({
  panelPosition: 'right',
  theme: create({
    base: 'light',
    brandTitle: 'Papillon Bits Components',
    brandUrl: 'https://github.com/papillonbits/papillonbits',
    brandImage: 'https://avatars.githubusercontent.com/u/81188645',
  }),
})
