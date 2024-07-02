import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: './icon.svg',
    brandTitle: 'Novic-djef Tonleu Components',
    brandUrl: 'https://tonleu.com',
  },
});
