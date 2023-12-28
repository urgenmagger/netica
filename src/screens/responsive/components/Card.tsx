import React, { FC } from 'react';
import { Text, StyleSheet, View } from 'react-native';

interface Props {
  height: number;
}

export const Card: FC<Props> = ({ height }) => {
  const componentStyle = styles(height);
  return (
    <View style={{ ...componentStyle.container }}>
      <Text>{height}</Text>
    </View>
  );
};

const styles = (height: number) =>
  StyleSheet.create({
    container: {
      margin: 5,
      padding: 12,
      minHeight: height,
      flexGrow: 1,
      alignItems: 'center',
      backgroundColor: 'orange',
      justifyContent: 'center',
    },
  });
