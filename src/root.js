import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Grommet } from 'grommet';
import Theme from './assets/theme.json';
import ThetaRouter from './router';
import Avatar from '@atlaskit/avatar';
import HelpIcon from '@atlaskit/icon/glyph/question-circle';
import {
  GlobalItem,
  GlobalNav,
  NavigationProvider,
  LayoutManager,
  LayoutManagerWithViewController,
  GlobalNavigationSkeleton,
  ThemeProvider,
  modeGenerator,
} from '@atlaskit/navigation-next';
import { colors, gridSize as gridSizeFn } from '@atlaskit/theme';
import {
  DropdownItem,
  DropdownItemGroup,
  DropdownMenuStateless,
} from '@atlaskit/dropdown-menu';

const thetaThemeMode = modeGenerator({
  product: {
    text: colors.N0,
    background: "#c70039",
  },
});

const GlobalNavWithDropdowns = () => (
  <GlobalNav
    // itemComponent={}
    primaryItems={[]}
    secondaryItems={[
      {
        dropdownItems: () => null,
        icon: HelpIcon,
        id: 'help',
        onClick: () => null,
        tooltip: 'Help',
      },
      {
        component: ({ className, onClick }) => (
          <span className={className}>
            <Avatar
              borderColor="transparent"
              isActive={false}
              isHover={false}
              size="small"
              onClick={onClick}
            />
          </span>
        ),
        dropdownItems: () => null,
        icon: null,
        id: 'profile',
        onClick: () => null,
        tooltip: 'Profile',
      },
    ]}
  />
);


const Root = ({ store }) => (
  <Provider store={store}>
  <NavigationProvider>
  <ThemeProvider theme={theme => ({ ...theme, mode: thetaThemeMode })}>
      <LayoutManagerWithViewController
        globalNavigation={GlobalNavWithDropdowns}
        // productNavigation={() => <div style={{backgroundColor: ''}}></div>}
        // containerNavigation={() => null}
      >
            <Grommet full={true} theme={Theme}>
      <ThetaRouter />
    </Grommet>
      </LayoutManagerWithViewController>
    </ThemeProvider>
  </NavigationProvider>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root