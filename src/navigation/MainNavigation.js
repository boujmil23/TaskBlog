import { StackNavigator } from 'react-navigation';

import Task from '../component/Task';

export const MainNavigation = StackNavigator({
  SearchInput: { screen: Task },
},
{
headerMode: 'none',
});
