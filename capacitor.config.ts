import type { CapacitorConfig } from '@capacitor/cli';
import { KeyboardResize, KeyboardStyle } from '@capacitor/keyboard';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'cuet-corner',
  webDir: 'www',
  plugins: {
    Keyboard: {
      resize: KeyboardResize.None,
    },
  },
};

export default config;
