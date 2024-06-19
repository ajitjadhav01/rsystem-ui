import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private _loading = new BehaviorSubject<boolean>(false);
  public readonly loading$ = this._loading.asObservable();

  constructor() {}

  //Used to show loading indicator
  showLoader() {
    this._loading.next(true);
  }

  //Used to hide loading indicator
  hideLoader() {
    this._loading.next(false);
  }
}
