import React, { useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import get_markers from './components/fonctionals/GetMarkers';
import Home from './components/views/Home';
import CreateSpot from './components/views/CreateSpot';

const Tab = createBottomTabNavigator();

const App = () => {
  const [Markers, setMarkers] = useState([]);

  useEffect(() => {
    get_markers("markers", setMarkers);
  }, []);

  return (
    // <NavigationContainer>
    //   <Tab.Navigator initialRouteName="Home">
    //     <Tab.Screen name="Home">
    //       {props => <Home {...props} Markers={Markers} />}
    //     </Tab.Screen>
    //     <Tab.Screen name="CreateSpot">
    //       {props => <CreateSpot {...props} Markers={Markers} />}
    //     </Tab.Screen>
    //   </Tab.Navigator>
    // </NavigationContainer>
      <Home></Home>
  );
};

export default App;
