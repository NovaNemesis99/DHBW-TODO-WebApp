import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(public snackBar: MatSnackBar, private zone: NgZone) { }

  open(message, action="", duration = 4000, panelClass="") {
    this.zone.run(() => {
      this.snackBar.open(message, action, {duration, panelClass});
    })
  }
}
