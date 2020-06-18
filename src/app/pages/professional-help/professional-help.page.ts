import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Time } from '@angular/common';
import { FormResult } from 'src/app/services/formResult.model';
import { FormStoreService } from 'src/app/services/formStore.service';

@Component({
  selector: 'rc-professional-help',
  templateUrl: './professional-help.page.html',
  styleUrls: ['./professional-help.page.scss'],
})
export class ProfessionalHelpPage implements OnInit {

  phTypes: string[] = ['Ambulance', 'GP', 'Nurses', 'Community Health Workers'];
  hrChoices: string[] = ['Yes', 'No', 'Unknown'];

  phTimeToArrival: number;

  public formResult: FormResult;

  constructor(public router: Router, public formStore: FormStoreService) {
    formStore.formResult.subscribe((result) => {this.formResult = result; });
  }

  ngOnInit() {
  }

  prev(){
    this.router.navigate(['/page5']);
  }

  next(){
    this.formResult.phTimeToArriveMs = (this.phTimeToArrival?.hours * 3600000) ?? 0 + (this.phTimeToArrival?.minutes * 60000) ?? 0;
    this.formStore.setFormResult(this.formResult);
    this.router.navigate(['/end']);
  }

}
