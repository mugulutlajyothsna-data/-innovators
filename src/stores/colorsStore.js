import { create } from 'zustand';
import getColors from '../utils/getColors';

export const useColorsStore = create((set) => ({
  theme: 'dark',
  colors: getColors('dark'),
  setTheme: (newTheme) => {
    const colors = getColors(newTheme) || getColors('dark');
    set({ theme: newTheme, colors });
  },
}));
