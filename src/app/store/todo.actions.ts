import { Action } from '@ngrx/store';

//sample model
import { Task } from '../shared/models/task';

//sample action
export const SAMPLE_ACTION = "[Action] SampleAction";

export class SampleAction implements Action {
    readonly type = SAMPLE_ACTION;

    constructor(public payload: Task) {}
}
//end sample

export type TodoActions = SampleAction;
