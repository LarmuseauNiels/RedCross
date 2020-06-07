import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'rc-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  prev(){
    this.router.navigate(['/page1']);
  }

  next(){
    this.router.navigate(['/page3']);
  }

}
