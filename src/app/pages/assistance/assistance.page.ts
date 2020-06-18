import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TileModel } from 'src/app/shared/tile/tile.model';
import { FormResult } from 'src/app/services/formResult.model';
import { FormStoreService } from 'src/app/services/formStore.service';

@Component({
  selector: 'rc-assistance',
  templateUrl: './assistance.page.html',
  styleUrls: ['./assistance.page.scss'],
})
export class AssistancePage implements OnInit {

  public formResult: FormResult;

  constructor(public router: Router, public formStore: FormStoreService) {
    formStore.formResult.subscribe((result) => {this.formResult = result; });
  }

  public assistanceTiles: TileModel[];

  ngOnInit() {
      if (this.assistanceTiles){
        return;
      }
      this.assistanceTiles = [];
      this.assistanceTiles.push(new TileModel('CPR', 'assets/icon/assistance/cpr.png'));
      this.assistanceTiles.push(new TileModel('Desinfected', 'assets/icon/assistance/desinfected.png'));
      this.assistanceTiles.push(new TileModel('Bandage', 'assets/icon/assistance/bandage.png'));
      this.assistanceTiles.push(new TileModel('Anti-Venom', 'assets/icon/assistance/anti-venom.png'));
      this.assistanceTiles.push(new TileModel('Immobilized', 'assets/icon/assistance/immobilized.png'));
      this.assistanceTiles.push(new TileModel('Iced', 'assets/icon/assistance/iced.png'));
      this.assistanceTiles.push(new TileModel('Removal', 'assets/icon/assistance/removal.png'));
      this.assistanceTiles.push(new TileModel('Cleaned', 'assets/icon/assistance/cleaned.png'));
      this.assistanceTiles.push(new TileModel('Kept awake', 'assets/icon/assistance/kept-awake.png'));
      this.assistanceTiles.push(new TileModel('Other', 'assets/icon/other.png'));
  }

  prev(){
    this.router.navigate(['/page3']);
  }

  next(){
    this.formResult.assistance = this.assistanceTiles.filter(x => x.selected).map(x => x.title);
    this.formStore.setFormResult(this.formResult);
    this.router.navigate(['/page5']);
  }

}
