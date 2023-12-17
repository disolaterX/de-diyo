import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Store = {
  count: number;
  increaseCount: () => void;
};

export const useUserStore = create<Store>()(
  persist(
    set => ({
      count: 1,
      increaseCount: () => set(state => ({ count: state.count + 1 })),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
