import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.page.html',
  styleUrls: ['./user-information.page.scss'],
})
export class UserInformationPage implements OnInit {

  genders: any[] = [
    {
      id: 1,
      text: "M"
    },
    {
      id: 2,
      text: "V"
    },
    {
      id: 3,
      text: "X"
    },

  ]
  
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

  hasFollowedFirstAidTraining:boolean;

  constructor() { }

  ngOnInit() {
  }

  changed(detail) {
    console.log(this.hasFollowedFirstAidTraining);
  }

}
