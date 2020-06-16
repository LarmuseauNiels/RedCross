import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TileModel } from 'src/app/shared/tile/tile.model';
import { FormResult } from 'src/app/services/formResult.model';
import { FormStoreService } from 'src/app/services/formStore.service';

@Component({
  selector: 'rc-injury',
  templateUrl: './injury.page.html',
  styleUrls: ['./injury.page.scss'],
})
export class InjuryPage implements OnInit {

  public formResult: FormResult;

  constructor(public router: Router, public formStore: FormStoreService) {
    formStore.formResult.subscribe((result) => {this.formResult = result; });
  }

  public injuryTiles: TileModel[];

  ngOnInit() {
      if (this.injuryTiles){
        return;
      }
      this.injuryTiles = [];
      this.injuryTiles.push(new TileModel('Fracture', 'assets/icon/injury/fracture.png'));
      this.injuryTiles.push(new TileModel('Cuts', 'assets/icon/injury/cuts.png'));
      this.injuryTiles.push(new TileModel('Snake bite', 'assets/icon/injury/snake_bite.png'));
      this.injuryTiles.push(new TileModel('Burn', 'assets/icon/injury/burn.png'));
      this.injuryTiles.push(new TileModel('Poisoning', 'assets/icon/injury/poisoning.png'));
      this.injuryTiles.push(new TileModel('Head injury', 'assets/icon/injury/headinjury.png'));
      this.injuryTiles.push(new TileModel('Unconsciousness', 'assets/icon/injury/unconsciosness.png'));
      this.injuryTiles.push(new TileModel('Other', 'assets/icon/other.png'));
  }

  prev(){
    this.router.navigate(['/page3']);
  }

  next(){
    this.formResult.injury = this.injuryTiles.filter(x => x.selected).map(x => x.title);
    this.formStore.setFormResult(this.formResult);
    this.router.navigate(['/page5']);
  }
}
