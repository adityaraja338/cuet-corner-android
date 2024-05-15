import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PyqsPageRoutingModule } from './pyqs-routing.module';

import { PyqsPage } from './pyqs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PyqsPageRoutingModule
  ],
  declarations: [PyqsPage]
})
export class PyqsPageModule {}
