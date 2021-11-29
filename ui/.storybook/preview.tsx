import React from "react";
import { MuiThemeProvider, StylesProvider } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import { themes } from '@storybook/theming';
import theme from '../src/styles/theme';
import { withBackgroundImage } from "../src/components/BackgroundImageContainer";

// or global addParameters
export const parameters = {
  docs: {
    theme: themes.dark,
  },
};

export const globalTypes = {
  background: {
    name: 'Background',
    description: 'Change background image',
    defaultValue: 'https://dgqcbki4b05ac.cloudfront.net/photo-1457365050282-c53d772ef8b21473036141.jpg',
    toolbar: {
      icon: 'globe',
      items: [
        { value: null, right: '', title: 'None' },
        { value: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d', right: '🎈', title: 'Ballons' },
        { value: 'https://dgqcbki4b05ac.cloudfront.net/photo-1457365050282-c53d772ef8b21473036141.jpg', right: '🚀', title: 'Bottlerocket' },
        { value: 'https://dgqcbki4b05ac.cloudfront.net/jeremy-bishop-FlR9yw3QEgw-unsplash1607815578.jpg', right: '🏜', title: 'Desert' },
        { value: 'https://dgqcbki4b05ac.cloudfront.net/marek-piwnicki-S07d0_p_xag-unsplash1607815578.jpg', right: '✨', title: 'Starburst' },
        { value: 'https://dgqcbki4b05ac.cloudfront.net/malmanxx-i3TDlwBTVbU-unsplash1607816398.jpg', right: '🌳', title: 'Greenery' },
        { value: 'https://dgqcbki4b05ac.cloudfront.net/vashishtha-jogi-bClr95glx6k-unsplash1607816398.jpg', right: '🌌', title: 'Aurora' },
        { value: 'https://images.unsplash.com/photo-1572633424705-d813d2fb5cb4', right: '👍', title: 'Great' },
        { value: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d', right: '💡', title: 'Neon Hallway' },
        { value: 'https://dgqcbki4b05ac.cloudfront.net/6%20night1467203408.jpg', right: '🛤', title: 'Cinque Terre' },
      ],
    },
  },
};

const withThemeProvider=(Story,context)=>{
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Story {...context} />
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  )
};

const withBackground=(Story, context) => {
  return withBackgroundImage(<Story {...context} />, context.globals.background)
}

export const decorators = [
  withThemeProvider,
  withBackground
]
