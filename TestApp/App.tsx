import {View, Text, Button} from 'react-native';
import React, {useRef} from 'react';
import BottomSheet, {BottomSheetMethods} from '@devvie/bottom-sheet';
import BottomSheetScreen from './src/components/BottomSheet';

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <BottomSheetScreen
        titleName={'Hello Bà Con'}
        text="Cho 1 ngàn ví dụ về cuộc đời"
      />
    </View>
  );
};

export default App;
