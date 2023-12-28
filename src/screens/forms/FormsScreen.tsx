import React, { FC } from 'react';
import { Text, StyleSheet, View } from 'react-native';

interface Props {}

export const FormsScreen: FC<Props> = () => {
  const componentStyle = styles();
  return (
    <View style={{ ...componentStyle.container }}>
      <Text>FormsScreen</Text>
    </View>
  );
};

const styles = () =>
  StyleSheet.create({
    container: {},
  });
