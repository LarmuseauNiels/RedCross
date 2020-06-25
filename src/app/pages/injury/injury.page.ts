import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TileModel } from "src/app/shared/tile/tile.model";
import { FormResult } from "src/app/services/formResult.model";
import { FormStoreService } from "src/app/services/formStore.service";

@Component({
  selector: "rc-injury",
  templateUrl: "./injury.page.html",
  styleUrls: ["./injury.page.scss"],
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
      this.injuryTiles.push(new TileModel("Unconscious with normal breathing", "assets/icon/injury/unconsciosness_breathing.png"))
      this.injuryTiles.push(new TileModel("Unconsciousness without normal breathing", "assets/icon/injury/unconsciosness.png"));
      this.injuryTiles.push(new TileModel("Drowning", "assets/icon/injury/drowning.png"));
      this.injuryTiles.push(new TileModel("Stroke", "assets/icon/injury/stroke.png"));
      this.injuryTiles.push(new TileModel("Choking", "assets/icon/injury/choking.png"));
      this.injuryTiles.push(new TileModel("Chest discomfort", "assets/icon/injury/chest_discomfort.png"));
      this.injuryTiles.push(new TileModel("Severe bleeding", "assets/icon/injury/severe_bleeding.png"));
      this.injuryTiles.push(new TileModel("Internal bleeding", "assets/icon/injury/internal_bleeding.png"));
      this.injuryTiles.push(new TileModel("Poisoning", "assets/icon/injury/poisoning.png"));
      this.injuryTiles.push(new TileModel("Emergency child birth", ""));
      this.injuryTiles.push(new TileModel("Skin Wounds", "assets/icon/injury/skin_wounds.png"));
      this.injuryTiles.push(new TileModel("Skin Wounds with Embedded Object", "assets/icon/injury/skin_wounds_with_embedded_object.png"));
      this.injuryTiles.push(new TileModel("Burns", "assets/icon/injury/burns.png"));
      this.injuryTiles.push(new TileModel("Bee or wasp sting", ""));
      this.injuryTiles.push(new TileModel("Snake bite", ""));
      this.injuryTiles.push(new TileModel("Spider bite", ""));
      this.injuryTiles.push(new TileModel("Scorpion sting", ""));
      this.injuryTiles.push(new TileModel("Dog bite", ""));
      this.injuryTiles.push(new TileModel("Cat bite", ""));
      this.injuryTiles.push(new TileModel("Monkey bite", ""));
      this.injuryTiles.push(new TileModel("Human bite", ""));
      this.injuryTiles.push(new TileModel("Broken limb", ""));
      this.injuryTiles.push(new TileModel("Dislocated limb", ""));
      this.injuryTiles.push(new TileModel("Injuries to muscles or joints", ""));
      this.injuryTiles.push(new TileModel("Suspected spinal injuries", ""));
      this.injuryTiles.push(new TileModel("Object stuck in the eye", ""));
      this.injuryTiles.push(new TileModel("Speck in the eye", ""));
      this.injuryTiles.push(new TileModel("Blow to the eye", ""));
      this.injuryTiles.push(new TileModel("Harmful liquids in the eye", ""));
      this.injuryTiles.push(new TileModel("Nose Bleed", "assets/icon/injury/nose_bleed.png"));
      this.injuryTiles.push(new TileModel("Fainting", "assets/icon/injury/fainting.png"));
      this.injuryTiles.push(new TileModel("Fever", "assets/icon/injury/fever.png"));
      this.injuryTiles.push(new TileModel("Fits", "assets/icon/injury/fits.png"));
      this.injuryTiles.push(new TileModel("Diarrhoea", "assets/icon/injury/diarrhoea.png"));
      this.injuryTiles.push(new TileModel("Measles", "assets/icon/injury/measles.png"));
      this.injuryTiles.push(new TileModel("Concussion", ""));
      this.injuryTiles.push(new TileModel("Hypoglycemia", ""));
      this.injuryTiles.push(new TileModel("Hypothermia", ""));
      this.injuryTiles.push(new TileModel("Heat stroke", ""));
      this.injuryTiles.push(new TileModel("injury I treated is not listed", "assets/icon/other.png"));
  }

  prev(){
    this.router.navigate(["/page2"]);
  }

  next(){
    this.formResult.injury = this.injuryTiles.filter(x => x.selected).map(x => x.title);
    this.formStore.setFormResult(this.formResult);
    this.router.navigate(["/page4"]);
  }
}
