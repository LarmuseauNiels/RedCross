import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormStoreService } from 'src/app/services/formStore.service';
import { FormResult } from 'src/app/services/formResult.model';

@Component({
  selector: 'rc-user-information',
  templateUrl: './user-information.page.html',
  styleUrls: ['./user-information.page.scss'],
})
export class UserInformationPage implements OnInit {

  // Is to give an example, should come from database?
  genders: string[] = [ 'M', 'V', 'X'];
  ageRanges: string[] = ['<15', '15-25', '25-35', '35-45', '45-55', '65-75', '75-85', '>85'];
  educationLevels: string[] = [ 'No education', 'Primary school', 'High school', 'Bachelor\'s degree', 'Master\'s degree', 'Phd'];

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
    this.formStore.setFormResult(this.formResult);
    this.router.navigate(['/end']);
  }

}
