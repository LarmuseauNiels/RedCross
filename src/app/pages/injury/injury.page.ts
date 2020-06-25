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
  public showError = false;

  ngOnInit() {
      if (this.injuryTiles){
        return;
      }
      this.injuryTiles = [];
      this.injuryTiles.push(new TileModel("Unconscious with normal breathing", "assets/icon/injury/unconsciosness_breathing.png"))
      this.injuryTiles.push(new TileModel("Unconsciousness without normal breathing", "assets/icon/injury/unconsciosness.png"));
      this.injuryTiles.push(new TileModel("Drowning", "assets/icon/injury/drowning.png"));
      this.injuryTiles.push(new TileModel("Stroke", "assets/icon/injury/stroke.png"));
      this.injuryTiles.push(new TileModel("Choking", "assets/icon/injury/choking.png"));
      this.injuryTiles.push(new TileModel("Chest discomfort", "assets/icon/injury/chest_discomfort.png"));
      this.injuryTiles.push(new TileModel("Severe bleeding", "assets/icon/injury/severe_bleeding.png"));
      this.injuryTiles.push(new TileModel("Internal bleeding", "assets/icon/injury/internal_bleeding.png"));
      this.injuryTiles.push(new TileModel("Poisoning", "assets/icon/injury/poisoning.png"));
      this.injuryTiles.push(new TileModel("Emergency child birth", "assets/icon/injury/child_birth.png"));
      this.injuryTiles.push(new TileModel("Skin Wounds", "assets/icon/injury/skin_wounds.png"));
      this.injuryTiles.push(new TileModel("Skin Wounds with Embedded Object", "assets/icon/injury/skin_wounds_with_embedded_object.png"));
      this.injuryTiles.push(new TileModel("Burns", "assets/icon/injury/burns.png"));
      this.injuryTiles.push(new TileModel("Bee or wasp sting", "assets/icon/injury/bee_sting.png"));
      this.injuryTiles.push(new TileModel("Snake bite", "assets/icon/injury/snake.png"));
      this.injuryTiles.push(new TileModel("Spider bite", "assets/icon/injury/spider.png"));
      this.injuryTiles.push(new TileModel("Scorpion sting", "assets/icon/injury/scorpion.png"));
      this.injuryTiles.push(new TileModel("Dog bite", "assets/icon/injury/dog.png"));
      this.injuryTiles.push(new TileModel("Cat bite", "assets/icon/injury/cat.png"));
      this.injuryTiles.push(new TileModel("Monkey bite", "assets/icon/injury/monkey.png"));
      this.injuryTiles.push(new TileModel("Human bite", "assets/icon/injury/human.png"));
      this.injuryTiles.push(new TileModel("Broken limb", "assets/icon/injury/broken_limb.png"));
      this.injuryTiles.push(new TileModel("Dislocated limb", "assets/icon/injury/dislocated_limb.png"));
      this.injuryTiles.push(new TileModel("Injuries to muscles or joints", "assets/icon/injury/injuries_to_muscles_joints_or_limbs.png"));
      this.injuryTiles.push(new TileModel("Suspected spinal injuries", "assets/icon/injury/spinal.png"));
      this.injuryTiles.push(new TileModel("Object stuck in the eye", "assets/icon/injury/eye_injury.png"));
      this.injuryTiles.push(new TileModel("Speck in the eye", "assets/icon/injury/eye_injury.png"));
      this.injuryTiles.push(new TileModel("Blow to the eye", "assets/icon/injury/eye_injury.png"));
      this.injuryTiles.push(new TileModel("Harmful liquids in the eye", "assets/icon/injury/eye_injury.png"));
      this.injuryTiles.push(new TileModel("Nose Bleed", "assets/icon/injury/nose_bleed.png"));
      this.injuryTiles.push(new TileModel("Fainting", "assets/icon/injury/fainting.png"));
      this.injuryTiles.push(new TileModel("Fever", "assets/icon/injury/fever.png"));
      this.injuryTiles.push(new TileModel("Fits", "assets/icon/injury/fits.png"));
      this.injuryTiles.push(new TileModel("Diarrhoea", "assets/icon/injury/diarrhoea.png"));
      this.injuryTiles.push(new TileModel("Measles", "assets/icon/injury/measles.png"));
      this.injuryTiles.push(new TileModel("Concussion", "assets/icon/injury/concussion.png"));
      this.injuryTiles.push(new TileModel("Hypoglycemia", "assets/icon/injury/hypoglycemia.png"));
      this.injuryTiles.push(new TileModel("Hypothermia", "assets/icon/injury/hypothermia.png"));
      this.injuryTiles.push(new TileModel("Heat stroke", "assets/icon/injury/heat_stroke.png"));
      this.injuryTiles.push(new TileModel("Injury I treated is not listed", "assets/icon/injury/general.png"));
  }

  prev(){
    this.router.navigate(['/page2']);
  }

  next(){
    if (this.injuryTiles.filter(x => x.selected).length == 0){
      this.showError = true;
      return;
    }
    this.formResult.injury = this.injuryTiles.filter(x => x.selected).map(x => x.title);
    this.formStore.setFormResult(this.formResult);
    this.router.navigate(['/page4']);
  }
}
