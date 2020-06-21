import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

//sample model
import { Tasklist } from '../models/tasklist';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
    constructor(private http: HttpClient, private router: Router) { }

    sampleFunction() {
      return this.http.get<Tasklist>('http://localhost:8080').pipe(catchError(this.handleError.bind(this)));
    }

    handleError(error: HttpErrorResponse) {
      if(error.error instanceof ErrorEvent) {
        window.alert('something went wrong');
      }
      else {
        if(error.status == 404) {
          window.alert();
        }
      }
    }
}
