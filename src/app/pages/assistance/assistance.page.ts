import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TileModel } from "src/app/shared/tile/tile.model";
import { FormResult } from "src/app/services/formResult.model";
import { FormStoreService } from "src/app/services/formStore.service";

@Component({
  selector: "rc-assistance",
  templateUrl: "./assistance.page.html",
  styleUrls: ["./assistance.page.scss"],
})
export class AssistancePage implements OnInit {

  public formResult: FormResult;
  public assistanceTiles: TileModel[];
  public injuries: string[];
  private assistancePerInjuryMap: Map<string, string[]> = new Map<string, string[]>();
  private assistancesMap: Map<string, TileModel> = new Map<string, TileModel>();

  constructor(public router: Router, public formStore: FormStoreService) {
    formStore.formResult.subscribe((result) => {this.formResult = result; });
    this.setAssistancePerInjuryMap();
    this.setAssisanceMap();
  }

  ngOnInit() {
      if (this.assistanceTiles){
        return;
      }

      this.assistanceTiles = [];
      
      this.injuries = this.formResult.injury;

      if(this.injuries != null)
      {
        //gather all the needed assistances
        var assistances = [].concat.apply([],this.injuries.map(x => this.assistancePerInjuryMap.get(x)));

        //Only keep the unique assistances;
        var uniqueAssistances = assistances.filter((v,i) => assistances.indexOf(v) === i);
      
        //Put the unique assistances in the assistanceTiles array
        uniqueAssistances.map(x =>this.assistanceTiles.push(this.assistancesMap.get(x)) );
      
        //Put two random assistances, that are not in the uniqueassisances array, in the assistanceTiles array
          //this.getTwoRandomAssistances(uniqueAssistances).map(x => this.assistanceTiles.push(this.assistancesMap.get(x)));

        this.assistanceTiles = this.assistanceTiles.sort(function(x, y) {
          var xTitle = x.title;
          var yTitle = y.title;

          if (xTitle < yTitle) {
            return -1;
          }
          if (xTitle > yTitle) {
            return 1;
          }
        
          // titles must be equal
          return 0;
        });

        //The assistance "other" should always be included in the assistanceTiles array
        this.assistanceTiles.push(new TileModel("Action I took is not listed", "assets/icon/other.png"));
      }
  }

