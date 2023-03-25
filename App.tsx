/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import { useReducer } from 'react';

import * as Functions from './android/app/src/functions/Functions'

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Switch
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const styles = {
  standardNoteFont: 10,
  titleNoteFont: 20,
}

const defaultState = {
  id: 1,
  noteTitle: '[untitled note]',
  noteText: 'write your text here',
  isImportant: false,
  isEmpty: true,
  isBeingEdited: false
}

const noteList = [{
  id: 1,
  noteTitle: '[untitled note]',
  noteText: 'write your text here',
  isImportant: false,
  isEmpty: true,
  isBeingEdited: false
}]

function App(): JSX.Element {
  return (
    <ScrollView style={{
      backgroundColor: 'orange',
      height: 2340
    }}>
    </ScrollView>
  );
}

export default App;
