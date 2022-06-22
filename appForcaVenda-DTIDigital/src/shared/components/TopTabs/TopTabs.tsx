import React from 'react';

import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import theme from 'shared/constants/theme';

const { palette } = theme;

const Tab = createMaterialTopTabNavigator();

interface ITabProps {
  tabName: string;
  tabLabel?: string;
  component: React.ReactNode | JSX.Element;
}

interface ITopTabsProps extends Partial<MaterialTopTabBarProps> {
  tabs: Array<ITabProps>;
}

const TopTabs = ({ tabs, ...otherProps }: ITopTabsProps) => (
  <Tab.Navigator
    backBehavior="initialRoute"
    tabBarOptions={{
      activeTintColor: palette.blue300,
      inactiveTintColor: palette.gray300,
      tabStyle: styles.tabStyle,
      indicatorStyle: styles.indicatorStyle,
      labelStyle: styles.labelStyle as any,
    }}
    {...(otherProps as any)}
  >
    {tabs.map((tab) => (
      <Tab.Screen
        key={tab.tabName}
        name={tab.tabName}
        component={tab.component as React.ComponentType<any>}
        options={{ tabBarLabel: tab.tabLabel || tab.tabName }}
      />
    ))}
  </Tab.Navigator>
);

const styles = {
  tabStyle: { paddingVertical: 16 },
  indicatorStyle: {
    height: 5,
    backgroundColor: palette.blue300,
  },
  labelStyle: {
    fontFamily: 'Rubik',
    fontSize: 14,
    lineHeight: 17,
    textTransform: 'none',
  },
};

export default TopTabs;
