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
      this.injuryTiles.push(new TileModel('General', 'assets/icon/injury/general.png'));
      this.injuryTiles.push(new TileModel('Stroke', 'assets/icon/injury/stroke.png'));
      this.injuryTiles.push(new TileModel('Unconsciousness', 'assets/icon/injury/unconsciosness.png'));
      this.injuryTiles.push(new TileModel('Choking', 'assets/icon/injury/choking.png'));
      this.injuryTiles.push(new TileModel('Chest Discomfort', 'assets/icon/injury/chest_discomfort.png'));
      this.injuryTiles.push(new TileModel('Severe Bleeding', 'assets/icon/injury/severe_bleeding.png'));
      this.injuryTiles.push(new TileModel('Poisoning', 'assets/icon/injury/poisoning.png'));
      this.injuryTiles.push(new TileModel('Skin Wounds', 'assets/icon/injury/skin_wounds.png'));
      this.injuryTiles.push(new TileModel('Skin Wounds with Embedded Object', 'assets/icon/injury/skin_wounds_with_embedded_object.png'));
      this.injuryTiles.push(new TileModel('Burns', 'assets/icon/injury/burns.png'));
      this.injuryTiles.push(new TileModel('Stings & Bites', 'assets/icon/injury/stings_and_bites.png'))
      this.injuryTiles.push(new TileModel('Injuries to muscles, joints or limbs', 'assets/icon/injury/injuries_to_muscles_joints_or_limbs.png'));
      this.injuryTiles.push(new TileModel('Injuries to head, neck or back', 'assets/icon/injury/injury_head_neck_or_back.png'));
      this.injuryTiles.push(new TileModel('Eye Injuries', 'assets/icon/injury/eye_injury.png'));
      this.injuryTiles.push(new TileModel('Nose Bleed', 'assets/icon/injury/nose_bleed.png'));
      this.injuryTiles.push(new TileModel('Coronavirus', 'assets/icon/injury/coronavirus.png'));
      this.injuryTiles.push(new TileModel('Fainting', 'assets/icon/injury/fainting.png'));
      this.injuryTiles.push(new TileModel('Fever', 'assets/icon/injury/fever.png'));
      this.injuryTiles.push(new TileModel('Fits', 'assets/icon/injury/fits.png'));
      this.injuryTiles.push(new TileModel('Diarrhoea', 'assets/icon/injury/diarrhoea.png'));
      this.injuryTiles.push(new TileModel('Measles', 'assets/icon/injury/measles.png'));
      this.injuryTiles.push(new TileModel('Other', 'assets/icon/other.png'));
  }

  prev(){
    this.router.navigate(['/page2']);
  }

  next(){
    this.formResult.injury = this.injuryTiles.filter(x => x.selected).map(x => x.title);
    this.formStore.setFormResult(this.formResult);
    this.router.navigate(['/page4']);
  }
}
