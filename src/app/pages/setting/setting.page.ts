import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'rc-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  prev(){
    this.router.navigate(['/page2']);
  }

  next(){
    this.router.navigate(['/page4']);
  }

}
