import React from 'react';
import {Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation';

import MenuPage from './menupage';
import CardPage from './cardpage';
import ContactsPage from './contactspage';

export default class AppRoot extends React.Component {
	render() {
		return(
			<RoutingStack/>
		);
	}
}

const RoutingStack = StackNavigator({
	MenuPage : {
		screen: MenuPage
	},

	CardPage : {
		screen: CardPage
	},

	ContactsPage : {
		screen: ContactsPage
	},
});
