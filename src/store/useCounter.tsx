import { create } from 'zustand'

interface CounterState {
  count: number
  increase: () => void
}

export const useCounter = create<CounterState>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
}))
