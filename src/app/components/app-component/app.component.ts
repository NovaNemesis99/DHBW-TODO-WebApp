import { Component } from '@angular/core';
import { ofType } from '@ngrx/effects';
import { ActionsSubject, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  subc = new Subscription();

  constructor(private store: Store<AppState>, private actionsSubj: ActionsSubject, private snackBar: SnackBarService) {
    this.subc = actionsSubj.pipe(
      ofType("[Tasklist] ChangedList")
    ).subscribe(data => this.snackBar.open("Liste erfolgreich hinzugefügt / geändert", "", 4000, "success_bar"));
    this.subc = actionsSubj.pipe(
      ofType("[Task] ChangedTask")
    ).subscribe(data => this.snackBar.open("Aufgabe erfolgreich hinzugefügt / geändert", "", 4000, "success_bar"));
    this.subc = actionsSubj.pipe(
      ofType("[Tasklist] DeletedList", "[Task] DeletedTask")
    ).subscribe(data => this.snackBar.open("Erfolgreich gelöscht", "", 4000, "success_bar"));
  }

  title = 'TODO';

  ngOnDestroy() {
    this.subc.unsubscribe();
  }
}
