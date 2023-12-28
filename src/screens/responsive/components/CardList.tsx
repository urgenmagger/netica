import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card } from './Card';

interface Props {
  data: number[];
  width: number;
}

export const CardList: FC<Props> = ({ data, width }) => {
  const componentStyle = styles(width);
  return (
    <View style={{ ...componentStyle.container }}>
      {data.map((item, index) => (
        <Card height={item} key={index} />
      ))}
    </View>
  );
};

const styles = (width: number) =>
  StyleSheet.create({
    container: {
      margin: 6,
      width: width,
      flexWrap: 'wrap',
      flexDirection: 'row',
      backgroundColor: 'gray',
    },
  });
