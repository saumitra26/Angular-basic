import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DepartMentState } from "./reducer";

export const selectDepartMentState =createFeatureSelector<DepartMentState>('department')
export const selectDeparments =createSelector(
    selectDepartMentState,
    state=>state.departments
);
export const selectLoad =createSelector(
    selectDepartMentState,
    state=>state.loading
);
export const selectDepartmentError = createSelector(
  selectDepartMentState,
  (state) => state.error
);