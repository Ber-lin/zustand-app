import { create } from "zustand";
import { combine } from "zustand/middleware";
import { produce } from "immer";

// const useBearStore=create()(set=>({
//     bear:0,
//     updateBear:(num:number)=>set((state)=>({bear:num}))
// }))
export const useBearStore = create(
  combine({ bears: 0 }, (set) => ({
    increase: (by: number) => set((state) => ({ bears: state.bears + by })),
  }))
);
interface Deep{
    obj:any;
    updateName:(name:string)=>void
}
export const useDeepBear = create<Deep>((set) => ({
  obj: {
    user: {
      name: "?",
    },
  },
  updateName: (name:string) =>
    set(produce((state) => { state.obj.user.name=name })),
}));
