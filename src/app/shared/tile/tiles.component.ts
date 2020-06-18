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
  @Input() public selectMultiple: boolean = true;

  select(title: string){
    if (!this.selectMultiple){
      this.tiles.forEach(x => x.selected = false);
    }

    
    this.tiles.filter(x => x.title === title).map(x => x.selected = !x.selected);
  }
}
