import { TasklistState } from './todo.reducer';

export interface AppState {
    tasklist: TasklistState,
    isLoading: boolean
}