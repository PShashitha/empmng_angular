import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

// RxJs observable and operator
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

// import employee.ts
import { Employee } from '../assets/employee'

@Injectable({
  providedIn: 'root'
})

export class ConfigService {

   // import config urls
   configUrl = 'assets/config.json';
  //  baseUrl
   baseUrl = "http://dummy.restapiexample.com/api/v1/"

   
  constructor(private http: HttpClient) {   }


  //  Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',

    })
  }

  // GET
  GetEmployees() : Observable<Employee>{
    return this.http.get<Employee>(this.baseUrl+"employees").pipe(
      retry(1),
      catchError(this.errorHandl)
      )
  }

  // GET
  GetEmployee(id) : Observable<Employee>{
    return this.http.get<Employee>(this.baseUrl+"employee/"+id).pipe(
      retry(1),
      catchError(this.errorHandl)
      )
  }

  // POST
  AddEmployee(data) : Observable<Employee>{
    return this.http.post<Employee>(this.baseUrl+"create", JSON.stringify(data), this.httpOptions).pipe(
      retry(1),
      catchError(this.errorHandl)
      )
  }

  // PUT
  UpdateEmployee(id,data) : Observable<Employee>{
    return this.http.put<Employee>(this.baseUrl+"update/"+id, JSON.stringify(data), this.httpOptions).pipe(
      retry(1),
      catchError(this.errorHandl)
      )
  }

  // DELETE ---- 
  DeleteEmployee(id) : Observable<Employee>{
    return this.http.delete<Employee>(this.baseUrl+"delete/"+id, this.httpOptions).pipe(
      retry(1),
      catchError(this.errorHandl)
      )
  }

  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }

}

