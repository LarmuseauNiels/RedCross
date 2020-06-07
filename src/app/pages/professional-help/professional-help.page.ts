import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'rc-professional-help',
  templateUrl: './professional-help.page.html',
  styleUrls: ['./professional-help.page.scss'],
})
export class ProfessionalHelpPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  prev(){
    this.router.navigate(['/page5']);
  }

  next(){
    this.router.navigate(['/end']);
  }

}
