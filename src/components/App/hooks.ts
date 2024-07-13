import { useState } from 'react';

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

export function useHooks() {
  const [timezone, setTimezone] = useState<Timezone>('Asia/Tokyo');

  function handleChangeTimezone(event: React.ChangeEvent<HTMLSelectElement>) {
    setTimezone(event.target.value as Timezone);
  }

  return {
    timezone,
    handleChangeTimezone,
  };
}
