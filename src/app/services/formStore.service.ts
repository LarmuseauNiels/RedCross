import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormResult } from './formResult.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FormStoreService{
  private _form: BehaviorSubject<FormResult> = new BehaviorSubject<FormResult>(new FormResult());
  public readonly formResult: Observable<FormResult> = this._form.asObservable();

  constructor(private readonly http: HttpClient) {

  }

  setFormResult(formResult: FormResult) {
    this._form.next(formResult);
  }

  sendToApi(): Promise<boolean> {
    const url = 'https://redcrossbackend.azurewebsites.net/api/App';
    const request = this._form.getValue();

    return this.http.post(url, request)
        .toPromise()
        .then(_ => true);
  }
}
