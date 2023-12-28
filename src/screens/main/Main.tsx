import React, { FC } from 'react';
import { StyleSheet, View, Button } from 'react-native';

import { GO_TO_RESPONSE } from 'common/C';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp, Screens } from 'navigation/types';

interface Props {}

export const Main: FC<Props> = () => {
  const navigation =
    useNavigation<RootStackNavigationProp<Screens.ResponsiveCardScreen>>();

  const handleGoResponsive = () => {
    navigation.navigate(Screens.ResponsiveCardScreen);
  };

  const componentStyle = styles();
  return (
    <View style={{ ...componentStyle.container }}>
      <Button title={GO_TO_RESPONSE} onPress={handleGoResponsive} />
      <Button title={GO_TO_RESPONSE} onPress={() => console.log('click')} />
      <Button title={GO_TO_RESPONSE} onPress={() => console.log('click')} />
    </View>
  );
};

const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
