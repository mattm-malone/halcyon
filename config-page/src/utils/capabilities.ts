import { WatchInfo, Capabilities } from '../context/types';

const CAPABILITY_MAP: Record<keyof Capabilities, string[]> = {
  APLITE: ['aplite'],
  BASALT: ['basalt'],
  CHALK: ['chalk'],
  DIORITE: ['diorite'],
  EMERY: ['emery'],
  FLINT: ['flint'],
  GABBRO: ['gabbro'],
  BW: ['aplite', 'diorite', 'flint'],
  COLOR: ['basalt', 'chalk', 'emery', 'gabbro'],
  ROUND: ['chalk', 'gabbro'],
  RECT: ['aplite', 'basalt', 'diorite', 'emery', 'flint'],
  DISPLAY_144x168: ['aplite', 'basalt', 'diorite', 'flint'],
  DISPLAY_180x180_ROUND: ['chalk'],
  DISPLAY_200x228: ['emery'],
  DISPLAY_260x260_ROUND: ['gabbro'],
  MICROPHONE: ['basalt', 'chalk', 'diorite', 'emery', 'flint', 'gabbro'],
  SMARTSTRAP: ['basalt', 'chalk', 'diorite'],
  SMARTSTRAP_POWER: ['basalt', 'chalk'],
  HEALTH: ['basalt', 'chalk', 'diorite', 'emery', 'flint', 'gabbro'],
  HRM: ['diorite', 'emery'],
};

export const evaluateCapabilities = (watchInfo: WatchInfo | null): Capabilities => {
  const capabilities = {} as Capabilities;

  if (!watchInfo) {
    Object.keys(CAPABILITY_MAP).forEach((key) => {
      capabilities[key as keyof Capabilities] = true;
    });
    return capabilities;
  }

  const { platform } = watchInfo;

  Object.entries(CAPABILITY_MAP).forEach(([key, platforms]) => {
    capabilities[key as keyof Capabilities] = platforms.includes(platform);
  });

  return capabilities;
};