  setAssistancePerInjuryMap() {
    this.assistancePerInjuryMap.set("Unconscious with normal breathing", ["RecoveryPosition","CheckConsciousnessAndBreathing", "CPR", "LayBack"]);
    this.assistancePerInjuryMap.set("Unconsciousness without normal breathing", ["RescueBreaths", "ChestCompression", "AED", "RecoveryPosition"]);
    this.assistancePerInjuryMap.set("Drowning", ["OutWater", "RescueBreaths", "ChestCompression", "CoverPerson", "RemoveWaterLungs"]);
    this.assistancePerInjuryMap.set("Stroke", ["Fast", "ComfortablePosition", "CalmPerson", "UrgentTransport", "Stay", "DrinkWater"]);
    this.assistancePerInjuryMap.set("Choking", ["BlowBack", "AbdominalThrusts", "StartCPR", "KeepCoughing", "ChestThrusts", "DrinkWater", "LayDown", "UpsideDown", "RemoveObjectThroat"]);
    this.assistancePerInjuryMap.set("Chest discomfort", ["ComfortablePosition","UrgentTransport", "Stay",  "CheckConsciousness", "Aspirin", "AskToCough"]);
    this.assistancePerInjuryMap.set("Severe bleeding", ["HandProtection", "ApplyPressure", "BandageWound", "ThightBandage", "ConstrictLimb", "RemoveGauze", "ElevateLimb"]);
    this.assistancePerInjuryMap.set("Internal bleeding", ["KeepWarm", "StayCalm", "KeepCheckingConsciousness", "UrgentTransport", "DrinkWater"])
    this.assistancePerInjuryMap.set("Poisoning", ["PersonOnLeftSide", "UrgentTransport", "DrinkWater", "DrinkMilk", "Vomit", "Charcoal" ]);
    this.assistancePerInjuryMap.set("Emergency child birth", ["UrgentTransport", "ComfortablePosition", "DontPush", "SupportBaby", "CutBabyChord", "PushBelly", "DontUrinate"]);
    this.assistancePerInjuryMap.set("Skin Wounds",["HandProtection","CleanWound", "CoverWound", "CleanWoundDaily", "DesinfectWound", "TearDressing", "SpitOnWound"]);
    this.assistancePerInjuryMap.set("Skin Wounds with Embedded Object",["HandProtection", "StopMoving", "UrgentTransport", "RemoveObject", "ApplyPressure", "SpitOnWound"]);
    this.assistancePerInjuryMap.set("Burns",["CoolBurn", "RemoveClothing", "ApplyHoney", "CoverWetWoundDressing", "AloeVera", "OpenBlisters", "Butter", "Ice"]);
    this.assistancePerInjuryMap.set("Bee or wasp sting", ["RemoveSting", "RinseSkin", "CoolSkinIce", "ScratchBite", "BurnSting", "SuckVenom"]);
    this.assistancePerInjuryMap.set("Snake bite", ["LayDown", "PersonNotMove", "RinseVenomFromEyes", "ImmobilizeBodypart", "UrgentTransport", "CatchSnake", "SuckOrCutVenomOut", "RubHerbs", "PeeOnBite"]);
    this.assistancePerInjuryMap.set("Spider bite", ["HandProtection", "WashVenomAway", "CoolSkin", "ImmobilizeSplintLimb", "SuckOrCutVenomOut", "RubHerbs", "PeeOnBite" ]);
    this.assistancePerInjuryMap.set("Scorpion sting", ["HandProtection", "WashVenomAway", "CoolSkin", "ImmobilizeSplintLimb", "CatchScorpion", "SuckOrCutVenomOut", "RubHerbs", "PeeOnSting"]);
    this.assistancePerInjuryMap.set("Dog bite", ["HandProtection", "DirectPressureBleeding", "RinseWound", "CoverWound" ]);
    this.assistancePerInjuryMap.set("Cat bite", ["HandProtection", "DirectPressureBleeding", "RinseWound","CoverWound" ]);
    this.assistancePerInjuryMap.set("Monkey bite", ["HandProtection", "DirectPressureBleeding", "RinseWound","CoverWound" ]);
    this.assistancePerInjuryMap.set("Human bite", ["HandProtection", "DirectPressureBleeding", "RinseWound","CoverWound" ]);
    this.assistancePerInjuryMap.set("Broken limb", ["DirectPressureBleeding", "DontStandBrokenLeg", "ImmobilizeSplintLimb", "UrgentTransport", "RaiseLeg", "DislocatedLimb"]);
    this.assistancePerInjuryMap.set("Dislocated limb", ["ImmobilizeLimb", "UrgentTransport"]);
    this.assistancePerInjuryMap.set("Injuries to muscles or joints", ["CoolInjury", "PersonRest", "MassageInjury", "HeatInjury"]);
    this.assistancePerInjuryMap.set("Suspected spinal injuries", ["PersonNotMove", "HeadNeckStill", "WarmPerson", "UrgentTransport", "MoveNeck", "QuietPlace"]);
    this.assistancePerInjuryMap.set("Object stuck in the eye", ["CoverEyeLoosely", "HeadStill", "UrgentTransport", "RemoveObject"  ]);
    this.assistancePerInjuryMap.set("Speck in the eye", ["PersonSit", "RinseSpeckOut", "CoverEye"]);
    this.assistancePerInjuryMap.set("Blow to the eye", ["CoolEye", "RawMeat", "CoverEye", "RinseEye"]);
    this.assistancePerInjuryMap.set("Harmful liquids in the eye", ["RinseEye", "UrgentTransport"])
    this.assistancePerInjuryMap.set("Nose Bleed",["PinchNose", "HeadForward", "CottonBall", "HeadBackward"]);
    this.assistancePerInjuryMap.set("Fainting",["LayDown", "WetClothForehead", "LoosenClothing", "PreventFalling", "RaiseLegs", "WaterInFace", "SlapShakePerson", "DrinkCoffee"]);
    this.assistancePerInjuryMap.set("Fever",["PersonRest","PreventDehydration", "AntiFever", "Malaria", "RubAlcohol", "ColdShower"]);
    this.assistancePerInjuryMap.set("Fits",["AreaSafe", "LoosenClothingNeck", "RecoveryPosition", "HoldDown", "PutInMouth" ]);
    this.assistancePerInjuryMap.set("Diarrhoea",["PreventDehydration", "ZincTablets", "Cholera", "DontDrink"]);
    this.assistancePerInjuryMap.set("Measles",["IsolateVictim", "PersonRest", "PreventDehydration", "AntiFever", "WaterOnEye", ]);
    this.assistancePerInjuryMap.set("Concussion", ["PersonRest", "CalmPerson", "PersonNotMove", "Stay24Hours", "ImmobilizeHead", "ContinueActivities", "Awake24Hours"]);
    this.assistancePerInjuryMap.set("Hypoglycemia", ["PersonSit", "SugarDrink", "Dextrose", "SmallSnack", "RaiseLegs"]);
    this.assistancePerInjuryMap.set("Hypothermia", ["CoverPersonBlanket", "DryClothes", "WarmSugeryDrink", "RewarmPerson", "DrinkAlcohol", "HotShower", "CompressesArmsLegs", "MassagePerson"]);
    this.assistancePerInjuryMap.set("Heat stroke", ["PersonRest", "PersonOutOfHeat", "RemoveExcessClothing", "CoolPerson","DrinkCoolWater", "ContinueActivities"]);
  //   this.assistancePerInjuryMap.set("injury I treated is not listed", ["AreaSafe", "AssessConditionCasualty", "RecoveryPosition", "CheckConsciousness", "VictimRest", "SupportVictim", "TalkToVictim", "OpenAirway", "CPR", "BlowBack", "AbdominalThrusts", "CheckMedication", "CheckBreathing", "HandProtection", "ApplyPressure", "ApplyPressureCleanCloth", "PressureDressing", "DiscardProduct", "CleanWound", "DrySkin", "Cover", "StabilizeObject", "BandageWound", "CoolBurn", "RemoveClothing", "ApplyHoney", "CoverWetWoundDressing", "CheckAllergies", "RemoveSting", "Icepack", "ImmobilizeSplintLimb", "Splinting", "Stabilize", "ColdCompress", "RinseEyes", "CoverEyes", "PinchNose", "AssessBleeding", "WashHands", "ContactServices", "Report", "FreshAir", "LoosenClothing", "PreventDehydration", "CheckMalaria", "CheckCholera", "IsolateVictim", "MeasureFever", "WaterOnEye"]); 
  }

