import { StateCreator } from 'zustand';
import { Store } from '..';

export const TIMEZONE = [
  {
    label: '東京',
    value: 'Asia/Tokyo',
  },
  {
    label: 'ロンドン',
    value: 'Europe/London',
  },
  {
    label: 'ヤンゴン',
    value: 'Asia/Yangon',
  },

  {
    label: 'チャタム諸島',
    value: 'Pacific/Chatham',
  },
] as const;

export type Timezone = (typeof TIMEZONE)[number]['value'];

export type TimezoneSlice = {
  timezone: Timezone;
  changeTimezone: (timezone: string) => void;
};

const initialTimezone = 'Asia/Tokyo';

export const createTimezoneSlice: StateCreator<Store, [], [], TimezoneSlice> = (set) => ({
  timezone: initialTimezone,
  changeTimezone: (timezone: string) => set({ timezone: timezone as Timezone }),
});
