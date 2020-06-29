import { Action } from '@ngrx/store';
import { Task } from '../shared/models/task';
import { Tasklist } from '../shared/models/tasklist';

//#region Task
export const GET_TASK_BY_ID = "[Task] GetTaskById";

export class GetTaskById implements Action {
    readonly type = GET_TASK_BY_ID;

    constructor(public payload: number) { }
}

export const RECEIVED_TASK = "[Task] ReceivedTask";

export class ReceivedTask implements Action {
    readonly type = RECEIVED_TASK;

    constructor(public payload: Task) { }
}

export const GET_TASKS_OF_LIST = "[Task] GetTasksOfList";

export class GetTasksOfList implements Action {
    readonly type = GET_TASKS_OF_LIST;

    constructor(public payload: number) { }
}

export const RECEIVED_TASKS_OF_LIST = "[Task] ReceivedTasksOfList";

export class ReceivedTasksOfList implements Action {
    readonly type = RECEIVED_TASKS_OF_LIST;

    constructor(public payload: Task[]) { }
}

export const ADD_OR_UPDATE_TASK = "[Task] AddOrUpdateTask";

export class AddOrUpdateTask implements Action {
    readonly type = ADD_OR_UPDATE_TASK;

    constructor(public payload: {}) { }
}

export const CHANGED_TASK = "[Task] ChangedTask";

export class ChangedTask implements Action {
    readonly type = CHANGED_TASK;
}

export const DELETE_TASK = "[Task] DeleteTask";

export class DeleteTask implements Action {
    readonly type = DELETE_TASK;

    constructor(public payload: number) {}
}

export const DELETED_TASK = "[Task] DeletedTask";

export class DeletedTask implements Action {
    readonly type = DELETED_TASK;
}
//#endregion Task

//#region Tasklist
export const GET_LIST_BY_ID = "[Tasklist] GetListById";

export class GetListById implements Action {
    readonly type = GET_LIST_BY_ID;

    constructor(public payload: number) { }
}

export const RECEIVED_LIST_BY_ID = "[Tasklist] ReceivedListById";

export class ReceivedListById implements Action {
    readonly type = RECEIVED_LIST_BY_ID;

    constructor(public payload: Tasklist[]) { }
}

export const GET_ALL_LISTS = "[Tasklist] GetAllLists";

export class GetAllLists implements Action {
    readonly type = GET_ALL_LISTS;
}

export const RECEIVED_ALL_LISTS = "[Tasklist] ReceivedAllLists";

export class ReceivedAllLists implements Action {
    readonly type = RECEIVED_ALL_LISTS;

    constructor(public payload: Tasklist[]) { }
}

export const ADD_OR_UPDATE_LIST = "[Tasklist] AddOrUpdateList";

export class AddOrUpdateList implements Action {
    readonly type = ADD_OR_UPDATE_LIST;

    constructor(public payload: {}) { }
}

export const CHANGED_LIST = "[Tasklist] ChangedList";

export class ChangedList implements Action {
    readonly type = CHANGED_LIST;
}

export const DELETE_LIST = "[Tasklist] DeleteList";

export class DeleteList implements Action {
    readonly type = DELETE_LIST;

    constructor(public payload: number) {}
}

export const DELETED_LIST = "[Tasklist] DeletedList";

export class DeletedList implements Action {
    readonly type = DELETED_LIST;
}

export type TodoActions = GetTaskById | ReceivedTask | GetTasksOfList | ReceivedTasksOfList | AddOrUpdateTask | ChangedTask | DeleteTask | DeletedTask |
    GetListById | ReceivedListById | GetAllLists | ReceivedAllLists | AddOrUpdateList | ChangedList | DeleteList | DeletedList;
