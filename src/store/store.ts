import create from "zustand";

import { devtools } from "zustand/middleware";

interface ISample {
  count: number;
  incCount: () => void;
  decCount: () => void;
}

interface IOther {
  multiplier: number;
  twice: () => void;
  divide: () => void;
}

interface IStore extends ISample, IOther {}

const sampleStore = (set: any) => ({
  count: 0,
  incCount: () => set((state: ISample) => ({ count: state.count + 1 })),
  decCount: () => set((state: ISample) => ({ count: state.count - 1 })),
});

const otherStore = (set: any) => ({
  multiplier: 1,
  twice: () => set((state: IOther) => ({ multiplier: state.multiplier * 2 })),
  divide: () => set((state: IOther) => ({ multiplier: state.multiplier / 2 })),
});

const storeCombiner = (set: any, get: any) => ({
  ...sampleStore(set),
  ...otherStore(set),
});

export const useStore = create<IStore, [["zustand/devtools", IStore]]>(
  devtools(storeCombiner)
);
