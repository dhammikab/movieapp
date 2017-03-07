import React from 'react'; // eslint-disable-line
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';
import configureStore from './store/configureStore';

const store = configureStore();

registerScreens(store, Provider);

const navigatorStyle = {
	statusBarColor: 'black',
	statusBarTextColorScheme: 'light',
	navigationBarColor: 'black',
	navBarBackgroundColor: '#0a0a0a',
	navBarTextColor: 'white',
	navBarButtonColor: 'white',
	tabBarButtonColor: 'red',
	tabBarSelectedButtonColor: 'red',
	tabBarBackgroundColor: 'white'
};
/*
Navigation.startSingleScreenApp({
	screen: {
		screen: 'movieapp.Movies',
		title: 'Movies',
		navigatorStyle
	},
	drawer: {
		left: {
			screen: 'movieapp.Drawer'
		}
	}
});
*/
const createTabs = () => {
  let tabs = [
    {
      label: 'Movies',
      screen: 'movieapp.Movies',
			icon: require('./img/coupon.png'),
      title: 'Movies'
    },
    {
			label: 'TV Shows',
			screen: 'movieapp.Movies',
			icon: require('./img/collect.png'),
			title: 'TV Shows',

    }
  ];


  return tabs;
};
// this will start our app
Navigation.startTabBasedApp({
  tabs: createTabs(),
  appStyle: {
    tabBarBackgroundColor: '#0f2362',
    tabBarButtonColor: '#ffffff',
    tabBarSelectedButtonColor: '#63d7cc'
  }

});
