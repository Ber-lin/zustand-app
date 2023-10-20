import "./App.css";
import { usePersonStore } from "./store/person";
import Person from "./Person";
import Demo from "./Demo";
import { useBearStore, useDeepBear } from "./store/bear";
import { useEffect, useRef, useState } from "react";
import Transform from "./Transform";
import TailWind from "./pages/TailWind";
import localforage from "localforage";
import ViewTransition from "./pages/viewTransition";

function App() {
  const { name, age, increase } = usePersonStore();
  const { obj, updateName } = useDeepBear();
  const ref=useRef<HTMLDivElement>(null)
  useEffect(() => {
    // const table1 = localforage.createInstance({
    //   name: "blog",
    //   storeName: "users",
    // });
    // const table2 = localforage.createInstance({
    //   name: "blog",
    //   storeName: "articles",
    // });
    // table1.ready().then(() => {
    //   console.log(localforage.driver());
    // });

    // table1.setItem("key1", { a: 1, b: 2 });
    // table2.setItem("key1", JSON.stringify({ a: 1, b: 2 }));
    // console.log(localforage.supports(localforage.INDEXEDDB));

    // myIndexedDB.iterate((value,key,iteraterNum)=>{
    //   console.log([key,value],iteraterNum);
    // }).then(res=>{
    //   console.log(res);
    // })
    // myIndexedDB.key(0).then(name=>{console.log(name);})
    // myIndexedDB.keys().then(keys=>{console.log(keys);})
    // localforage.dropInstance({
    //   storeName:'keyvaluepairs',
    //   // driver:localforage.INDEXEDDB,
    //   name:'myIndexedDB',
    //   // size:4980736,
    //   // description:'这是测试db'
    // })

  });
  useEffect(()=>{
    const handleScroll=()=>{
      if (ref.current) {
      const { scrollTop, scrollHeight, clientHeight } = ref.current;
      if (scrollTop + clientHeight === scrollHeight) {
        console.log('Scroll to end');
      }
    }
    }
    ref.current?.addEventListener('scroll',handleScroll)
    return () => {
      if (ref.current) {
        ref.current.removeEventListener('scroll', handleScroll);
      }
    };
  },[])
  return (
    <>
      {/* <Transform /> */}
      {/* <TailWind /> */}
      {/* {useProgress()} */}

      {/* <div style={{width:'200px',border:"1px solid",height:'300px',overflow:"scroll"}} ref={ref}>
        <div style={{width:'200px',height:'800px',backgroundImage: 'linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)'}}></div>
      </div>
      <div>
        name:{name}
        age:{age}
      </div>
      <button onClick={increase}>click</button>
      <div>
        bear:{obj.user.name}
        <button onClick={() => updateName("山角⛰")}>click</button>
      </div>
      <Person />
      <Demo /> */}
      <ViewTransition/>
    </>
  );
}

export default App;
