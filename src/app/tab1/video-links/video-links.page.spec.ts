import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoLinksPage } from './video-links.page';

describe('VideoLinksPage', () => {
  let component: VideoLinksPage;
  let fixture: ComponentFixture<VideoLinksPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoLinksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
