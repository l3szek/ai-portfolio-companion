import { Capacitor } from '@capacitor/core';

// When running in the iOS simulator, localhost refers to the simulator itself,
// not the host machine. Use the host machine's LAN IP instead.
// Update DEV_MACHINE_IP to match your machine: `ipconfig getifaddr en0`
const DEV_MACHINE_IP = '192.168.50.37';

export const API_BASE_URL = Capacitor.isNativePlatform()
  ? `http://${DEV_MACHINE_IP}:3000`
  : 'http://localhost:3000';
