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
interface Deep {
  obj: any;
  addUser: (name: string) => void;
  updateName: (name: string) => void;
}
export const useDeepBear = create<Deep>((set) => ({
  obj: {
    user: {
      name: "?",
    },
  },
  addUser: (name: string) =>
    set(
      produce((state) => {
        state.obj.user2 = { name };
      })
    ),
  updateName: (name: string) =>
    set(
      produce((state) => {
        state.obj.user.name = name;
      })
    ),
}));
interface Params {
  params: any;
  updateParams: (property: string, subProperty: string, value: string) => void;
  updateParam: (property: string, value: string) => void;
}
export const useParams = create<Params>((set) => ({
  params: {
    filter: {
    },
  },
  // 设置filter: a() b() c();这样的复合属性
  updateParams: (property: string, subProperty: string, value: string) =>
    set(
      produce((state: Params) => {
        state.params[property][subProperty] = value;
      })
    ),
    // 设置margin:10px；这样的简单属性
  updateParam: (property: string, value: string) =>
    set(
      produce((state: Params) => {
        state.params[property] = value;
      })
    ),
}));
