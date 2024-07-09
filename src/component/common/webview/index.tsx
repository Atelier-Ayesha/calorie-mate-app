import React from 'react';
import {Platform, useWindowDimensions} from 'react-native';
import WebView from 'react-native-webview';
import {util} from '../../../util';
import {InjectedJavaScript} from '../../../util/message';
import {ShouldStartLoadRequest} from 'react-native-webview/lib/WebViewTypes';

interface Props {
  uri: string;
}

export default function CommonWebview(props: Props) {
  const {uri} = props;
  const os = Platform.OS;
  const {width, height} = useWindowDimensions();

  const injectedJavaScriptProps: InjectedJavaScript = {
    os,
    width,
    height,
  };

  const onShouldStartLoadWithRequest = (e: ShouldStartLoadRequest) => {
    const {url} = e;
    if (url.includes('http') || url.includes('https')) {
      return true;
    }
    return false;
  };

  return (
    <WebView
      originWhitelist={['*']}
      source={{uri}}
      onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}
      javaScriptEnabled
      domStorageEnabled
      allowsBackForwardNavigationGestures
      injectedJavaScript={util.message.getInjectedJavaScript(
        injectedJavaScriptProps,
      )}
    />
  );
}
