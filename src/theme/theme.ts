import { createTheme } from '@rneui/themed';
import { darkColors } from './darkColors'
import { lightColors } from './lightColors'

export const theme = createTheme({
  darkColors,
  lightColors,
  mode: 'light',
});