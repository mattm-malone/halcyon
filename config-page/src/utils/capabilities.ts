import { WatchInfo, Capabilities } from '../context/types';

interface CapabilityDefinition {
  platforms: string[];
  minFwMajor: number;
  minFwMinor: number;
}

const CAPABILITY_MAP: Record<keyof Capabilities, CapabilityDefinition> = {
  APLITE: { platforms: ['aplite'], minFwMajor: 0, minFwMinor: 0 },
  BASALT: { platforms: ['basalt'], minFwMajor: 0, minFwMinor: 0 },
  CHALK: { platforms: ['chalk'], minFwMajor: 0, minFwMinor: 0 },
  DIORITE: { platforms: ['diorite'], minFwMajor: 0, minFwMinor: 0 },
  EMERY: { platforms: ['emery'], minFwMajor: 0, minFwMinor: 0 },
  FLINT: { platforms: ['flint'], minFwMajor: 0, minFwMinor: 0 },
  BW: { platforms: ['aplite', 'diorite', 'flint'], minFwMajor: 0, minFwMinor: 0 },
  COLOR: { platforms: ['basalt', 'chalk', 'emery'], minFwMajor: 0, minFwMinor: 0 },
  ROUND: { platforms: ['chalk'], minFwMajor: 0, minFwMinor: 0 },
  RECT: { platforms: ['aplite', 'basalt', 'diorite', 'emery', 'flint'], minFwMajor: 0, minFwMinor: 0 },
  DISPLAY_144x168: { platforms: ['aplite', 'basalt', 'diorite', 'flint'], minFwMajor: 0, minFwMinor: 0 },
  DISPLAY_180x180_ROUND: { platforms: ['chalk'], minFwMajor: 0, minFwMinor: 0 },
  DISPLAY_200x228: { platforms: ['emery'], minFwMajor: 0, minFwMinor: 0 },
  MICROPHONE: { platforms: ['basalt', 'chalk', 'diorite', 'emery', 'flint'], minFwMajor: 0, minFwMinor: 0 },
  SMARTSTRAP: { platforms: ['basalt', 'chalk', 'diorite', 'emery'], minFwMajor: 3, minFwMinor: 4 },
  SMARTSTRAP_POWER: { platforms: ['basalt', 'chalk', 'emery'], minFwMajor: 3, minFwMinor: 4 },
  HEALTH: { platforms: ['basalt', 'chalk', 'diorite', 'emery', 'flint'], minFwMajor: 3, minFwMinor: 10 },
};

export function evaluateCapabilities(watchInfo: WatchInfo | null): Capabilities {
  const capabilities = {} as Capabilities;

  if (!watchInfo) {
    Object.keys(CAPABILITY_MAP).forEach((key) => {
      capabilities[key as keyof Capabilities] = true;
    });
    return capabilities;
  }

  const { platform, firmware } = watchInfo;

  Object.entries(CAPABILITY_MAP).forEach(([key, def]) => {
    const platformMatch = def.platforms.includes(platform);
    const fwMajorOk = firmware.major > def.minFwMajor;
    const fwMinorOk = firmware.major === def.minFwMajor
      ? firmware.minor >= def.minFwMinor
      : true;
    const fwOk = fwMajorOk || fwMinorOk;

    capabilities[key as keyof Capabilities] = platformMatch && fwOk;
  });

  return capabilities;
}
