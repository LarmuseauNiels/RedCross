import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'rc-injury',
  templateUrl: './injury.page.html',
  styleUrls: ['./injury.page.scss'],
})
export class InjuryPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  prev(){
    this.router.navigate(['/page3']);
  }

  next(){
    this.router.navigate(['/page5']);
  }
}
