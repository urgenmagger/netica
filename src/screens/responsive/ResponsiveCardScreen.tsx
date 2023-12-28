import React, { FC, useCallback, useState } from 'react';
import { Text, StyleSheet, View, TextInput, ScrollView } from 'react-native';
import { CardList } from './components/CardList';
import { WIDTH } from 'common/C';

export const ResponsiveCardScreen: FC = () => {
  const [containerWidth, setContainerWidth] = useState(200);
  const [inputText, setInputText] = useState(containerWidth.toString());

  const cardItems: number[] = [150, 150, 200, 200, 100, 100];

  const handleWidthChange = useCallback(
    (text: string) => {
      setInputText(text);
      const width = Number(text);
      setContainerWidth(isNaN(width) ? 0 : width);
    },
    [setContainerWidth, setInputText],
  );

  const componentStyle = styles();
  return (
    <ScrollView style={{ ...componentStyle.container }}>
      <View style={{ ...componentStyle.wrapperText }}>
        <Text style={{ ...componentStyle.text }}>{WIDTH}</Text>
        <TextInput
          onChangeText={handleWidthChange}
          value={inputText}
          inputMode="numeric"
          style={{ ...componentStyle.text }}
        />
      </View>
      <CardList width={containerWidth} data={cardItems} />
    </ScrollView>
  );
};

const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 100,
      paddingHorizontal: 20,
    },
    wrapperText: {
      marginBottom: 50,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 20,
      fontWeight: '600',
    },
  });
