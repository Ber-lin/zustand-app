import localforage from 'localforage'
import { create } from 'zustand'

interface Data{
    key:string;
    value:string;
}
export function useLocalForage(dbName:string,data:Data[]){
    
}