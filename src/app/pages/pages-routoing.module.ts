import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserInformationPage } from './user-information/user-information.page';
import { StartPage } from './start/start.page';
import { EndPage } from './end/end.page';
import { MapPage } from './map/map.page';
import { SettingPage } from './setting/setting.page';
import { InjuryPage } from './injury/injury.page';
import { AssistancePage } from './assistance/assistance.page';
import { ProfessionalHelpPage } from './professional-help/professional-help.page';
import { TermsAndConditionsPage } from './start/termsAndConditions/termsAndConditions.page';
import { SettingInfoPage } from './setting/setting-info/setting-info.page';

const routes: Routes = [
  {
    path: '',
    component: StartPage
  },
  {
    path: 'page1',
    component: SettingPage
  },
  {
    path: 'settingInfo',
    component: SettingInfoPage
  },
  {
    path: 'termsAndConditions',
    component: TermsAndConditionsPage
  },
  {
    path: 'page2',
    component: MapPage
  },
  {
    path: 'page3',
    component: InjuryPage
  },
  {
    path: 'page4',
    component: AssistancePage
  },
  {
    path: 'page5',
    component: ProfessionalHelpPage
  },
  {
    path: 'page6',
    component: UserInformationPage
  },
  {
    path: 'end',
    component: EndPage
  }
  ,
  {
    path: '**',
    component: StartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
