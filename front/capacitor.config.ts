import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.front',
  appName: 'front',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
