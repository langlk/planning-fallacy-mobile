import React from 'react';

import vars from './vars.js';

const navStyles = {
  tabNav: {
    indicator: {
      backgroundColor: vars.appAccentColor
    },
    styles: {
      paddingTop: vars.responsivePaddingTop,
      backgroundColor: vars.appPrimaryColor
    }
  },
  drawerNav: {
    activeItemColor: 'white',
    activeItemBackground: vars.appAccentColor
  },
  drawerHeader: {
    paddingHorizontal: 15,
    paddingVertical: vars.padding
  },
  drawerH1: {
    fontSize: 18,
    paddingTop: vars.responsivePaddingTop + 2
  },
  drawerH3: {
    fontSize: 14,
    marginTop: 14
  },
  drawerLate: {
    color: vars.appLateColor
  },
  drawerEarly: {
    color: vars.appEarlyColor
  }
};

export default navStyles;
