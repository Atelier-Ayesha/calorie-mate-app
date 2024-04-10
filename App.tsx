import React from 'react';
import {Dimensions, SafeAreaView, StyleSheet} from 'react-native';
import WebView from 'react-native-webview';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        whiteList={['*']}
        style={styles.webview}
        source={{uri: 'http://localhost:3000'}}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  webview: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
  },
});
