import * as TodoActions from './todo.actions';

import { Tasklist } from '../shared/models/tasklist';
import { Task } from '../shared/models/task';

export interface TaskState {
    task: Task[];
    isLoading: boolean;
}

export const initialStateTask: TaskState = {
    task: [{
        id: null,
        name: '',
        duedate: '',
        description: '',
        weight: null,
        state: null
    }],
    isLoading: false
}

export function TaskReducer(
    state = initialStateTask,
    action: TodoActions.TodoActions
): TaskState {
    switch (action.type) {
        case TodoActions.GET_TASK_BY_ID:
            var newState = Object.assign({ task: {}, isLoading: true });
            return newState;
        case TodoActions.RECEIVED_TASK:
            var newState = Object.assign({ task: action.payload, isLoading: false });
            return newState;
        case TodoActions.GET_TASKS_OF_LIST:
            var newState = Object.assign({ task: {}, isLoading: true });
            return newState;
        case TodoActions.RECEIVED_TASKS_OF_LIST:
            var newState = Object.assign({ task: action.payload, isLoading: false });
            return newState;
        default:
            return state;
    }
}

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
        case TodoActions.GET_LIST_BY_ID:
            var newState = Object.assign({ tasklist: [], isLoading: true })
            return newState;
        case TodoActions.RECEIVED_LIST_BY_ID:
            var newState = Object.assign({ tasklist: action.payload, isLoading: false });
            return newState;
        case TodoActions.GET_ALL_LISTS:
            var newState = Object.assign({ tasklist: [], isLoading: true });
            return newState;
        case TodoActions.RECEIVED_ALL_LISTS:
            var newState = Object.assign({ tasklist: action.payload, isLoading: false });
            return newState;
        default:
            return state;
    }
}