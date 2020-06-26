import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TileModel } from 'src/app/shared/tile/tile.model';
import { FormResult } from 'src/app/services/formResult.model';
import { FormStoreService } from 'src/app/services/formStore.service';
import { ModalController } from '@ionic/angular';
import { SettingInfoPage } from './setting-info/setting-info.page';

@Component({
  selector: 'rc-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  constructor(
    public router: Router,
    public formStore: FormStoreService,
    public modalController: ModalController
  ) {
    formStore.formResult.subscribe((result) => {this.formResult = result; });
  }

  public settingTiles: TileModel[] = [];
  public formResult: FormResult;
  public showError = false;

  ngOnInit() {
      this.settingTiles.push(new TileModel('Home', 'assets/icon/setting/home.png'));
      this.settingTiles.push(new TileModel('School', 'assets/icon/setting/school.png'));
      this.settingTiles.push(new TileModel('Traffic', 'assets/icon/setting/traffic.png'));
      this.settingTiles.push(new TileModel('Public Space', 'assets/icon/setting/pubic_space.png'));
      this.settingTiles.push(new TileModel('Work', 'assets/icon/setting/work.png'));
  }

  prev(){
    this.router.navigate(['/start']);
  }

  next(){
    if (!this.settingTiles.filter(x => x.selected).shift()?.title){
      this.showError = true;
      return;
    }
    this.formResult.setting = this.settingTiles.filter(x => x.selected).shift()?.title;
    this.formStore.setFormResult(this.formResult);
    this.router.navigate(['/page2']);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: SettingInfoPage,
      cssClass: 'settingInfo',
      swipeToClose: true,
    });
    return await modal.present();
  }

}
