import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'rc-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  start(){
    this.router.navigate(['/page1']);
  }

}
