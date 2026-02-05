// app/utils/deviceStore.ts

export type DeviceCounts = {
  lights: number;
  fans: number;
  cameras: number;
};

let devices: DeviceCounts | null = null;

export const saveDevices = (data: DeviceCounts) => {
  devices = data;
};

export const getDevices = (): DeviceCounts => {
  return devices ?? { lights: 0, fans: 0, cameras: 0 };
};

export const clearDevices = () => {
  devices = null;
};
