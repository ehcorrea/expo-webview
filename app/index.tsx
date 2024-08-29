import { useRef } from 'react';
import { Platform, View } from 'react-native';
import WebWebView from 'react-native-web-webview';
import { WebView as MobileWebView } from 'react-native-webview';

export default function Index() {
  const WebView = Platform.OS === 'web' ? WebWebView : MobileWebView;
  const webviewref = useRef<MobileWebView>(null);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <WebView
        setSupportMultipleWindows={false}
        ref={webviewref}
        javaScriptEnabled
        startInLoadingState={false}
        style={{ flex: 1 }}
        injectedJavaScript={`function(){window.postMessage('plataforma: ${Platform.OS}')}()`}
        source={{
          uri: 'https://www.gov.br/pt-br/temas/meu-inss',
        }}
        onMessage={({ nativeEvent }) => {
          console.log(nativeEvent.data);
        }}
      />
    </View>
  );
}
