import React from 'react';
import { ImageBackground, Pressable, StyleSheet } from 'react-native';
import { MoodPicker } from '../components/MoodPicker';
import { MoodItemRow } from '../components/MoodItemRow';
import { useAppContext } from '../AppProvider';
import Reanimated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const ReanimatedPressable = Reanimated.createAnimatedComponent(Pressable);

const imageUrl =
  'https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1766&q=80';

export const Home: React.FC = () => {
  const appContext = useAppContext();
  const shared = useSharedValue(0);
  const style = useAnimatedStyle(
    () => ({
      transform: [{ translateY: shared.value }],
    }),
    [],
  );
  return (
    <ImageBackground style={styles.container} source={{ uri: imageUrl }}>
      {/* // <View style={styles.container}> */}
      {/* <Image source={{ uri: imageUrl }} style={{ flex: 1 }} /> */}
      {/* <View style={[StyleSheet.absoluteFill, { justifyContent: 'center' }]}> */}
      <MoodPicker handleSelectMood={appContext.handleSelectMood} />
      {appContext.moodList.map(item => (
        <MoodItemRow item={item} key={item.timestamp} />
      ))}
      <ReanimatedPressable
        style={[styles.square, style]}
        onPress={() =>
          (shared.value = withTiming(shared.value + 20, { duration: 1000 }))
        }
      />
      {/* </View> */}
      {/* </View> */}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'lightgreen',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
