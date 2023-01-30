/**
 * @format
 */

import { AppRegistry, Text, TextInput } from 'react-native';
import { name as appName } from './app.json';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from '@rneui/themed';
import { theme } from './src/theme';
import App from './src/App';
import Toast from 'react-native-toast-message';


const MyApp = () => (
  <ThemeProvider
    theme={theme}
  >
    <SafeAreaProvider>
      <App />
      <Toast />
    </SafeAreaProvider>
  </ThemeProvider>
)

Text.defaultProps = Text.defaultProps || {}

Text.defaultProps.allowFontScaling = false

TextInput.defaultProps = Text.defaultProps || {}

TextInput.defaultProps.allowFontScaling = false


AppRegistry.registerComponent(appName, () => MyApp);
