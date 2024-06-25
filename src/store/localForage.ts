import localforage from 'localforage'
import { useEffect } from 'react';
import { create } from 'zustand'

interface Data{
    key:string;
    value:string;
}
export function useLocalForage(dbName:string,data:Data[]){
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
      }, []);
}