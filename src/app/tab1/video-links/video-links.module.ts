import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoLinksPageRoutingModule } from './video-links-routing.module';

import { VideoLinksPage } from './video-links.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoLinksPageRoutingModule
  ],
  declarations: [VideoLinksPage]
})
export class VideoLinksPageModule {}
