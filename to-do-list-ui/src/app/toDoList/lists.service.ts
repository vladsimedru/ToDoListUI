import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IToDoList } from './toDoList';
import {catchError, tap } from 'rxjs/operators';
import { ITask } from '../task/task';

@Injectable({
    providedIn:'root'
}
)
export class ListsService {
private url='http://localhost:8080/to-do-lists'

constructor(private http:HttpClient) { }

getToDoLists(): Observable<IToDoList[]>{
    return this.http.get<IToDoList[]>(this.url).pipe(
        tap(data=>console.log("All", JSON.stringify(data))),
        catchError(this.handleError)
    )
}

getToDoListByToDoListId(toDoListId:number): Observable<IToDoList>{
    return this.http.get<IToDoList>(this.url+`/${toDoListId}`).pipe(
        tap(data=>console.log("All", JSON.stringify(data))),
        catchError(this.handleError)
    )
}

addToDoListTask(toDoListId:number,description:string):Observable<number>{
    return this.http.post<any>(this.url+`/${toDoListId}/task`,{description}).pipe(
        tap(data=>console.log("All", JSON.stringify(data))),
        catchError(this.handleError)
    )
}

addToDoList(name:string):Observable<number>{
    return this.http.post<any>(this.url,{name}).pipe(
        tap(data=>console.log("All", JSON.stringify(data))),
        catchError(this.handleError)
    )
}

private handleError(err: HttpErrorResponse){
    let errorMessage = '';
    if (err.error instanceof ErrorEvent){
        errorMessage = `An error occured: ${err.error.message}`
    }else{
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`
    }

    console.error(errorMessage);
    return throwError(errorMessage);
}
}
