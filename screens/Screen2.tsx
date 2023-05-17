import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {useNavigation} from '@react-navigation/native';

type Props = {};
export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Screen2'
>;

const Screen2 = (props: Props) => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView className="flex flex-row justify-center md:flex-col">
      <Text
        className="text-customcolor"
        onPress={() => navigation.navigate('Home')}>
        Back to Home page
      </Text>
    </SafeAreaView>
  );
};

export default Screen2;
