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
          this.getTwoRandomAssistances(uniqueAssistances).map(x => this.assistanceTiles.push(this.assistancesMap.get(x)));

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

        //The assistance 'other' should always be included in the assistanceTiles array
        this.assistanceTiles.push(new TileModel('Other', 'assets/icon/other.png'));
      }
  }

  setAssistancePerInjuryMap() {
    this.assistancePerInjuryMap.set("General", ["AreaSafe", "AssessConditionCasualty", "RecoveryPosition", "ContactServices", "CheckConsciousness"]);
    this.assistancePerInjuryMap.set("Stroke", ["VictimRest", "SupportVictim", "TalkToVictim", "RecoveryPosition"]);
    this.assistancePerInjuryMap.set("Unconsciousness", ["OpenAirway", "CheckBreathing", "CPR"])
    this.assistancePerInjuryMap.set("Choking", ["BlowBack", "AbdominalThrusts", "CPR"]);
    this.assistancePerInjuryMap.set("Chest Discomfort",["VictimRest", "CheckMedication", "CheckConsciousness", "CheckBreathing"]);
    this.assistancePerInjuryMap.set("Severe Bleeding",["HandProtection", "ApplyPressure", "ApplyPressureCleanCloth", "PressureDressing"]);
    this.assistancePerInjuryMap.set("Poisoning",["HandProtection", "DiscardProduct"]);
    this.assistancePerInjuryMap.set("Skin Wounds",["ApplyPressure", "ApplyPressureCleanCloth", "CleanWound", "DrySkin", "Cover"]);
    this.assistancePerInjuryMap.set("Skin Wounds with Embedded Object",["StabilizeObject", "BandageWound"]);
    this.assistancePerInjuryMap.set("Burns",["CoolBurn", "RemoveClothing", "ApplyHoney", "CoverWetWoundDressing", "BandageWound"]);
    this.assistancePerInjuryMap.set("Stings & Bites",["CheckAllergies", "RemoveSting", "CleanWound", "Icepack", "Cover"]);
    this.assistancePerInjuryMap.set("Injuries to muscles, joints or limbs",["ApplyPressure", "ImmobilizeLimb", "Splinting", "Icepack"]);
    this.assistancePerInjuryMap.set("Injuries to head, neck or back",["Stabilize"]);
    this.assistancePerInjuryMap.set("Eye Injuries",["ColdCompress", "RinseEyes", "CoverEyes"]);
    this.assistancePerInjuryMap.set("Nose Bleed",["PinchNose", "AssessBleeding"]);
    this.assistancePerInjuryMap.set("Coronavirus",["WashHands", "ContactServices", "Report"]);
    this.assistancePerInjuryMap.set("Fainting",["FreshAir", "LoosenClothing", "RecoveryPosition"]);
    this.assistancePerInjuryMap.set("Fever",["MeasureFever","PreventDehydration", "CheckMalaria"]);
    this.assistancePerInjuryMap.set("Fits",["AreaSafe", "RecoveryPosition" ]);
    this.assistancePerInjuryMap.set("Diarrhoea",["PreventDehydration", "CheckCholera"]);
    this.assistancePerInjuryMap.set("Measles",["WashHands", "IsolateVictim", "MeasureFever", "WaterOnEye", "PreventDehydration"]);
    this.assistancePerInjuryMap.set("Other", ["AreaSafe", "AssessConditionCasualty", "RecoveryPosition", "CheckConsciousness", "VictimRest", "SupportVictim", "TalkToVictim", "OpenAirway", "CPR", "BlowBack", "AbdominalThrusts", "CheckMedication", "CheckBreathing", "HandProtection", "ApplyPressure", "ApplyPressureCleanCloth", "PressureDressing", "DiscardProduct", "CleanWound", "DrySkin", "Cover", "StabilizeObject", "BandageWound", "CoolBurn", "RemoveClothing", "ApplyHoney", "CoverWetWoundDressing", "CheckAllergies", "RemoveSting", "Icepack", "ImmobilizeLimb", "Splinting", "Stabilize", "ColdCompress", "RinseEyes", "CoverEyes", "PinchNose", "AssessBleeding", "WashHands", "ContactServices", "Report", "FreshAir", "LoosenClothing", "PreventDehydration", "CheckMalaria", "CheckCholera", "IsolateVictim", "MeasureFever", "WaterOnEye"]); 
  }

  setAssisanceMap() {
    this.assistancesMap.set("AreaSafe", new TileModel('Make the area safe', 'assets/icon/assistance/safe_area.png' ));
    this.assistancesMap.set("AssessConditionCasualty", new TileModel('Assess the condition of the casualty', 'assets/icon/assistance/assess_condition.png'));
    this.assistancesMap.set("RecoveryPosition", new TileModel('Recovery position', 'assets/icon/assistance/recovery_position.png'));
    this.assistancesMap.set("CheckConsciousness", new TileModel('Check for consciousness', 'assets/icon/assistance/check_consciousness.png'));
    this.assistancesMap.set("VictimRest", new TileModel('Let the victim rest', 'assets/icon/assistance/rest.png'));
    this.assistancesMap.set("SupportVictim", new TileModel('Support the victim', 'assets/icon/assistance/support_victim.png'));
    this.assistancesMap.set("TalkToVictim", new TileModel('Keep talking to the victim', 'assets/icon/assistance/talk_to_victim.png'));
    this.assistancesMap.set("OpenAirway", new TileModel('Open the Airway', 'assets/icon/assistance/open_airways.png'));
    this.assistancesMap.set("CheckBreathing", new TileModel('Check for Breathing', 'assets/icon/assistance/check_breathing.png'));
    this.assistancesMap.set("CPR", new TileModel('CPR/Chest Compressions', 'assets/icon/assistance/CPR.png'));
    this.assistancesMap.set("BlowBack", new TileModel('Blows on the back', 'assets/icon/assistance/fresh_air.png'));
    this.assistancesMap.set("AbdominalThrusts", new TileModel('Abdominal thrusts', 'assets/icon/assistance/abdominal_thrusts.png'));
    this.assistancesMap.set("CheckMedication", new TileModel('Check for medication', 'assets/icon/assistance/check_medication.png'));
    this.assistancesMap.set("HandProtection", new TileModel('Put on hand protection', 'assets/icon/assistance/hand_protection.png'));
    this.assistancesMap.set("ApplyPressure", new TileModel('Apply pressure on the wound', 'assets/icon/assistance/apply_pressure.png'));
    this.assistancesMap.set("ApplyPressureCleanCloth", new TileModel('Apply pressure on the wound with clean cloth', 'assets/icon/assistance/pressure_clean_cloth.png'));
    this.assistancesMap.set("PressureDressing", new TileModel('Pressure Dressing', 'assets/icon/assistance/plaster.png'));
    this.assistancesMap.set("DiscardProduct", new TileModel('Discard leftover product', 'assets/icon/assistance/removal.png'));
    this.assistancesMap.set("CleanWound", new TileModel('Clean the wound', 'assets/icon/assistance/clean_wound.png'));
    this.assistancesMap.set("DrySkin", new TileModel('Dry the Skin', 'assets/icon/assistance/dry_skin.png'));
    this.assistancesMap.set("Cover", new TileModel('Cover with sterile gauze pad or plaster', 'assets/icon/assistance/plaster.png'));
    this.assistancesMap.set("StabilizeObject", new TileModel('Stabilize object', 'assets/icon/assistance/removal.png'));
    this.assistancesMap.set("BandageWound", new TileModel('Bandage the Wound', 'assets/icon/assistance/bandage.png'));
    this.assistancesMap.set("CoolBurn", new TileModel('Cool the burn', 'assets/icon/assistance/iced.png'));
    this.assistancesMap.set("RemoveClothing", new TileModel('Remove Clothing and jewellery if not stuck on the skin', 'assets/icon/assistance/removal.png'));
    this.assistancesMap.set("ApplyHoney", new TileModel('Apply cold liquid honey', 'assets/icon/assistance/honey.png'));
    this.assistancesMap.set("CoverWetWoundDressing", new TileModel('Cover with sterile wet wound dressing', 'assets/icon/assistance/bandage.png'));
    this.assistancesMap.set("CheckAllergies", new TileModel('Check for allergies', 'assets/icon/assistance/allergies.png'));
    this.assistancesMap.set("RemoveSting", new TileModel('Remove the sting', 'assets/icon/assistance/removal.png'));
    this.assistancesMap.set("Icepack", new TileModel('Apply icepack', 'assets/icon/assistance/iced.png'));
    this.assistancesMap.set("ImmobilizeLimb", new TileModel('Immobilize fractured limb', 'assets/icon/assistance/immobilize.png'));
    this.assistancesMap.set("Splinting", new TileModel('Splinting', 'assets/icon/assistance/splinting.png'));
    this.assistancesMap.set("Stabilize", new TileModel('Stabilize head and neck', 'assets/icon/assistance/stabilize.png'));
    this.assistancesMap.set("ColdCompress", new TileModel('Apply cold compress', 'assets/icon/assistance/iced.png'));
    this.assistancesMap.set("RinseEyes", new TileModel('Rinse the eyes', 'assets/icon/assistance/rinse_eye.png'));
    this.assistancesMap.set("CoverEyes", new TileModel('Cover the eyes', 'assets/icon/assistance/cover_eye.png'));
    this.assistancesMap.set("PinchNose", new TileModel('Pinch nose for 5 minutes', 'assets/icon/assistance/pinch.png'));
    this.assistancesMap.set("AssessBleeding", new TileModel('Assess the bleeding', 'assets/icon/assistance/assess_bleeding.png'));
    this.assistancesMap.set("WashHands", new TileModel('Wash your hands', 'assets/icon/assistance/clean_hands.png'));
    this.assistancesMap.set("ContactServices", new TileModel('Contact emergency services', 'assets/icon/assistance/emergency-service.png'));
    this.assistancesMap.set("Report", new TileModel('Report contacts', 'assets/icon/assistance/report.png'));
    this.assistancesMap.set("FreshAir", new TileModel('Provide with fresh air', 'assets/icon/assistance/fresh_air.png'));
    this.assistancesMap.set("LoosenClothing", new TileModel('Loosen clothing', 'assets/icon/assistance/clothing.png'));
    this.assistancesMap.set("MeasureFever", new TileModel('Measure fever', 'assets/icon/injury/fever.png'));
    this.assistancesMap.set("PreventDehydration", new TileModel('Prevent dehydration', 'assets/icon/assistance/dehydration.png'));
    this.assistancesMap.set("CheckMalaria", new TileModel('Check for Malaria', 'assets/icon/assistance/malaria.png'));
    this.assistancesMap.set("CheckCholera", new TileModel('Check for Cholera', 'assets/icon/assistance/cholera.png'));
    this.assistancesMap.set("IsolateVictim", new TileModel('Isolate victim', 'assets/icon/assistance/isolate.png'));
    this.assistancesMap.set("WaterOnEye", new TileModel('Dip lukewarm water onto the eyes', 'assets/icon/assistance/water_on_eye.png'));
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
    this.router.navigate(['/page3']);
  }

  next(){
    this.formResult.assistance = this.assistanceTiles.filter(x => x.selected).map(x => x.title);
    this.formStore.setFormResult(this.formResult);
    this.router.navigate(['/page5']);
  }

}
