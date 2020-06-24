import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'rc-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  constructor(
    public router: Router,
    private storage: Storage
  ) { }

  public TACreaded = false;

  ngOnInit() {
    this.storage.get('readTermsAndConditions').then((result) => {
      this.TACreaded = !!result;
    });
  }

  start(){
    if (this.TACreaded){
      this.router.navigate(['/page1']);
    }
    else{
      this.router.navigate(['/termsAndConditions']);
    }
  }

  openTAC(){
    this.router.navigate(['/termsAndConditions']);
  }

}
