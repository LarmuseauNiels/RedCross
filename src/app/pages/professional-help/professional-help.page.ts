import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Time } from '@angular/common';

@Component({
  selector: 'rc-professional-help',
  templateUrl: './professional-help.page.html',
  styleUrls: ['./professional-help.page.scss'],
})
export class ProfessionalHelpPage implements OnInit {

  phTypes: string[] = ["Ambulance", "GP", "Nurses", "Community Health Workers"];
  hrChoices: string[] = ["Yes", "No", "Unknown"];

  phNeeded: boolean;
  phType: string;
  phTimeToArrival: Time;
  hospitalisationRequired: string;

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
