import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LiveTestPage } from './live-test.page';

describe('LiveTestPage', () => {
  let component: LiveTestPage;
  let fixture: ComponentFixture<LiveTestPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
