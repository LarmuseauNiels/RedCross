import { Component, Input, EventEmitter, Output } from '@angular/core';
import { NavigationDot } from './navigationDot.model';

@Component({
  selector: 'rc-navigator',
  templateUrl: 'navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent {
  private _currentPage: number = 1;
  constructor() {
    for (let i = 1; i <= this.totalPages; i++){
      this.dots.push({page: i, selected: false});
    }
   }

  dots: NavigationDot[] = [];
  totalPages: number = 6;

  get currentPage(): number {
    return this._currentPage;
  }

  @Input() set currentPage(value: number){
    this._currentPage = value;
    this.dots.forEach(element => {
      element.selected = false;
      if(element.page == value) {
        element.selected = true;
      }
    });
  }

  @Output() public prev = new EventEmitter<any>();
  @Output() public next = new EventEmitter<any>();
}
