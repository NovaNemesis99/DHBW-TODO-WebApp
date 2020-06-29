import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as TodoActions from '../../store/todo.actions';
import * as TodoSelectors from '../../store/todo.selector';
import { Observable } from 'rxjs';
import { Task } from 'src/app/shared/models/task';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { TaskEditComponent } from '../task-edit/task-edit.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  private id: number;
  task$: Observable<Task>;
  isLoading$: Observable<boolean>;
  public isDone: boolean = false;
  showTask: Task = {
    id: null,
    name: "",
    duedate: "",
    description: "",
    weight: null,
    state: null,
    list_id: null
  };

  constructor(private active: ActivatedRoute, private store: Store, public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.active.fragment.subscribe((fragment: string) => this.getTask(fragment));
  }

  getTask(fragment) {
    this.id = fragment;
    this.store.dispatch(new TodoActions.GetTaskById(this.id));
    this.task$ = this.store.select(TodoSelectors.selectTask);
    this.isLoading$ = this.store.select(TodoSelectors.selectIsLoadingTask);
    this.task$.subscribe(value => {
      this.showTask = JSON.parse(JSON.stringify(value));
    });
  }

  changeTask(id) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.data = id;
    dialogConfig.width = "1200px";

    if (this.dialog.openDialogs.length == 0) {
      const dialogRef1 = this.dialog.open(TaskEditComponent, dialogConfig);
      dialogRef1.afterClosed().subscribe(() => this.getTask(this.id));
    }
  }

  deleteTask() {
    if (window.confirm("Aufgabe wirklich löschen?")) {
      this.store.dispatch(new TodoActions.DeleteTask(this.id));
      this.router.navigate(["/tasklist"]);
    }
  }

}
