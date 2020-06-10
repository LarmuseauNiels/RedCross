import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TileModel } from 'src/app/shared/tile/tile.model';

@Component({
  selector: 'rc-assistance',
  templateUrl: './assistance.page.html',
  styleUrls: ['./assistance.page.scss'],
})
export class AssistancePage implements OnInit {

  constructor(public router: Router) { }

  public assistanceTiles: TileModel[] = [];

  ngOnInit() {
      this.assistanceTiles.push(new TileModel('CPR', 'assets/icon/assistance/cpr.png'));
      this.assistanceTiles.push(new TileModel('Desinfected', 'assets/icon/assistance/desinfected.png'));
      this.assistanceTiles.push(new TileModel('Bandage', 'assets/icon/assistance/bandage.png'));
      this.assistanceTiles.push(new TileModel('Anti-Venom', 'assets/icon/assistance/anti-venom.png'));
      this.assistanceTiles.push(new TileModel('Immobilized', 'assets/icon/assistance/immobilized.png'));
      this.assistanceTiles.push(new TileModel('Iced', 'assets/icon/assistance/iced.png'));
      this.assistanceTiles.push(new TileModel('Removal', 'assets/icon/assistance/removal.png'));
      this.assistanceTiles.push(new TileModel('Cleaned', 'assets/icon/assistance/cleaned.png'));
      this.assistanceTiles.push(new TileModel('Kept awake', 'assets/icon/assistance/kept-awake.png'));
  }

  prev(){
    this.router.navigate(['/page4']);
  }

  next(){
    this.router.navigate(['/page6']);
  }

}
