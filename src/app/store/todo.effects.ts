import { Injectable } from '@angular/core';

import { Actions, ofType, Effect } from '@ngrx/effects';
import * as TodoActions from './todo.actions';

import { map, mergeMap, switchMap } from 'rxjs/operators';

import { TodoService } from '../shared/services/todo.service';

@Injectable()
export class TaskEffects {
    @Effect() GetTaskById = this.actions$.pipe(
        ofType(TodoActions.GET_TASK_BY_ID),
        map(action => <TodoActions.GetTaskById>action),
        switchMap(action => {
            return this.TodoService.getTaskById(action.payload);
        }), mergeMap(result => {
            return [
                new TodoActions.ReceivedTask(result)
            ];
        })
    );

    @Effect() GetTasksOfList = this.actions$.pipe(
        ofType(TodoActions.GET_TASKS_OF_LIST),
        map(action => <TodoActions.GetTasksOfList>action),
        switchMap(action => {
            return this.TodoService.getTasksOfList(action.payload);
        }), mergeMap(result => {
            return [
                new TodoActions.ReceivedTasksOfList(result)
            ];
        })
    );

    @Effect() AddOrUpdateTask = this.actions$.pipe(
        ofType(TodoActions.ADD_OR_UPDATE_TASK),
        map(action => <TodoActions.AddOrUpdateTask>action),
        switchMap(action => {
            return this.TodoService.addOrUpdateTask(action.payload);
        }), mergeMap(result => {
            return [
                new TodoActions.ChangedTask,
                new TodoActions.GetAllLists
            ]
        })
    );

    constructor(
        private actions$: Actions,
        private TodoService: TodoService
    ) {}
}

@Injectable()
export class TasklistEffects {
    @Effect() GetListById$ = this.actions$.pipe(
        ofType(TodoActions.GET_LIST_BY_ID),
        map(action => <TodoActions.GetListById>action),
        switchMap(action => {
            return this.TodoService.getListById(action.payload);
        }), mergeMap(result => {
            return [
                new TodoActions.ReceivedListById(result)
            ];
        })
    );

    @Effect() GetAllLists$ = this.actions$.pipe(
        ofType(TodoActions.GET_ALL_LISTS),
        map(action => <TodoActions.GetAllLists>action),
        switchMap(action => {
            return this.TodoService.getAllLists();
        }), mergeMap(result => {
            return [
                new TodoActions.ReceivedAllLists(result)
            ];
        })
    )

    @Effect() AddOrUpdateList$ = this.actions$.pipe(
        ofType(TodoActions.ADD_OR_UPDATE_LIST),
        map(action => <TodoActions.AddOrUpdateList>action),
        switchMap(action => {
            return this.TodoService.addOrUpdateList(action.payload);
        }), mergeMap(result => {
            return [
                new TodoActions.ChangedList,
                new TodoActions.GetAllLists
            ]
        })
    )

    constructor(
        private actions$: Actions,
        private TodoService: TodoService
    ) {}
}