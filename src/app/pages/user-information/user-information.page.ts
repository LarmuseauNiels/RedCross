import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'rc-user-information',
  templateUrl: './user-information.page.html',
  styleUrls: ['./user-information.page.scss'],
})
export class UserInformationPage implements OnInit {

  //Is to give an example, should come from database?
  genders: string[] = [ "M", "V", "X"];
  ageRanges: string[] = ["<15", "15-25","25-35","35-45","45-55","65-75","75-85",">85"];
  educationLevels: string[] = [ "No education", "Primary school", "High school", "Bachelor's degree", "Master's degree", "Phd"];

  gender: string;
  ageRange: string;
  education: string;
  hadFATraining: boolean;
  numberOfFATraining: number;
  trainingByRC: boolean;
  otherTrainingProvider:string;
  blendedTraining:boolean;

  constructor(public router: Router) { }

  ngOnInit() {
  }

  prev(){
    this.router.navigate(['/start']);
  }

  next(){
    this.router.navigate(['/page2']);
  }

}
