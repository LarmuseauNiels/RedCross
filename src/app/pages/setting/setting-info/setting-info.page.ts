import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TileModel } from 'src/app/shared/tile/tile.model';

@Component({
  selector: 'rc-setting-info',
  templateUrl: './setting-info.page.html',
  styleUrls: ['./setting-info.page.scss'],
})
export class SettingInfoPage implements OnInit{

  constructor(public modalController: ModalController) {
  }

  public settings: {icon: string, title: string, text: string}[] = [];

  ngOnInit(){
    this.settings.push({icon: 'assets/icon/setting/home.png', title: 'Home', text: 'First Aid intervention at your home or in someone else’s private residence'});
    this.settings.push({icon: 'assets/icon/setting/school.png', title: 'School', text: 'First Aid intervention in your school, university or other educational institute'});
    this.settings.push({icon: 'assets/icon/setting/traffic.png', title: 'Traffic', text: 'First Aid intervention involving motorized vehicles'});
    this.settings.push({icon: 'assets/icon/setting/street.png', title: 'Public Space', text: 'First Aid intervention on the street, in a parc or anywhere else out in the public area'});
    this.settings.push({icon: 'assets/icon/setting/work.png', title: 'Work', text: 'First Aid intervention in your workplace or while working'});
  }

  public dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
