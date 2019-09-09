import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//Screens imports
import MainScreen from './Screens/MainScreen';
import ShowScreen from './Screens/ShowScreen';

const AppNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Show: ShowScreen,
  },
  {
    initialRouteName: 'Main',
  },
);

export default createAppContainer(AppNavigator);
