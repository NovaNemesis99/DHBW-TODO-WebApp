import { TaskState, TasklistState } from './todo.reducer';

export interface AppState {
    task: TaskState,
    tasklist: TasklistState,
    isLoading: boolean
}