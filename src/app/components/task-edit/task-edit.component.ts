import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from 'src/app/shared/models/task';
import { AppState } from 'src/app/store/app.state';
import * as TodoActions from '../../store/todo.actions';
import * as TodoSelectors from '../../store/todo.selector';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  specificTask$: Observable<Task>;

  changedTask: Task = {
    id: null,
    name: "",
    duedate: "",
    description: "",
    weight: null,
    state: null,
    list_id: null
  };

  minDate: Date;

  constructor(@Inject(MAT_DIALOG_DATA) public data: number, private store: Store<AppState>, public dialogRef: MatDialogRef<TaskEditComponent>) { 
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDate();
    this.minDate = new Date(currentYear, currentMonth, currentDay);
  }

  ngOnInit(): void {
    this.store.dispatch(new TodoActions.GetTaskById(this.data));
    this.specificTask$ = this.store.select(TodoSelectors.selectTask);
    this.specificTask$.subscribe(value => {
      this.changedTask = JSON.parse(JSON.stringify(value));
    });
  }

  submitTask() {
    this.store.dispatch(new TodoActions.AddOrUpdateTask(this.changedTask));
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
