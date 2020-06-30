import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, Inject, NgZone, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { Task } from 'src/app/shared/models/task';
import { AppState } from 'src/app/store/app.state';
import * as TodoActions from '../../store/todo.actions';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  addTask: Task = {
    id: null,
    name: '',
    duedate: '',
    description: '',
    weight: null,
    state: null,
    list_id: null
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: number, public dialogRef: MatDialogRef<AddTaskComponent>, private _ngZone: NgZone, private store: Store<AppState>) { }

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  ngOnInit(): void {
    this.addTask.list_id = this.data;
  }

  closeDialog() {
    this.dialogRef.close();
  }

  triggerResize() {
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  }

  submitTask() {
    this.store.dispatch(new TodoActions.AddOrUpdateTask(this.addTask));
    this.closeDialog();
  }
}
