import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PagesRoutingModule } from './pages-routoing.module';
import { SharedModule } from '../shared/shared.module';
import { UserInformationPage } from './user-information/user-information.page';
import { AssistancePage } from './assistance/assistance.page';
import { InjuryPage } from './injury/injury.page';
import { MapPage } from './map/map.page';
import { ProfessionalHelpPage } from './professional-help/professional-help.page';
import { SettingPage } from './setting/setting.page';
import { StartPage } from './start/start.page';
import { EndPage } from './end/end.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    PagesRoutingModule
  ],
  declarations: [
    AssistancePage,
    InjuryPage,
    MapPage,
    ProfessionalHelpPage,
    SettingPage,
    UserInformationPage,
    StartPage,
    EndPage
  ],
  exports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ]
})
export class PagesModule {}
