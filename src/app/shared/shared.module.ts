import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { CommonModule } from '@angular/common';
import { TilesComponent } from './tile/tiles.component';
import { FormStoreService } from '../services/formStore.service';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './error/error.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    HeaderComponent,
    NavigatorComponent,
    TilesComponent,
    ErrorComponent
  ],
  exports: [
    HeaderComponent,
    NavigatorComponent,
    TilesComponent,
    ErrorComponent
  ],
  providers: [
    FormStoreService
  ]
})
export class SharedModule {}
