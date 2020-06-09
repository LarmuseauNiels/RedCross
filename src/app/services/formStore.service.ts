import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormResult } from './formResult.model';

@Injectable()
export class FormStoreService{
  private _form: BehaviorSubject<FormResult> = new BehaviorSubject<FormResult>(new FormResult());
  public readonly formResult: Observable<FormResult> = this._form.asObservable();

  constructor() {
    
  }


}
