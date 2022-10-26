import React from 'react';

import { Provider } from 'react-redux';
import { setupStore } from './src/store/store';
import HomeScreen from './src/screens/HomeScreen';

const store = setupStore();

const App = () => {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
};

export default App;
