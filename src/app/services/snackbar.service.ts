import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material';
import { AppSnackBarInnerComponent } from '../components/app-snack-bar-inner/app-snack-bar-inner.component';
import { ConstantsService } from './constants.service';
import { SnackbarDataModel } from '../models/snackbar.model';
@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  public q = [];
  constructor(private _matSnackbar: MatSnackBar) {}

  // The non buffered version cancels(hides) the previous message regardless of the duration
  // show(data) {
  //   ref(data);
  // }

  // Queue the messages and show them sequentially until duration time of each one lapses.
  // The message is shown when it is at 0 position in the q[], only.
  // The two cases are when:
  // client calls with a new message - just pushes the new message to the q
  // or self invoked on dismissing the previous one and there are more messages.
  show(data: SnackbarDataModel) {
    if (this.q[0] !== data) {
      this.q.push(data);
    }
    if (this.q[0] === data) {
      const snackbarRef = this.ref(data);
      snackbarRef.afterDismissed().subscribe(() => {
        this.q.shift();
        if (this.q.length > 0) {
          this.show(this.q[0]);
        }
      });
    }
  }

  ref(data: SnackbarDataModel): MatSnackBarRef<AppSnackBarInnerComponent> {
    return this._matSnackbar.openFromComponent(AppSnackBarInnerComponent, {
      duration: ConstantsService.snackbarDuration * (data.class === 'snackbar__error' ? 2 : 1),
      data,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass: data.class
    });
  }
}
