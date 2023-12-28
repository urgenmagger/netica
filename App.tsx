import React from 'react';
import { AppNavigation } from './src/navigation/AppNavigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default (): React.JSX.Element => {
  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AppNavigation />
      </GestureHandlerRootView>
    </>
  );
};
