import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { Tasklist } from '../models/tasklist';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
    constructor(private http: HttpClient) { }

    getTaskById(id) {
      return this.http.get<Task[]>('http://localhost/dhbw-dbek-todo-core-dev/public/index.php/getTask/' + id).pipe(catchError(this.handleError.bind(this)));
    }

    getTasksOfList(id) {
      return this.http.get<Task[]>('http://localhost/dhbw-dbek-todo-core-dev/public/index.php/getTasksOfList/' + id).pipe(catchError(this.handleError.bind(this)));
    }

    addOrUpdateTask(task) {
      return this.http.post('http://localhost/dhbw-dbek-todo-core-dev/public/index.php/addOrUpdateTask', task).pipe(catchError(this.handleError.bind(this)));
    }

    deleteTask(id) {
      return this.http.delete('http://localhost/dhbw-dbek-todo-core-dev/public/index.php/deleteTask/' + id).pipe(catchError(this.handleError.bind(this)));
    }

    getListById(id) {
      return this.http.get<Tasklist[]>('http://localhost/dhbw-dbek-todo-core-dev/public/index.php/getList/' + id).pipe(catchError(this.handleError.bind(this)));
    }

    getAllLists() {
      return this.http.get<Tasklist[]>('http://localhost/dhbw-dbek-todo-core-dev/public/index.php/getAllLists').pipe(catchError(this.handleError.bind(this)));
    }

    addOrUpdateList(list) {
      return this.http.post('http://localhost/dhbw-dbek-todo-core-dev/public/index.php/addOrUpdateList', list).pipe(catchError(this.handleError.bind(this)));
    }

    deleteList(id) {
      return this.http.delete('http://localhost/dhbw-dbek-todo-core-dev/public/index.php/deleteList/' + id).pipe(catchError(this.handleError.bind(this)));
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
