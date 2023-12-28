import React, { FC, useRef } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import { getImageUrls } from 'utils/gitImage';

interface Props {}

export const InfinityScrollScreen: FC<Props> = () => {
  const imageUrls: string[] = getImageUrls(6);
  const scrollX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollX.value = event.contentOffset.x;
  });

  const componentStyle = styles();
  return (
    <View style={{ ...componentStyle.container }}>
      {/* <Animated.ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      > */}
      {imageUrls.map((item, index) => {
        return (
          <Image
            key={index.toString()}
            source={{ uri: item }}
            style={{ width: 200, height: 200 }}
          />
        );
      })}
      {/* </Animated.ScrollView> */}
    </View>
  );
};

const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
    },
  });
