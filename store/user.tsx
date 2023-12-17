import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Store = {
  _hasHydrated: boolean;
  count: number;
  increaseCount: () => void;
  setHasHydrated: (hydrated: boolean) => void;
};

export const useUserStore = create<Store>()(
  persist(
    set => ({
      _hasHydrated: false,
      count: 1,
      increaseCount: () => set(state => ({ count: state.count + 1 })),
      setHasHydrated: state => {
        set({
          _hasHydrated: state,
        });
      },
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => state => {
        //NOTE: makeing delay to mimic the hydration
        state?.setHasHydrated(false);
        setTimeout(() => {
          state?.setHasHydrated(true);
        }, 1000 * 5);
      },
    },
  ),
);
