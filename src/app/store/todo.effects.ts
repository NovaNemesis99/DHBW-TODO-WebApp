import { Injectable } from '@angular/core';

import { Actions, ofType, Effect } from '@ngrx/effects';
import * as TodoActions from './todo.actions';

import { map, mergeMap, switchMap } from 'rxjs/operators';

import { TodoService } from '../shared/services/todo.service';

@Injectable()

export class TasklistEffects {
    //sample effect
    @Effect() SampleEffect$ = this.actions$.pipe(
        ofType(TodoActions.SAMPLE_ACTION),
        map(action => <TodoActions.SampleAction>action),
        switchMap(action => {
            return this.TodoService.sampleFunction();
        }), mergeMap(result => {
            return [
                new TodoActions.SampleAction(result)
            ];
        })
    )

    constructor(
        private actions$: Actions,
        private TodoService: TodoService
    ) {}
}