import { createReducer, on } from "@ngrx/store";
import { Department } from "./model";
import { loadDepartment, loadDepartmentFailure, loadDepartmentSuccess } from "./action";


export interface DepartMentState{
    departments:Department[],
    loading:boolean;
    error?: any;
}
export const initialState:DepartMentState = {
    departments:[],
    loading:false
}
export const departmentReducer= createReducer(
    initialState,
    on(loadDepartment,(state)=>({
        ...state,
        loading:true
    }) ),
    on(loadDepartmentSuccess,(state,{department})=>({
        ...state,
        departments:department,
        loading:false

    })),
    on(loadDepartmentFailure,(state,{error})=>({
        ...state,
        loading:false,
        error: error, 

    }))
    
)