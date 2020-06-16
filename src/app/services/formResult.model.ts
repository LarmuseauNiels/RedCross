export class FormResult{
  // Main
  assignDate: Date;
  macAddress: string;

  // Page 1 - User
  gender: string;
  ageRange: string;
  education: string;
  hadFATraining: boolean;
  numberOfFATraining: number | null;
  trainingByRC: boolean | null;
  blendedTraining: boolean | null;
  otherTrainingProvider: string | null;

  // Page 2 - Map
  longitude: number;
  latitude: number;

  // Page 3 - Setting
  setting: string;

  // Page 4 - Injury
  injury: string[];

  // Page 5 - Assistance
  assistance: string[];
  confidentApplyingFA: number;

  // Page 6 - Professional help
  phNeeded: boolean;
  phType: string[];
  phTimeToArriveMs: number;
  hospitalisationRequired: boolean;
}
