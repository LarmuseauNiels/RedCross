import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { CommonModule } from '@angular/common';
import { TilesComponent } from './tile/tiles.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    NavigatorComponent,
    TilesComponent
  ],
  exports: [
    HeaderComponent,
    NavigatorComponent,
    TilesComponent
  ]
})
export class SharedModule {}
