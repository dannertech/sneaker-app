import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import ResultsPage from '../Pages/Results';
import SearchPage from '../Pages/Search';

const bottomTabs = createBottomTabNavigator({
    Search: SearchPage,
    Results: ResultsPage,
})

const appContainer = createAppContainer(bottomTabs);

export default appContainer;