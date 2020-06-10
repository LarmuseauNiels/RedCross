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

  ages: any[] = [
    {
      id: 1,
      text: "15-25"
    },
    {
      id: 2,
      text: "25-35"
    }
  ]

  educationLevels: any[] = [
    {
      id: 1,
      text: "Primary school"
    },
    {
      id: 2,
      text: "High school"
    },
    {
      id: 3,
      text: "Bachelor's degree"
    },
    {
      id: 4,
      text: "Master's degree"
    },
    {
      id: 5,
      text: "Phd"
    }
  ]

  gender: number;
  age: number;
  education: number;
  hasFollowedFirstAidTraining: boolean;
  amountOfTrainings: number;
  hasFollewedTrainingsWithRedCross: boolean;
  otherProvider:string;
  firstAidBlendedLearningTraining:boolean;


  constructor(public router: Router) { }

  ngOnInit() {
  }

  //This was mainly to test.
  NextPage() {
    console.log(this.gender);
    console.log(this.age);
    console.log(this.education);
    console.log(this.hasFollowedFirstAidTraining);
    console.log(this.amountOfTrainings);
    console.log(this.hasFollewedTrainingsWithRedCross);
    console.log(this.otherProvider);
    console.log(this.firstAidBlendedLearningTraining);
  }

  prev(){
    this.router.navigate(['/start']);
  }

  next(){
    this.router.navigate(['/page2']);
  }

}
