import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'rc-terms-and-conditions',
  templateUrl: './termsAndConditions.page.html',
  styleUrls: ['./termsAndConditions.page.scss'],
})
export class TermsAndConditionsPage implements OnInit {

  constructor(
    public router: Router,
    private storage: Storage
  ) { }

  ngOnInit() {
  }

  prev(){
    this.router.navigate(['/start']);
  }

  next(){
    this.storage.set('readTermsAndConditions', true);
    this.router.navigate(['/page1']);
  }

}
