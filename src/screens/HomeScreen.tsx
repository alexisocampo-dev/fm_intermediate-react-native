import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MoodPicker } from '../components/MoodPicker';
import { MoodItemRow } from '../components/MoodItemRow';
import { useAppContext } from '../AppProvider';

export const Home: React.FC = () => {
  const appContext = useAppContext();
  return (
    <View style={styles.container}>
      <MoodPicker handleSelectMood={appContext.handleSelectMood} />
      {appContext.moodList.map(item => (
        <MoodItemRow item={item} key={item.timestamp} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
