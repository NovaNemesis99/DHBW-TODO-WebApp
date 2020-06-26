import { Component, OnInit, Inject, NgZone, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from 'src/app/shared/models/task';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';

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

  constructor(@Inject(MAT_DIALOG_DATA) public data: number, public dialogRef: MatDialogRef<AddTaskComponent>, private _ngZone: NgZone) { }

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

}