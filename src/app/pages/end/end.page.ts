import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'rc-end',
  templateUrl: './end.page.html',
  styleUrls: ['./end.page.scss'],
})
export class EndPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  restart(){
    this.router.navigate(['/start']);
  }

}
