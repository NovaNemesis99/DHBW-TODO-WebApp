import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as TodoActions from '../../store/todo.actions';
import * as TodoSelectors from '../../store/todo.selector';
import { Observable } from 'rxjs';
import { Tasklist } from 'src/app/shared/models/tasklist';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-tasklist-detail',
  templateUrl: './tasklist-detail.component.html',
  styleUrls: ['./tasklist-detail.component.css']
})
export class TasklistDetailComponent implements OnInit {

  private id: number;
  tasklist$: Observable<Tasklist[]>;
  placeholder =  {
    tasklist: []
  };
  tasklist: [] = [];
  isLoading$: Observable<boolean>;

  constructor(private active: ActivatedRoute, private store: Store, public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.active.fragment.subscribe((fragment: string) => this.getTasklist(fragment));
  }

  getTasklist(fragment) {
    this.id = fragment;
    this.store.dispatch(new TodoActions.GetListById(this.id));
    this.tasklist$ = this.store.select(TodoSelectors.selectTasklist);
    this.tasklist$.subscribe((tasklist) => {
      this.placeholder.tasklist = tasklist;
    });
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.data = this.id;
    dialogConfig.width = "1200px";

    if (this.dialog.openDialogs.length == 0) {
      const dialogRef = this.dialog.open(AddTaskComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(() => this.getTasklist(this.id));
    }
  }

  deleteList() {
    if (window.confirm("Liste wirklich löschen?")) {
      this.store.dispatch(new TodoActions.DeleteList(this.id));
    }
    this.router.navigate(["/tasklist"]);
  }
}
