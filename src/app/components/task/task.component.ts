import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  task$: Observable<Task[]>;
  isLoading$: Observable<boolean>;

  constructor(private active: ActivatedRoute, private store: Store) { }

  ngOnInit(): void {
    this.active.fragment.subscribe((fragment: string) => this.getTask(fragment));
  }

  getTask(fragment) {
    this.id = fragment;
    this.store.dispatch(new TodoActions.GetTaskById(this.id));
    this.task$ = this.store.select(TodoSelectors.selectTask);
  }

}
