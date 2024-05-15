import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CountdownModule } from 'ngx-countdown';

import { LiveTestPageRoutingModule } from './live-test-routing.module';

import { LiveTestPage } from './live-test.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiveTestPageRoutingModule,
    CountdownModule
  ],
  declarations: [LiveTestPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LiveTestPageModule {}
