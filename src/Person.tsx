import React from "react";
import {
  usePersonStore,
  useFishStore,
  useFruitsStore,
  useUserStore,
} from "./store/person";
import "./person.css";

export default function Person() {
  const { name, age, increase } = usePersonStore();
  const { list, fetchData } = useFishStore();
  const { fruits, addFruits } = useFruitsStore();
  const { setUser } = useUserStore();
  return (
    <>
      <div>
        <span>name:{name}</span>
        <span>age:{age}</span>
      </div>
      <button onClick={increase}>click</button>
      <div className="fruits">
        fruits:
        {fruits.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
        <button onClick={() => addFruits("pineapple")}>add pineapple</button>
        <button
          onClick={() =>
            setUser({
              id: "1",
              name: "伏翎",
              email: "111@gmail.com",
            })
          }
        >
          set User
        </button>
      </div>
      <div className="list">
        {list?.map((item) => (
          <p key={item.id}>{item.title}</p>
        ))}
      </div>
      <button onClick={() => fetchData("http://localhost:3001/getArticles")}>
        fetch
      </button>
    </>
  );
}
