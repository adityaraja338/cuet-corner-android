import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoLinksPage } from './video-links.page';

const routes: Routes = [
  {
    path: '',
    component: VideoLinksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoLinksPageRoutingModule {}
