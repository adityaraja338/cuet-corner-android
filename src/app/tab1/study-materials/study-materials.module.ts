import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudyMaterialsPageRoutingModule } from './study-materials-routing.module';

import { StudyMaterialsPage } from './study-materials.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudyMaterialsPageRoutingModule
  ],
  declarations: [StudyMaterialsPage]
})
export class StudyMaterialsPageModule {}
