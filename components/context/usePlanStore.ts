import { create } from "zustand";

interface PlanState {
    plans: string[]
    setPlans: (plans: string[]) => void
}

export const usePlanStore = create<PlanState>()(
    (set) => ({
        plans: [],
        setPlans: (plans) => set((state) => ({ plans })),
        clearPlans: () => set((state) => ({ plans: []}))
    }),
)