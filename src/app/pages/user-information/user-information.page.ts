import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormStoreService } from 'src/app/services/formStore.service';
import { FormResult } from 'src/app/services/formResult.model';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'rc-user-information',
  templateUrl: './user-information.page.html',
  styleUrls: ['./user-information.page.scss'],
})
export class UserInformationPage implements OnInit {

  // Is to give an example, should come from database?
  genders: string[] = [ 'M', 'F', 'X'];
  educationLevels: string[] = [ 'No education', 'Primary school', 'High school', 'Bachelor\'s degree', 'Master\'s degree', 'Phd'];

  public formResult: FormResult;
  public showError = false;

  constructor(
    public router: Router,
    public formStore: FormStoreService,
    private storage: Storage
  ) {
    formStore.formResult.subscribe((result) => {this.formResult = result; });
  }

  ngOnInit() {
    this.storage.get('gender').then((gender) => {
      if (gender){
        this.formResult.gender = gender;
      }
    });

    this.storage.get('age').then((age) => {
      if (age){
        this.formResult.age = age;
      }
    });

    this.storage.get('education').then((education) => {
      if (education){
        this.formResult.education = education;
      }
    });

    this.storage.get('hadFATraining').then((hadFATraining) => {
      if (hadFATraining){
        this.formResult.hadFATraining = hadFATraining;
      }
    });

    this.storage.get('numberOffFATtraining').then((numberOffFATtraining) => {
      if (numberOffFATtraining){
        this.formResult.numberOffFATtraining = numberOffFATtraining;
      }
    });

    this.storage.get('trainingByRC').then((trainingByRC) => {
      if (trainingByRC){
        this.formResult.trainingByRC = trainingByRC;
      }
    });
  }

  prev(){
    this.router.navigate(['/page5']);
  }

  next(){
    if (!this.formResult.gender){
      this.showError = true;
      return;
    }

    if (!this.formResult.age){
      this.showError = true;
      return;
    }

    if (!this.formResult.education){
      this.showError = true;
      return;
    }

    if (this.formResult.hadFATraining){
      if (!this.formResult.numberOffFATtraining){
        this.showError = true;
        return;
      }

      if (!this.formResult.trainingByRC){
        if (!this.formResult.otherTrainingProvider){
          this.showError = true;
          return;
        }
      }
    }

    this.storage.set('gender', this.formResult.gender);
    this.storage.set('age', this.formResult.age);
    this.storage.set('education', this.formResult.education);
    this.storage.set('hadFATraining', this.formResult.hadFATraining);
    this.storage.set('numberOffFATtraining', this.formResult.numberOffFATtraining);
    this.storage.set('trainingByRC', this.formResult.trainingByRC);

    this.formResult.age = this.formResult.age.substring(0, 4);
    this.formStore.setFormResult(this.formResult);
    this.router.navigate(['/end']);
  }

}
