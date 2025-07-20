import { createAction, props } from "@ngrx/store";
import { Department } from "./model";

export const loadDepartment=createAction('[department] Load Department')
export const loadDepartmentSuccess= createAction('[department] Load Department Success',
    props<{department:Department[]}>()
)
export const loadDepartmentFailure= createAction('[department] Load Department failure',
    props<{error:any}>()
)