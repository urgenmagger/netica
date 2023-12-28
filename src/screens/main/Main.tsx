import React, { FC } from 'react';
import { StyleSheet, View, Button } from 'react-native';

import { FORMS, INFINITY, RESPONSE } from 'common/C';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp, Screens } from 'navigation/types';

interface Props {}

export const Main: FC<Props> = () => {
  const navigation =
    useNavigation<RootStackNavigationProp<Screens.ResponsiveCardScreen>>();

  const handleGoResponsive = () => {
    navigation.navigate(Screens.ResponsiveCardScreen);
  };

  const handleGoInfinity = () => {
    navigation.navigate(Screens.InfinityScrollScreen);
  };

  const handleGoForm = () => {
    navigation.navigate(Screens.FormsScreen);
  };

  const componentStyle = styles();
  return (
    <View style={{ ...componentStyle.container }}>
      <Button title={RESPONSE} onPress={handleGoResponsive} />
      <Button title={INFINITY} onPress={handleGoInfinity} />
      <Button title={FORMS} onPress={handleGoForm} />
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
