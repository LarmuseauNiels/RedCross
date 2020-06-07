import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'rc-assistance',
  templateUrl: './assistance.page.html',
  styleUrls: ['./assistance.page.scss'],
})
export class AssistancePage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  prev(){
    this.router.navigate(['/page4']);
  }

  next(){
    this.router.navigate(['/page6']);
  }

}
