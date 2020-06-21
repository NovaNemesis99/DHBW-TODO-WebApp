import * as TodoActions from './todo.actions';

//sample
import { Tasklist } from '../shared/models/tasklist';

//import models

export interface TasklistState {
    tasklist: Tasklist[];
    isLoading: boolean;
};

export const initialTasklistState: TasklistState = {
    tasklist: [],
    isLoading: false
};

export function TasklistReducer(
    state = initialTasklistState,
    action: TodoActions.TodoActions
): TasklistState {
    switch (action.type) {
        case TodoActions.SAMPLE_ACTION:
            var newState = Object.assign({ Tasklist: [], isLoading: true })
            return newState;

        default:
            return state;
    }
}