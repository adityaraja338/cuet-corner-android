import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'study-materials',
    loadChildren: () => import('./study-materials/study-materials.module').then( m => m.StudyMaterialsPageModule)
  },
  {
    path: 'pyqs',
    loadChildren: () => import('./pyqs/pyqs.module').then( m => m.PyqsPageModule)
  },
  {
    path: 'video-links',
    loadChildren: () => import('./video-links/video-links.module').then( m => m.VideoLinksPageModule)
  },
  {
    path: 'live-test/:testId',
    loadChildren: () => import('./live-test/live-test.module').then( m => m.LiveTestPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
