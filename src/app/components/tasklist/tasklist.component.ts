import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as TodoActions from '../../store/todo.actions';
import { Observable } from 'rxjs';
import { Tasklist } from 'src/app/shared/models/tasklist';
import { AppState } from 'src/app/store/app.state';
import * as TodoSelectors from '../../store/todo.selector';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  tasklists$: Observable<Tasklist[]>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(new TodoActions.GetAllLists);
    this.tasklists$ = this.store.select(TodoSelectors.selectTasklist);
  }

}
