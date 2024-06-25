import { StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";
// import { create } from "./my-zustand";

interface IPerson {
  name: string;
  age: number;
  increase: () => void;
}
interface Item {
  id: number;
  content: string;
  title: string;
}
interface IList {
  list: Item[];
  fetchData: (url: string) => Promise<void>;
}

const logMiddleware = (fun) => (set, get, store) => {
  const logSet = (...args) => {
    console.log(get(), store);
    return set(...args);
  };
  return fun(logSet, get, store);
};
export const usePersonStore = create<IPerson>(
  logMiddleware((set) => ({
    name: "xj",
    age: 18,
    increase: () => {
      set((state: IPerson) => ({ age: state.age + 1 }));
    },
  }))
);
// export const subPerson=usePersonStore.subscribe()

export const useFishStore = create<IList>((set) => ({
  list: [],
  fetchData: async (url: string) => {
    const response: { data: Item[] } = await axios.get(url);
    set((state: IList) => ({
      ...state,
      ...{ list: response.data },
    }));
  },
}));

export interface IFruits {
  fruits: string[];
  addFruits: (fruit: string) => void;
}
// persist the created state
const store: StateCreator<IFruits, [], [["zustand/persist", unknown]]> =
  persist(
    (set) => ({
      fruits: ["apple", "banana", "orange"],
      addFruits: (fruit: string) => {
        set((state: IFruits) => ({
          fruits: [...state.fruits, fruit],
        }));
      },
    }),
    { name: "basket" }
  );
// create the store
export const useFruitsStore = create<IFruits, [["zustand/persist", unknown]]>(
  store
);
interface IUser {
  id: string;
  name: string;
  email: string;
}
interface IUserStore {
  user: IUser;
  setUser: (user: IUser) => void;
}
const userStore: StateCreator<IUserStore, [], [["zustand/persist", unknown]]> =
  persist(
    (set) => ({
      user: {
        id: "1",
        name: "",
        email: "",
      },
      setUser: (userInfo: IUser) => {
        set((state: IUserStore) => ({
          user: {
            ...state.user,
            ...userInfo,
          },
        }));
      },
    }),
    { name: "user" }
  );

export const useUserStore = create<IUserStore, [["zustand/persist", unknown]]>(
  userStore
);
