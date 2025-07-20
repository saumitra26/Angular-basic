import { inject, Injectable } from "@angular/core";
import { Actions, createEffect,ofType } from "@ngrx/effects";
import { JupitarService } from "../services/jupitar.service";
import { loadDepartment, loadDepartmentFailure, loadDepartmentSuccess } from "./action";
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable()
export class DepartmentEffects{
    private actions$ = inject(Actions);
   
    constructor( private jupiterService: JupitarService) {
        
    }
    loadDepartment$=createEffect(()=>
        this.actions$.pipe(
            ofType(loadDepartment),
            mergeMap(()=>
                this.jupiterService.getDepartment().pipe(
                    map((departments:any)=>
                        loadDepartmentSuccess({department:departments})

                    ),
                    catchError(error=>
                        of(loadDepartmentFailure({error}))
                    )
                )
            
            )
        )
    )

}