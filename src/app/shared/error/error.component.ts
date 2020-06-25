import { Component, Input } from '@angular/core';

@Component({
  selector: 'rc-error',
  templateUrl: 'error.component.html'
})
export class ErrorComponent {
  constructor() { }

  @Input() error: string;
  @Input() showError = false;
}
