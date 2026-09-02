// import { setStorybookManagerSetup } from '@papillonbits/setup/storybook/managerSetup'
import { setStorybookManagerSetup } from '../packages/setup/src/storybook/managerSetup'

setStorybookManagerSetup({
  panelPosition: 'right',
  theme: {
    base: 'light',
    brandTitle: 'Papillon Bits Components',
    brandUrl: 'https://github.com/papillonbits/papillonbits',
    brandImage: 'https://avatars.githubusercontent.com/u/81188645',
  },
})
