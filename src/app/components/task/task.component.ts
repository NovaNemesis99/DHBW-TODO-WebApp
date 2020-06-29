import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as TodoActions from '../../store/todo.actions';
import * as TodoSelectors from '../../store/todo.selector';
import { Observable } from 'rxjs';
import { Task } from 'src/app/shared/models/task';

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

  constructor(private active: ActivatedRoute, private store: Store, private router: Router) { }

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

  deleteTask() {
    if (window.confirm("Aufgabe wirklich löschen?")) {
      this.store.dispatch(new TodoActions.DeleteTask(this.id));
      this.router.navigate(["/tasklist"]);
    }
  }

}
