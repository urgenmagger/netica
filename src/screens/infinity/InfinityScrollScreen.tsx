import React, { FC, useRef, useState } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

import { IMAGE_URLS } from 'common/C';
import { screenWidth } from 'utils/sizeScreen';

interface Props {}

export const InfinityScrollScreen: FC<Props> = () => {
  const [index, setCurrentIndex] = useState();
  const scrollX = useSharedValue(0);
  const scrollViewRef = useRef();
  const totalImages = IMAGE_URLS.length;

  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollX.value = event.contentOffset.x;
  });
  const handleScrollEnd = event => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / screenWidth);

    if (index === 0) {
      scrollViewRef.current?.scrollTo({
        x: screenWidth * totalImages,
        animated: false,
      });
      setCurrentIndex(totalImages);
    } else if (index === totalImages + 1) {
      scrollViewRef.current?.scrollTo({ x: screenWidth, animated: false });
      setCurrentIndex(1);
    } else {
      setCurrentIndex(index);
    }
  };
  const lastImage = IMAGE_URLS[IMAGE_URLS.length - 1];
  const firstImage = IMAGE_URLS[0];

  const adjustedImages = [lastImage, ...IMAGE_URLS, firstImage];
  const componentStyle = styles();
  return (
    <View style={{ ...componentStyle.container }}>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        decelerationRate="fast"
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        onScrollEndDrag={handleScrollEnd}
        showsHorizontalScrollIndicator={false}
      >
        {adjustedImages.map((item, index) => (
          <Animated.View
            key={index.toString()}
            style={{ ...componentStyle.imageContainer }}
          >
            <Image source={{ uri: item }} style={{ ...componentStyle.image }} />
            <Text style={{ ...componentStyle.imageNumber }}>{index + 1}</Text>
          </Animated.View>
        ))}
      </Animated.ScrollView>
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
    imageContainer: {
      marginTop: 50,
      alignItems: 'center',
      width: screenWidth,
    },
    image: {
      width: 200,
      height: 200,
    },
    imageNumber: {
      bottom: 0,
      color: 'gray',
      fontSize: 18,
    },
  });
