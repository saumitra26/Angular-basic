import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./counter.action";

export const initialValue=0;
export const counterReducer=createReducer(
    initialValue,
 on(increment,(state)=>state + 1), 
 on(decrement,(state)=>state - 1),
 on(reset,()=>0),
)
