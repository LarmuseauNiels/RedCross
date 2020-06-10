import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TileModel } from 'src/app/shared/tile/tile.model';

@Component({
  selector: 'rc-injury',
  templateUrl: './injury.page.html',
  styleUrls: ['./injury.page.scss'],
})
export class InjuryPage implements OnInit {

  constructor(public router: Router) { }

  public injuryTiles: TileModel[] = [];

  ngOnInit() {
      this.injuryTiles.push(new TileModel('Fracture', 'assets/icon/injury/fracture.png'));
      this.injuryTiles.push(new TileModel('Cuts', 'assets/icon/injury/cuts.png'));
      this.injuryTiles.push(new TileModel('Snake bite', 'assets/icon/injury/snake_bite.png'));
      this.injuryTiles.push(new TileModel('Burn', 'assets/icon/injury/burn.png'));
      this.injuryTiles.push(new TileModel('Poisoning', 'assets/icon/injury/poisoning.png'));
      this.injuryTiles.push(new TileModel('Head injury', 'assets/icon/injury/headinjury.png'));
      this.injuryTiles.push(new TileModel('Unconsciousness', 'assets/icon/injury/unconsciosness.png'));
  }

  prev(){
    this.router.navigate(['/page3']);
  }

  next(){
    this.router.navigate(['/page5']);
  }
}
