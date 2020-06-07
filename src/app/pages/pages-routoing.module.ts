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


const routes: Routes = [
  {
    path: '',
    component: StartPage
  },
  {
    path: 'page1',
    component: UserInformationPage
  },
  {
    path: 'page2',
    component: MapPage
  },
  {
    path: 'page3',
    component: SettingPage
  },
  {
    path: 'page4',
    component: InjuryPage
  },
  {
    path: 'page5',
    component: AssistancePage
  },
  {
    path: 'page6',
    component: ProfessionalHelpPage
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
