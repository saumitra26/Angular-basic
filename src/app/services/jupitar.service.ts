import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JupitarService {
  testSubject$: Subject<string> = new Subject<string>
  private apiUrl = 'https://services.err.ee/api/v2/category/getByUrl?url=video&domain=jupiter.err.ee';
  private testUrl ='https://v2.jokeapi.dev/joke/Programming?types=single'
  constructor(private http:HttpClient) { }
  getMediaCategory():Observable<any>{
    return this.http.get<any>(this.apiUrl)
  }
  getRandomJoke():Observable<any>{
    return this.http.get<any>(this.testUrl).pipe(
      map(res=>res.joke),
      catchError(error=>{
        return throwError(()=> new error('Something went wrong'))
      })
    )
  }
}
