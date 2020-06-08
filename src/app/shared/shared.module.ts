import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    IonicModule,
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    NavigatorComponent
  ],
  exports: [
    HeaderComponent,
    NavigatorComponent
  ]
})
export class SharedModule {}
