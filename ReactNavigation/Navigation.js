import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Splash from '../Pages/Splash';
import ResultsPage from '../Pages/Results';
import SearchPage from '../Pages/Search';

const bottomTabs = createBottomTabNavigator({
    Home: Splash,
    Search: SearchPage,
    Results: ResultsPage,
})

const appContainer = createAppContainer(bottomTabs);

export default appContainer;