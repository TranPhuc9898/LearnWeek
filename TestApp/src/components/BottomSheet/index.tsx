import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';
import BottomSheet from '@devvie/bottom-sheet';

interface IBottomSheetScreen {
  titleName?: any;
  text?: string;
}

{
  /* sẽ còn viết tiế ... pendding ... */
}
const BottomSheetScreen: React.FC<IBottomSheetScreen> = ({titleName, text}) => {
  const onPressBottom = () => {
    // eslint-disable-next-line react-native/no-inline-styles
    sheetRef?.current.open();
  };
  const sheetRef = useRef(null);
  return (
    <>
      <Button
        title={titleName}
        onPress={() => {
          onPressBottom();
        }}
      />
      <BottomSheet ref={sheetRef} animationType="spring">
        <ScrollView>
          <View style={{flex: 1}}>
            <Text>{'dhashdja'}</Text>
          </View>
        </ScrollView>
      </BottomSheet>
    </>
  );
};

export default BottomSheetScreen;

const styles = StyleSheet.create({});
