import { Component, Input } from '@angular/core';

@Component({
  selector: 'rc-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent {
  constructor() { }

  @Input() title: string = "Red Cross";
}
