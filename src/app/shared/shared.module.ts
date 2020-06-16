import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { CommonModule } from '@angular/common';
import { TilesComponent } from './tile/tiles.component';
import { FormStoreService } from '../services/formStore.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    HttpClientModule
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
  ],
  providers: [
    FormStoreService
  ]
})
export class SharedModule {}
