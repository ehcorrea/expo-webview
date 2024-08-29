import { Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <WebView
        style={{ flex: 1 }}
        injectedJavaScript=""
        source={{ uri: 'https://meu.inss.gov.br/#/login' }}
      />
    </View>
  );
}
