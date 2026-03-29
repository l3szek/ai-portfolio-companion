import { Capacitor } from '@capacitor/core';
import { environment } from '../../../environments/environment';

// When running in the iOS simulator, localhost refers to the simulator itself.
// The prebuild script (scripts/set-dev-ip.mjs) detects the host machine's
// current LAN IP and writes it into src/environments/environment.ts automatically.
export const API_BASE_URL = Capacitor.isNativePlatform()
  ? `http://${environment.devMachineIp}:3000`
  : 'http://localhost:3000';