  setAssisanceMap() {
    this.assistancesMap.set("RecoveryPosition", new TileModel("Put person in recovery position", "assets/icon/assistance/recovery_position.png"));
    this.assistancesMap.set("CheckConsciousnessAndBreathing", new TileModel("Check consciousness and breathing each minute", "assets/icon/assistance/check_consciousness.png"));
    this.assistancesMap.set("CPR", new TileModel("Start CPR/Chest Compressions", "assets/icon/assistance/CPR.png"));
    this.assistancesMap.set("LayBack", new TileModel("Put person on their back", "assets/icon/assistance/lay_on_back.png" ));
    this.assistancesMap.set("RescueBreaths", new TileModel("Give rescue breaths", "assets/icon/assistance/rescue_breaths.png"));
    this.assistancesMap.set("ChestCompression", new TileModel("Give chest compressions", "assets/icon/assistance/CPR.png"));
    this.assistancesMap.set("AED", new TileModel("Use an AED/defibrillator", "assets/icon/assistance/aed.png"));
    this.assistancesMap.set("OutWater", new TileModel("Remove the person from the water", "assets/icon/assistance/out_water.png" ));
    this.assistancesMap.set("CoverPerson", new TileModel("Cover the person to keep warm", "assets/icon/assistance/cover_person.png" ));
    this.assistancesMap.set("RemoveWaterLungs", new TileModel("Remove water from the lungs", "assets/icon/assistance/no_water.png"));
    this.assistancesMap.set("Fast", new TileModel("Conduct the FAST test", "assets/icon/assistance/fast.png"));
    this.assistancesMap.set("ComfortablePosition", new TileModel("Help person in comfortable position", "assets/icon/assistance/recovery_position.png"));
    this.assistancesMap.set("CalmPerson", new TileModel("Calm the person", "assets/icon/assistance/calm_person.png"));
    this.assistancesMap.set("UrgentTransport", new TileModel("Arrange urgent transport to medical care", "assets/icon/assistance/emergency-service.png"));
    this.assistancesMap.set("Stay", new TileModel("Stay with the person", "assets/icon/assistance/stay.png"));
    this.assistancesMap.set("DrinkWater", new TileModel("Let the person drink some water", "assets/icon/assistance/drink.png"));
    this.assistancesMap.set("BlowBack", new TileModel("Give blows to the back", "assets/icon/assistance/fresh_air.png"));
    this.assistancesMap.set("AbdominalThrusts", new TileModel("Give abdominal thrusts", "assets/icon/assistance/abdominal_thrusts.png"));
    this.assistancesMap.set("StartCPR", new TileModel("Start CPR", "assets/icon/assistance/CPR.png"));
    this.assistancesMap.set("KeepCoughing", new TileModel("Tell the person to keep coughing ", "assets/icon/assistance/coughing.png"));
    this.assistancesMap.set("ChestThrusts", new TileModel("Give chest thrusts", "assets/icon/assistance/chest_compression.png"))
    this.assistancesMap.set("LayDown", new TileModel("Lay the person down", "assets/icon/assistance/lay_on_back.png" ));
    this.assistancesMap.set("UpsideDown", new TileModel("Hold the person upside down", "assets/icon/assistance/upside_down.png"))
    this.assistancesMap.set("RemoveObjectThroat", new TileModel("Try to remove the object from their throat", "assets/icon/assistance/removal.png"));
    this.assistancesMap.set("CheckConsciousness", new TileModel("Keep checking consciousness", "assets/icon/assistance/check_consciousness.png"));
    this.assistancesMap.set("Aspirin", new TileModel("Give the person aspirin", "assets/icon/assistance/medication.png"));
    this.assistancesMap.set("AskToCough", new TileModel("Ask the person to cough", "assets/icon/assistance/coughing.png"));
    this.assistancesMap.set("HandProtection", new TileModel("Cover your hands", "assets/icon/assistance/hand_protection.png"));
    this.assistancesMap.set("BandageWound", new TileModel("Wrap a bandage around the wound", "assets/icon/assistance/bandage.png"));
    this.assistancesMap.set("ThightBandage", new TileModel("Tightly bandage the wound until the colour changes", "assets/icon/assistance/bandage.png" ));
    this.assistancesMap.set("ConstrictLimb", new TileModel("Constrict the limb to cut off blood supply", "assets/icon/assistance/constrict_limb.png" ));
    this.assistancesMap.set("RemoveGauze", new TileModel("Remove the gauze when blood comes through", "assets/icon/assistance/remove_gauze.png" ));
    this.assistancesMap.set("ElevateLimb", new TileModel("Elevate the limb", "assets/icon/assistance/elevate_limb.png" ));
    this.assistancesMap.set("KeepWarm", new TileModel("Keep the person warm to prevent shock", "assets/icon/assistance/cover_person.png"  ))
    this.assistancesMap.set("StayCalm", new TileModel("Stay calm and reassure the person", "assets/icon/assistance/stay.png"  ))
    this.assistancesMap.set("KeepCheckingConsciousness", new TileModel("Keep checking consciousness and breathing", "assets/icon/assistance/check_consciousness.png"));
    this.assistancesMap.set("PersonOnLeftSide", new TileModel("Place the person on their left side", ""));
    this.assistancesMap.set("DrinkMilk", new TileModel("Let the person drink some milk", "assets/icon/assistance/drink.png"));
    this.assistancesMap.set("Vomit", new TileModel("Make the person vomit", "assets/icon/assistance/vomit.png"));
    this.assistancesMap.set("Charcoal", new TileModel("Let the person take activated charcoal", "assets/icon/assistance/charcoal.png" ));
    this.assistancesMap.set("DontPush", new TileModel("Tell the mother not to push when the baby's head is being delivered", ""));
    this.assistancesMap.set("SupportBaby", new TileModel("Support the baby's head and shoulders", ""));
    this.assistancesMap.set("CutBabyChord", new TileModel("Cut the baby's cord", ""));
    this.assistancesMap.set("PushBelly", new TileModel("Push on the mothers belly during labour or after delivery", ""));
    this.assistancesMap.set("DontUrinate", new TileModel("Make sure the mother doesn't urinate during labour", ""));
    this.assistancesMap.set("CleanWound", new TileModel("Clean the wound", "assets/icon/assistance/clean_wound.png"));
    this.assistancesMap.set("CoverWound", new TileModel("Clean the wound", ""));
    this.assistancesMap.set("CleanWoundDaily", new TileModel("Clean the wound daily if the wound is infected", ""));
    this.assistancesMap.set("DesinfectWound", new TileModel("Desinfect the wound ", ""));
    this.assistancesMap.set("TearDressing", new TileModel("Tear of the dressing", ""));
    this.assistancesMap.set("SpitOnWound", new TileModel("Spit on the wound", ""));
    this.assistancesMap.set("StopMoving", new TileModel("stop the object from moving", ""));
    this.assistancesMap.set("RemoveObject", new TileModel("Remove the object as soon as possible", ""));
    this.assistancesMap.set("ApplyPressure", new TileModel("Apply direct pressure to the wound", "assets/icon/assistance/apply_pressure.png"));
    this.assistancesMap.set("CoolBurn", new TileModel("Cool the burn", "assets/icon/assistance/iced.png"));
    this.assistancesMap.set("RemoveClothing", new TileModel("Remove Clothing and jewellery if not stuck on the skin", "assets/icon/assistance/removal.png"));
    this.assistancesMap.set("ApplyHoney", new TileModel("Apply cold liquid honey", "assets/icon/assistance/honey.png"));
    this.assistancesMap.set("CoverWetWoundDressing", new TileModel("Cover with sterile wet wound dressing", "assets/icon/assistance/bandage.png"));
    this.assistancesMap.set("AloeVera", new TileModel("Apply aloe vera", ""));
    this.assistancesMap.set("OpenBlisters", new TileModel("Open the blisters", ""));
    this.assistancesMap.set("Butter", new TileModel("Apply butter", ""));
    this.assistancesMap.set("Ice", new TileModel("Apply ice", ""));
    this.assistancesMap.set("RemoveSting", new TileModel("Remove the sting", "assets/icon/assistance/removal.png"));
    this.assistancesMap.set("RinseSkin", new TileModel("Rinse the skin with water", ""));
    this.assistancesMap.set("CoolSkinIce", new TileModel("Cool the skin with ice", "assets/icon/assistance/iced.png"));
    this.assistancesMap.set("ScratchBite", new TileModel("Scratch the bite", ""));
    this.assistancesMap.set("BurnSting", new TileModel("Burn the sting", ""));
    this.assistancesMap.set("SuckVenom", new TileModel("Try to suck the venom out", ""));
    this.assistancesMap.set("PersonNotMove", new TileModel("Tell the person not to move", ""));
    this.assistancesMap.set("RinseVenomFromEyes", new TileModel("Rinse venom out of the eyes", ""));
    this.assistancesMap.set("ImmobilizeBodypart", new TileModel("Immobilize/splint bodypart", ""));
    this.assistancesMap.set("CatchSnake", new TileModel("Catch the snake", ""));
    this.assistancesMap.set("SuckOrCutVenomOut", new TileModel("Suck or cut the venom out", ""));
    this.assistancesMap.set("RubHerbs", new TileModel("Rub herbs on the bite", ""));
    this.assistancesMap.set("PeeOnBite", new TileModel("Pee on the bite", ""));
    this.assistancesMap.set("WashVenomAway", new TileModel("Wash away any venom", ""));
    this.assistancesMap.set("CoolSkin", new TileModel("Cool the skin", ""));
    this.assistancesMap.set("ImmobilizeSplintLimb", new TileModel("Immobilize/splint limb", ""));
    this.assistancesMap.set("CatchScorpion", new TileModel("Catch the scorpion", ""));
    this.assistancesMap.set("PeeOnSting", new TileModel("Pee on the sting", ""));
    this.assistancesMap.set("DirectPressureBleeding", new TileModel("Apply direct pressure to stop the bleeding", ""));
    this.assistancesMap.set("CoverWound", new TileModel("Cover the wound", ""));
    this.assistancesMap.set("RinseWound", new TileModel("Rinse the wound", ""));
    this.assistancesMap.set("DontStandBrokenLeg", new TileModel("Tell the person not to stand on a broken leg", ""));
    this.assistancesMap.set("RaiseLeg", new TileModel("Raise the leg", ""));
    this.assistancesMap.set("DislocatedLimb", new TileModel("Reset a dislocated limb", ""));
    this.assistancesMap.set("ImmobilizeLimb", new TileModel("Immobilize the limb", ""));
    this.assistancesMap.set("CoolInjury", new TileModel("Cool the injury", "assets/icon/assistance/iced.png"));
    this.assistancesMap.set("PersonRest", new TileModel("Tell the person to rest", ""));
    this.assistancesMap.set("MassageInjury", new TileModel("Massage the injury", ""));
    this.assistancesMap.set("HeatInjury", new TileModel("Put heat on the injury", ""));
    this.assistancesMap.set("HeadNeckStill", new TileModel("Keep the head and neck still", ""));
    this.assistancesMap.set("WarmPerson", new TileModel("Keep the person warm", ""));
    this.assistancesMap.set("MoveNeck", new TileModel("Ask the person to slowly start moving the neck again", ""));
    this.assistancesMap.set("QuietPlace", new TileModel("Move the person to a quiet place", ""));
    this.assistancesMap.set("CoverEyeLoosely", new TileModel("Loosely cover the eye", "assets/icon/assistance/cover_eye.png"));
    this.assistancesMap.set("HeadStill", new TileModel("Keep the head as still as possible", ""));
    this.assistancesMap.set("PersonSit", new TileModel("Ask the person to sit", ""));
    this.assistancesMap.set("RinseSpeckOut", new TileModel("Rinse the speck out of the eye", ""));
    this.assistancesMap.set("CoverEye", new TileModel("Cover the eye", "assets/icon/assistance/cover_eye.png"));
    this.assistancesMap.set("CoolEye", new TileModel("Cool the eye", "assets/icon/assistance/iced.png"));
    this.assistancesMap.set("RawMeat", new TileModel("Put raw meat on the eye", ""));
    this.assistancesMap.set("RinseEye", new TileModel("Rinse the eye", "assets/icon/assistance/rinse_eye.png"));
    this.assistancesMap.set("PinchNose", new TileModel("Ask the person to pinch his nose", "assets/icon/assistance/pinch.png"));
    this.assistancesMap.set("HeadForward", new TileModel("Tilt the head forwards", ""));
    this.assistancesMap.set("CottonBall", new TileModel("Put a cotton ball in the nose", ""));
    this.assistancesMap.set("HeadBackward", new TileModel("Tilt the head backwards", ""));
    this.assistancesMap.set("WetClothForehead", new TileModel("Put a wet cloth on the forehead", ""));
    this.assistancesMap.set("LoosenClothing", new TileModel("Loosen tight clothing ", "assets/icon/assistance/clothing.png"));
    this.assistancesMap.set("PreventFalling", new TileModel("Prevent the person from falling", ""));
    this.assistancesMap.set("RaiseLegs", new TileModel("Raise the legs", ""));
    this.assistancesMap.set("WaterInFace", new TileModel("Throw some water in the face", ""));
    this.assistancesMap.set("SlapShakePerson", new TileModel("Slap or shake the person", ""));
    this.assistancesMap.set("DrinkCoffee", new TileModel("Let the person drink coffee", ""));
    this.assistancesMap.set("PreventDehydration", new TileModel("Let the person drink lots of fluids", "assets/icon/assistance/dehydration.png"));
    this.assistancesMap.set("AntiFever", new TileModel("Give anti-fever medication", "medication.png"));
    this.assistancesMap.set("Malaria", new TileModel("Find medical attention for malaria", "assets/icon/assistance/malaria.png"));
    this.assistancesMap.set("RubAlcohol", new TileModel("Rub alcohol on the skin", ""));
    this.assistancesMap.set("ColdShower", new TileModel("Let the person take a cold bath or shower","" ));
    this.assistancesMap.set("AreaSafe", new TileModel("Remove objects around the person", "assets/icon/assistance/safe_area.png" ));
    this.assistancesMap.set("LoosenClothingNeck", new TileModel("Loosen tight clothing around the neck", ""));
    this.assistancesMap.set("HoldDown", new TileModel("Hold the person down", ""));
    this.assistancesMap.set("PutInMouth", new TileModel("Put something in the mouth", ""));
    this.assistancesMap.set("ZincTablets", new TileModel("Give the person zinc tablets", ""));
    this.assistancesMap.set("Cholera", new TileModel("Find medical treatment for cholera", "assets/icon/assistance/cholera.png"));
    this.assistancesMap.set("DontDrink", new TileModel("Make sure the person doesn't drink", ""));
    this.assistancesMap.set("IsolateVictim", new TileModel("Keep the person away from other people/children", "assets/icon/assistance/isolate.png"));
    this.assistancesMap.set("WaterOnEye", new TileModel("Dip lukewarm water onto the eyes", "assets/icon/assistance/water_on_eye.png"));
    this.assistancesMap.set("Stay24Hours", new TileModel("Keep someone with the person for 24 hours", ""));
    this.assistancesMap.set("ImmobilizeHead", new TileModel("Immobilize the head", ""));
    this.assistancesMap.set("ContinueActivities", new TileModel("Let the person continue their activities", ""));
    this.assistancesMap.set("Awake24Hours", new TileModel("Keep the person awake for 24 hours", ""));
    this.assistancesMap.set("SugarDrink", new TileModel("Give the person a sugary drink", ""));
    this.assistancesMap.set("Dextrose", new TileModel("Give the person dextrose or glucose powder", ""));
    this.assistancesMap.set("SmallSnack", new TileModel("Give the person a small snack", ""));
    this.assistancesMap.set("CoverPersonBlanket", new TileModel("Cover the person with a blanket", "assets/icon/assistance/cover_person.png" ));
    this.assistancesMap.set("DryClothes", new TileModel("Let the person put on warm dry clothes", "assets/icon/assistance/clothing.png"));
    this.assistancesMap.set("WarmSugeryDrink", new TileModel("Give the person a warm, sugary drink", ""));
    this.assistancesMap.set("RewarmPerson", new TileModel("Use warm objects to actively rewarm the person", ""));
    this.assistancesMap.set("DrinkAlcohol", new TileModel("Let the person drink alcohol", ""));
    this.assistancesMap.set("HotShower", new TileModel("Let the person take a hot bath or shower", ""));
    this.assistancesMap.set("CompressesArmsLegs", new TileModel("Put hot compresses to arms and legs", ""))
    this.assistancesMap.set("MassagePerson", new TileModel("Massage or rub the person", ""));
    this.assistancesMap.set("PersonOutOfHeat", new TileModel("Move the person out of the heat", ""));
    this.assistancesMap.set("RemoveExcessClothing", new TileModel("Remove excess clothing", "assets/icon/assistance/clothing.png"));
    this.assistancesMap.set("CoolPerson", new TileModel("Cool the person immediately ", "assets/icon/assistance/iced.png"));
    this.assistancesMap.set("DrinkCoolWater", new TileModel("Let the person drink cool water", "assets/icon/assistance/drink.png"));
  }

  getTwoRandomAssistances(uniqueAssistances)
  {
    var result: string[] = [];

    var allAssistances = Array.from(this.assistancesMap.keys());
    var wrongAssistances = allAssistances.filter(x => !uniqueAssistances.includes(x));

    if(wrongAssistances.length > 1)
    {
      var firstNumber = Math.round(Math.random() * wrongAssistances.length);
      var secondNumber =  Math.round(Math.random() * wrongAssistances.length);
      while(firstNumber === secondNumber) {
        secondNumber =  Math.round(Math.random() * wrongAssistances.length);
      }
  
      result.push(wrongAssistances[firstNumber]);
      result.push(wrongAssistances[secondNumber]);
    }

    return result;
  }

  prev(){
    this.router.navigate(["/page3"]);
  }

  next(){
    this.formResult.assistance = this.assistanceTiles.filter(x => x.selected).map(x => x.title);
    this.formStore.setFormResult(this.formResult);
    this.router.navigate(["/page5"]);
  }

}
