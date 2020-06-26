import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as TodoActions from '../../store/todo.actions';
import * as TodoSelectors from '../../store/todo.selector';
import { Observable } from 'rxjs';
import { Tasklist } from 'src/app/shared/models/tasklist';

@Component({
  selector: 'app-tasklist-detail',
  templateUrl: './tasklist-detail.component.html',
  styleUrls: ['./tasklist-detail.component.css']
})
export class TasklistDetailComponent implements OnInit {

  private id: number;
  tasklist$: Observable<Tasklist[]>;
  isLoading$: Observable<boolean>;

  constructor(private active: ActivatedRoute, private store: Store) { }

  ngOnInit(): void {
    this.active.fragment.subscribe((fragment: string) => this.getTasklist(fragment));
  }

  getTasklist(fragment) {
    this.id = fragment;
    this.store.dispatch(new TodoActions.GetListById(this.id));
    this.tasklist$ = this.store.select(TodoSelectors.selectTasklist);
  }
}
