import React, { FC } from 'react';
import { Text, StyleSheet, View } from 'react-native';

interface Props {}

export const InfinityScrollScreen: FC<Props> = () => {
  const componentStyle = styles();
  return (
    <View style={{ ...componentStyle.container }}>
      <Text>InfinityScrollScreen</Text>
    </View>
  );
};

const styles = () =>
  StyleSheet.create({
    container: {},
  });
