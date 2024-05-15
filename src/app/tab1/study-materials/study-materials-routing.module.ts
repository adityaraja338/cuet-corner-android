import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudyMaterialsPage } from './study-materials.page';

const routes: Routes = [
  {
    path: '',
    component: StudyMaterialsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudyMaterialsPageRoutingModule {}
