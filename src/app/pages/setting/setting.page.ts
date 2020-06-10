import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TileModel } from 'src/app/shared/tile/tile.model';

@Component({
  selector: 'rc-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  constructor(public router: Router) { }

  public settingTiles: TileModel[] = [];

  ngOnInit() {
      this.settingTiles.push(new TileModel('Home', 'assets/icon/setting/home.png'));
      this.settingTiles.push(new TileModel('School', 'assets/icon/setting/school.png'));
      this.settingTiles.push(new TileModel('Traffic', 'assets/icon/setting/traffic.png'));
      this.settingTiles.push(new TileModel('Street', 'assets/icon/setting/street.png'));
      this.settingTiles.push(new TileModel('Work', 'assets/icon/setting/work.png'));
  }

  prev(){
    this.router.navigate(['/page2']);
  }

  next(){
    this.router.navigate(['/page4']);
  }

}
