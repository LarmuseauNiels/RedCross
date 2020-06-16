import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormStoreService } from 'src/app/services/formStore.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'rc-end',
  templateUrl: './end.page.html',
  styleUrls: ['./end.page.scss'],
})
export class EndPage implements OnInit {

  constructor(
    public router: Router,
    public formStore: FormStoreService,
    public toastController: ToastController) { }

  ngOnInit() {
    this.formStore.sendToApi()
      .then(_ => {
        this.sendToApi('Results send!')
      })
      .catch(_ => {
        this.sendToApi('Failed to send result. Try again later.')
      })
  }

  async sendToApi(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  restart(){
    this.router.navigate(['/start']);
  }

}
