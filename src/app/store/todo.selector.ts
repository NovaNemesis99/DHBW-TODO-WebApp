import { createSelector } from '@ngrx/store';
import { AppState }  from '../store/app.state';

export const selectTaskState = (state: AppState) => state.task;
export const selectTasklistState = (state: AppState) => state.tasklist;

export const selectTask = createSelector(selectTaskState, state => state.task);
export const selectIsLoadingTask = createSelector(selectTaskState, state => state.isLoading);

export const selectTasklist = createSelector(selectTasklistState, state => state.tasklist);
export const selectIsLoadingTasklist = createSelector(selectTasklistState, state => state.isLoading);

