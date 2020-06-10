import { Component, Input } from '@angular/core';
import { TileModel } from './tile.model';

@Component({
  selector: 'rc-tiles',
  templateUrl: 'tiles.component.html',
  styleUrls: ['./tiles.component.scss']
})
export class TilesComponent {
  
  constructor() {
   }


  @Input() public tiles: TileModel[];
}
